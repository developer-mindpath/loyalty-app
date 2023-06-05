import { useCallback, useEffect, useState } from "react";
import {
  getEmailSettings,
  getIsLoading,
  settingsActions,
} from "../../../redux/reducers/settings";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import SettingsAction from "../../../redux/actions/settingsAction";
import useContextualSave from "../../../hooks/useContextualSave";
import { IGetEmailSettingsResponse } from "../../../types";
import ObjectUtil from "../../../utils/object";

export interface IEmailControllerResponse {
  getters: {
    loading: boolean;
    data: IGetEmailSettingsResponse;
    customEmailDomain?: string;
  };
  handlers: {
    handleChange: (key: string) => (value: string) => void;
    handleCustomEmailDomain: (value: string) => void;
    handleCustomEmailDomainUpdate: () => Promise<void>;
  };
}

/**
 * Email controller
 * @returns {IEmailControllerResponse}
 */
export const EmailController = (): IEmailControllerResponse => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(getEmailSettings);
  const loading = useAppSelector(getIsLoading);
  const [initalState, setInital] = useState(data);
  const [customEmailDomain, setCustomEmailDomain] = useState<string>();

  /**
   * Get Page Data
   */
  const getData = useCallback(async () => {
    //TODO Giving a dummy id this will be replaced by user id later
    const id = "1";
    console.log("Working");

    try {
      const data = await dispatch(SettingsAction.getEmail(id)).unwrap();
      setInital(data.body);
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  /**
   * Handle Contextual Save Bar Save
   */
  const handleSave = async () => {
    try {
      const payload = ObjectUtil.getChanges(initalState, data);
      await dispatch(
        SettingsAction.updateEmail({
          id: "1",
          ...payload,
        })
      );
      setInital(data);
    } catch (e) {
      console.error("Error Occured");
    }
  };

  /**
   * Handle Contextual Save Bar Discard
   */
  const handleDiscard = () => {
    dispatch(settingsActions.setEmailState(initalState));
  };

  useContextualSave(initalState, data, {
    handleSave,
    handleDiscard,
  });

  /**
   * Handle Text Field Change
   * @param {string} key Identifier
   * @param {boolean} seperate Is the Text Field Seperated from main data
   * @returns {Function}
   */
  const handleChange = (key: string) => (value: string) => {
    dispatch(settingsActions.updateEmailState({ key, value }));
  };

  /**
   * Handle Custom Email Domain Value Change
   * @param {string} value
   */
  const handleCustomEmailDomain = (value: string) => {
    // TODO: Maybe we have to Add Validation
    setCustomEmailDomain(value);
  };

  /**
   * Handle Custom Email Domain Value Change
   * @param {string} value
   */
  const handleCustomEmailDomainUpdate = useCallback(async () => {
    if (!customEmailDomain) return;
    if (!data) return;

    try {
      await dispatch(
        SettingsAction.updateEmail({
          id: data.id,
          custom_email_domain: customEmailDomain,
        })
      );

      setInital((prev) => ({
        ...prev,
        custom_email_domain: customEmailDomain,
      }));
      dispatch(
        settingsActions.updateEmailState({
          key: "custom_email_domain",
          value: customEmailDomain,
        })
      );
    } catch (e) {
      console.error(e);
    }
  }, [customEmailDomain, data, dispatch]);

  return {
    getters: {
      data,
      loading,
      customEmailDomain,
    },
    handlers: {
      handleChange,
      handleCustomEmailDomain,
      handleCustomEmailDomainUpdate,
    },
  };
};
