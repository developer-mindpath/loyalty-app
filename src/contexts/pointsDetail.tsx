import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { IPointDetailResponse, IReferralAction } from "../types/program";
import {
  getEarnDetails,
  programPointActions,
} from "../redux/reducers/pointsProgram";
import { ProgramAction } from "../redux/actions/programActions";
import ObjectUtil from "../utils/object";
import useContextualSave from "../hooks/useContextualSave";
import { parseInt } from "lodash";

export type ChangeHandlerType = (
  key: string
) => (value: string | number | boolean) => void;

interface IPointDetailContext {
  error: boolean;
  loading: boolean;
  details: IPointDetailResponse;
  handleChange: ChangeHandlerType;
}

const PointDetailContext = createContext<IPointDetailContext>({
  error: false,
  loading: true,
  details: {
    id: 0,
    created_at: null,
    updated_at: null,
    point_action_id: 0,
    app_id: 0,
    points_amounts: 0,
    limit_count: null,
    limit_count_type: null,
    url_to_share: null,
    earning_method: null,
    status: "off",
    limit_count_enabled: null,
    admin_ref: 0,
    created_by: 0,
    updated_by: null,
    pointAction: {} as IReferralAction,
  },
  handleChange: () => () => ({}),
});

const PointDetailProvider = ({ children }: PropsWithChildren) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const details = useAppSelector(getEarnDetails);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [initalState, setIntialState] = useState<IPointDetailResponse>();

  const addNew = useCallback(async () => {
    try {
      const response = await dispatch(
        ProgramAction.addEarnPoint({
          action_key: searchParams.get("id") as string,
          action_icon: searchParams.get("img") as string,
          action_key_display_text: searchParams.get("name") as string,
          action_description: "Testing Description",
          ...(details as any),
        })
      ).unwrap();

      const currentAction = searchParams.get("id") as string;
      setIntialState(details);
      navigate(`/programs/points/${currentAction}/${response.id}`);
    } catch (e) {
      console.error(e);
    }
  }, [details, dispatch, navigate, searchParams]);

  const handleSave = useCallback(async () => {
    if (!id) return;

    if (id === "new") {
      addNew();
      return;
    }

    try {
      const payload = ObjectUtil.getChanges(initalState!, details);
      await dispatch(
        ProgramAction.updatePointDetail({
          ...payload,
          point_action_id: parseInt(id),
        })
      );
      setIntialState(details);
    } catch (e) {
      console.error(e);
    }
  }, [addNew, details, dispatch, id, initalState]);

  const handleDiscard = useCallback(async () => {
    await dispatch(programPointActions.setEarnDetails(initalState!));
  }, [dispatch, initalState]);

  useContextualSave(
    initalState,
    details,
    {
      handleSave,
      handleDiscard,
    },
    loading
  );

  const getData = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await dispatch(ProgramAction.getPointDetail(id!)).unwrap();
      setIntialState(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  }, [dispatch, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChange = useCallback(
    (key: string) => (value: string | boolean | number) => {
      dispatch(programPointActions.updateEarnState({ key, value }));
    },
    [dispatch]
  );

  const value: IPointDetailContext = useMemo(
    () => ({
      loading,
      error,
      details,
      handleChange,
    }),
    [details, error, handleChange, loading]
  );

  return (
    <PointDetailContext.Provider value={value}>
      {children}
    </PointDetailContext.Provider>
  );
};

export const usePointDetail = () => useContext(PointDetailContext);

export default PointDetailProvider;
