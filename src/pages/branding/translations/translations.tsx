import {
  Page,
  Layout,
  AlphaCard,
  TextField,
  Box,
  Loading,
  Spinner,
  HorizontalStack,
  EmptyState,
  Text,
  Link,
} from "@shopify/polaris";
import { translationsController } from "./translations.controller";
import labels from "./constants";
import Hidden from "@/components/hidden";
import ErrorState from "@/components/error";

function Translations() {
  const translationController = translationsController();
  const { error, data, handleChange, isLoading } = translationController;
  const translationsList = Object.entries(data);

  return (
    <Page title="Translations" divider>
      <ErrorState hasError={false}>
        <Hidden isHidden={!isLoading}>
          <Box padding="4">
            <HorizontalStack align="center">
              <Spinner />
            </HorizontalStack>
          </Box>
        </Hidden>
        <Hidden isHidden={isLoading}>
          <Layout>
            <Layout.AnnotatedSection title="Set your preferred language translation">
              <AlphaCard>
                <Hidden isHidden={translationsList.length > 0 || isLoading}>
                  <EmptyState
                    heading="Set your preferred language translation"
                    image="/assets/svg/translation.svg"
                  >
                    <Text as="p" color="subdued">
                      Customize your language preferences to ensure accurate and
                      personalized translations.
                    </Text>
                  </EmptyState>
                </Hidden>
                {translationsList.map(([key, value]) => {
                  const label = labels[key as keyof typeof data];
                  return (
                    <Box paddingBlockStart="2" key={key}>
                      <TextField
                        label={label}
                        value={value as string}
                        onChange={handleChange(key)}
                        autoComplete="off"
                      />
                    </Box>
                  );
                })}
              </AlphaCard>
            </Layout.AnnotatedSection>
          </Layout>
        </Hidden>
      </ErrorState>
    </Page>
  );
}

export default Translations;
