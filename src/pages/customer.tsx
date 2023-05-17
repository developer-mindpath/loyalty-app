import { useState } from "react";
import {
  Tabs,
  Text,
  Page,
  AlphaCard,
  Filters,
  Tag,
  ResourceList,
  Avatar,
  ResourceItem,
  HorizontalStack,
  VerticalStack,
  Pagination,
  Select,
  Badge,
} from "@shopify/polaris";
import { ResourceListSelectedItems } from "@shopify/polaris/build/ts/latest/src/utilities/resource-list";

const tabs = [
  {
    id: "all-customers-1",
    content: "All",
    accessibilityLabel: "All customers",
    panelID: "all-customers-content-1",
  },
  {
    id: "members-1",
    content: "Members",
    panelID: "accepts-marketing-content-1",
  },
  {
    id: "guest-1",
    content: "Guest",
    panelID: "repeat-customers-content-1",
  },
  {
    id: "excluded-1",
    content: "Excluded",
    panelID: "prospects-content-1",
  },
];

function Customers() {
  const [tab, setTab] = useState(0);
  const [sortValue, setSortValue] = useState("DATE_MODIFIED_DESC");
  const [selected, setSelected] = useState("today");
  const [selectedItems, setSelectedItems] = useState<ResourceListSelectedItems>(
    []
  );

  const items = [
    {
      id: "1",
      img: "",
      name: "Test",
      email: "mindpathdev@mindpath.com",
      status: "Guest",
      points: 0,
      vipTier: "Bronze",
      created: "About 12 hours ago",
    },
    {
      id: "2",
      img: "",
      name: "Test",
      email: "mindpathdev@mindpath.com",
      status: "Guest",
      points: 0,
      vipTier: "Bronze",
      created: "About 12 hours ago",
    },
  ];

  function renderItem(item: any, _id: string, index: number) {
    const { id, img, name, email, status, points, vipTier, created } = item;
    const media = <Avatar customer size="medium" name={name} source={img} />;

    return (
      <ResourceItem
        key={id}
        media={media}
        sortOrder={index}
        id={id.toString()}
        accessibilityLabel={`View details for ${name}`}
        onClick={() => ({})}
      >
        <HorizontalStack align="space-between">
          <VerticalStack>
            <Text variant="bodyMd" fontWeight="bold" as="h3">
              {name}
            </Text>
            <div>{email}</div>
          </VerticalStack>
          <Badge status="success">{status}</Badge>
          <VerticalStack>{points}</VerticalStack>
          <VerticalStack>{vipTier}</VerticalStack>
          <VerticalStack>{created}</VerticalStack>
        </HorizontalStack>
      </ResourceItem>
    );
  }

  return (
    <Page fullWidth title="Customer">
      <AlphaCard>
        <Tabs tabs={tabs} selected={tab} onSelect={setTab}>
          <div style={{ margin: "16px 0px" }}>
            <Filters
              filters={[]}
              queryPlaceholder="Search items"
              onQueryChange={function (queryValue: string): void {
                throw new Error("Function not implemented.");
              }}
              onQueryClear={function (): void {
                throw new Error("Function not implemented.");
              }}
              onClearAll={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div style={{ margin: "16px 0px" }}>
            <Tag>Status is Member</Tag>
          </div>
          <ResourceList
            resourceName={{
              singular: "customer",
              plural: "customers",
            }}
            selectable
            items={items}
            selectedItems={selectedItems}
            onSelectionChange={(items) => {
              setSelectedItems(items);
            }}
            sortValue={sortValue}
            sortOptions={[
              { label: "Newest update", value: "DATE_MODIFIED_DESC" },
              { label: "Oldest update", value: "DATE_MODIFIED_ASC" },
            ]}
            onSortChange={(selected) => {
              setSortValue(selected);
              console.log(`Sort option changed to ${selected}.`);
            }}
            renderItem={renderItem}
            showHeader
            totalItemsCount={50}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pagination
              hasPrevious
              onPrevious={() => {
                console.log("Previous");
              }}
              hasNext
              onNext={() => {
                console.log("Next");
              }}
            />
            <div style={{ margin: "16px 8px" }}>
              <Text variant="bodyMd" as={"h1"}>
                Page 1 of 1225 - Quick navigate to:
              </Text>
            </div>
            <Select
              value={selected}
              onChange={setSelected}
              options={[
                { label: "Page 1", value: "1" },
                { label: "Page 2", value: "2" },
                { label: "Page 1225", value: "1225" },
              ]}
              label={undefined}
            />
          </div>
        </Tabs>
      </AlphaCard>
    </Page>
  );
}

export default Customers;
