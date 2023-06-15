import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import ContextualSaveBar from "../components/ContextualSaveBar";
import { useLocation } from "react-router-dom";

export interface IFireContextualSaveContext {
  handleSave: () => void;
  handleDiscard: () => void;
}

interface IContextualSaveContextProps {
  isVisible: boolean;
  setVisiblity: (arg: boolean) => void;
  fire: (arg: IFireContextualSaveContext) => void;
}

const ContextualSaveContext = createContext({
  isVisible: false,
  fire: () => ({}),
  setVisiblity: () => ({}),
} as IContextualSaveContextProps);

interface IContextualSaveProvider {
  children: ReactNode;
}

const ContextualSaveProvider = ({ children }: IContextualSaveProvider) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const location = useLocation();

  const [data, setData] = useState<IFireContextualSaveContext>(
    {} as IFireContextualSaveContext
  );

  const setVisiblity = (state = false) => {
    setVisible(state);
  };

  const fire = useCallback((payload: IFireContextualSaveContext) => {
    setData(payload);
    setVisiblity(true);
  }, []);

  const value = useMemo(
    () => ({
      fire,
      isVisible,
      setVisiblity,
    }),
    [fire, isVisible]
  );

  useEffect(() => {
    setVisiblity();
  }, [location]);

  return (
    <ContextualSaveContext.Provider value={value}>
      <ContextualSaveBar
        showSaveBar={isVisible}
        handleSave={data.handleSave}
        handleDiscard={data.handleDiscard}
      />
      {children}
    </ContextualSaveContext.Provider>
  );
};

export const useContextualSaveContext = () => useContext(ContextualSaveContext);
export default ContextualSaveProvider;
