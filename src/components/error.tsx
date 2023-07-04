import { PropsWithChildren, ReactElement, memo } from "react";
import { EmptyState, Box, Text, Link, Layout } from "@shopify/polaris";
import Hidden from "./hidden";

export interface IErrorState extends PropsWithChildren {
  hasError: boolean;
  title?: string;
  image?: string;
  description?: ReactElement;
}

const defaultDescription = (
  <Text as="span" color="subdued">
    We've been notified about this issue and it should be resolved shortly.
    <Box paddingBlockStart="4">
      You can try{" "}
      <Link onClick={() => window.location.reload()}>refreshing the</Link> page
      or <Link onClick={() => history.back()}>going back.</Link>
    </Box>
  </Text>
);

function ErrorState(props: IErrorState) {
  const {
    title = "We're sorry, but something went wrong",
    image = "/assets/error/error.svg",
    description = defaultDescription,
    hasError,
    children,
  } = props;

  return (
    <>
      <Layout>
        <Hidden isHidden={!hasError}>
          <EmptyState heading={title} image={image}>
            {description}
          </EmptyState>
        </Hidden>
      </Layout>
      <Hidden isHidden={hasError}>{children}</Hidden>
    </>
  );
}

export default memo(ErrorState);
