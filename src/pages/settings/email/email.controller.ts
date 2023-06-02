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

export interface IEmailControllerResponse {
  getters: {
    data: IGetEmailSettingsResponse;
    customEmailDomain: string | undefined;
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
  // TODO : Add Loading State ?
  const loading = useAppSelector(getIsLoading);
  const [initalState, setInital] = useState(data);
  const [customEmailDomain, setCustomEmailDomain] = useState<string>();

  /**
   * Get Page Data
   */
  const getData = useCallback(() => {
    //TODO Giving a dummy id this will be replaced by user id later
    const id = "dummy id";
    try {
      dispatch(SettingsAction.getEmail(id));
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
  const handleSave = () => {
    dispatch(SettingsAction.updateEmail(data));
    setInital(data);
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
  }, [data.id, dispatch, customEmailDomain]);

  return {
    getters: {
      data,
      customEmailDomain,
    },
    handlers: {
      handleChange,
      handleCustomEmailDomain,
      handleCustomEmailDomainUpdate,
    },
  };
};
