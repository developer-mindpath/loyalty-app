import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getEmailSettings,
  getIsLoading,
  settingsActions,
} from "../../../redux/reducers/settings";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import SettingsAction from "../../../redux/actions/settingsAction";
import useContextualSave from "../../../hooks/useContextualSave";
import ObjectUtil from "../../../utils/object";
import { ITextFieldRef } from "../../../components/textField";

/**
 * Email controller
 * @returns {IEmailControllerResponse}
 */
export const EmailController = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(getEmailSettings);
  const navigate = useNavigate();
  const loading = useAppSelector(getIsLoading);
  const [initalState, setInital] = useState(data);
  const [customEmailDomain, setCustomEmailDomain] = useState<string>();
  const nameRef = useRef<ITextFieldRef>(null);
  const emailRef = useRef<ITextFieldRef>(null);
  const replyEmailRef = useRef<ITextFieldRef>(null);
  const domainRef = useRef<ITextFieldRef>(null);
  const pathRef = useRef<ITextFieldRef>(null);

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
    const name = nameRef.current?.validate();
    const email = emailRef.current?.validate();
    const replyEmail = replyEmailRef.current?.validate();
    const domain = domainRef.current?.validate();
    const path = pathRef.current?.validate();

    if (!name || !email || !replyEmail || !domain || !path) return;

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
   * Handle Toggle
   * @param {ChangeEvent<HTMLInputElement>} event Is the Text Field Seperated from main data
   */
  const handleToggleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(
      settingsActions.updateEmailState({
        key: "status",
        value: String(event.target.checked),
      })
    );
  };

  /**
   * Handle Custom Email Domain Value Change
   * @param {string} value
   */
  const handleCustomEmailDomain = (value: string): void => {
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
      navigate,
      loading,
      customEmailDomain,
    },
    handlers: {
      handleChange,
      handleToggleChange,
      handleCustomEmailDomain,
      handleCustomEmailDomainUpdate,
    },
    ref: {
      nameRef,
      emailRef,
      replyEmailRef,
      domainRef,
      pathRef,
    },
  };
};
