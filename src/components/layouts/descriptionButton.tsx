import { Box, Button } from "@shopify/polaris";

interface IDescriptionButton {
  description: string;
  buttonText: string;
  onClick: () => void;
}

const DescriptionButton = ({
  description,
  buttonText,
  onClick,
}: IDescriptionButton) => (
  <>
    <Box paddingBlockEnd="8">{description}</Box>
    <Button onClick={onClick}>{buttonText}</Button>
  </>
);

export default DescriptionButton;
