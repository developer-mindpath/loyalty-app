import { useState } from "react";
import { Form, FormLayout, TextField, Page, Card, AlphaCard, Text } from "@shopify/polaris";

export default function PolarisForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (value) => setTitle(value);
    const handleDescriptionChange = (value) => setDescription(value);
    const handleSubmit = (event) => {
        console.log(event);
        setTitle("");
        setDescription("");
    };

    return (
        <Page
            // breadcrumbs={[{ content: "Products", url: "/products" }]}
            title="Add Product"
            primaryAction={{
                content: "Save",
                disabled: false,
                onAction: handleSubmit
            }}
        >
            <AlphaCard sectioned>
                <Text as="h2" variant="bodyMd">
                    Content inside a card
                </Text>
                {/* <Form>
                    <FormLayout>
                        <TextField
                            label="Title"
                            type="text"
                            onChange={handleTitleChange}
                            value={title}
                        />
                        <TextField
                            label="Description"
                            type="text"
                            multiline={4}
                            onChange={handleDescriptionChange}
                            value={description}
                        />
                    </FormLayout>
                </Form> */}
            </AlphaCard>
        </Page>
    );
}
