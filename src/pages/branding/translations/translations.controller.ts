import { useCallback, useEffect, useState } from "react";
import ObjectUtil from "@/utils/object";
import useContextualSave from "@/hooks/useContextualSave";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  TranslationActions,
  getTranslations,
  getTranslationsState,
  hasError,
  translations,
} from "@/redux/reducers/translations";

export function translationsController() {
  const dispatch = useAppDispatch();
  const translationData = useAppSelector(getTranslations);
  const isLoading = useAppSelector(getTranslationsState);
  const error = useAppSelector(hasError);
  const {
    id,
    user_id,
    admin_ref,
    created_at,
    created_by,
    updated_at,
    updated_by,
    status,
    ...others
  } = translationData ?? {};
  const [initalState, setInital] = useState({});

  const getData = useCallback(async () => {
    try {
      const response = await dispatch(TranslationActions.get()).unwrap();
      setInital(response);
    } catch (e) {
      setInital({});
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  /**
   * Handle Data discard
   */
  const handleDiscard = () => {
    setInital(initalState);
  };

  const handleSave = async () => {
    const payload = ObjectUtil.getChanges(initalState, translationData);
    try {
      await dispatch(TranslationActions.update(payload));
      setInital(translationData);
    } catch (e) {
      console.error(e);
    }
  };

  useContextualSave(initalState, translationData, {
    handleSave,
    handleDiscard,
  });

  function handleChange(key: string) {
    return (value: string) => {
      dispatch(
        translations.setTranslation({ ...translationData, [key]: value })
      );
    };
  }

  return {
    error,
    isLoading,
    data: others,
    handleChange,
  };
}
