import { EmptyState } from "@shopify/polaris";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const CommingSoon = () => {
  const navigate = useNavigate();

  return (
    <EmptyState
      heading="Comming Soon"
      action={{ content: "Go Back", onAction: () => navigate(-1) }}
      image="/assets/comming.png"
    >
      <p style={{ color: "var(--p-color-text-subdued)" }}>
        Exciting things are on the horizon! Stay tuned for something amazing
        coming soon
      </p>
    </EmptyState>
  );
};

export default memo(CommingSoon);
