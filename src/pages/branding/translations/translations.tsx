import { Page, Layout, AlphaCard, TextField, Box } from "@shopify/polaris";
import _ from "lodash";
import { ItranslationFields } from "./translations.controller";
import { translationsController } from "./translations.controller";
import labels from "./constants";

function Translations() {
  const translationController = translationsController();
  const { getters, handlers } = translationController;
  const { translationData } = getters;
  const { handleChange } = handlers;
  return (
    <Page title="Translations" divider>
      <Layout>
        <Layout.AnnotatedSection
          id="storeDetails"
          title="Set your preferred language translation"
        >
          <AlphaCard>
            {Object.entries(translationData).map(([key, value]) => {
              const label = labels[key as keyof ItranslationFields];
              return label ? (
                <TextField
                  key={key}
                  label={label as string}
                  value={value as string}
                  onChange={handleChange(key)}
                  autoComplete="off"
                />
              ) : null;
            })}
          </AlphaCard>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
}

export default Translations;
