import React, { memo } from "react";
import { ContextualSaveBar } from "@shopify/polaris";

interface IProps {
  showSaveBar: boolean;
  handleSave: () => void;
  handleDiscard: () => void;
}

const ContextualSaveBarWrapper = (props: IProps): JSX.Element => {
  const { showSaveBar, handleSave, handleDiscard } = props;

  if (!showSaveBar) return <> </>;

  return (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: handleSave,
        loading: false,
        disabled: false,
        content: "Save",
      }}
      discardAction={{
        onAction: handleDiscard,
        loading: false,
        disabled: false,
        content: "Discard",
      }}
      alignContentFlush
    />
  );
};

export default memo(ContextualSaveBarWrapper);
