import { useMemo } from "react";
import { useNavigate } from "react-router";
import _ from "lodash";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ResourceList,
  ResourceItem,
  Box,
  HorizontalStack,
  Text,
  Divider,
} from "@shopify/polaris";
import { IRewardsListingType, rewardType } from "../utils/constants/reward";

interface IEarningList {
  rewards: IRewardsListingType[];
  remove: any[];
}

const EarningListItem = ({ item }: { item: IRewardsListingType }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const link = `/programs/points/${item.id}/new?id=${item.id}&name=${item.name}&img=${item.img}`;
    navigate(link);
  };

  return (
    <ResourceItem
      id={item.id}
      name={item.name}
      verticalAlignment="center"
      accessibilityLabel={`View details for ${item.name}`}
      media={<img width={35} height={35} alt={item.name} src={item.img} />}
      onClick={handleNavigate}
    >
      <Box padding="2">
        <HorizontalStack align="space-between" blockAlign="center">
          <Text as="h6" variant="bodyLg">
            {item.name}
          </Text>

          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </HorizontalStack>
      </Box>
    </ResourceItem>
  );
};

const EarningList = (props: IEarningList) => {
  const { remove, rewards } = props;

  const list = useMemo(() => {
    if (remove.length < 0) return rewardType;
    const filteredItems = _.filter(
      rewards,
      (item) => !remove.includes(item.id)
    );
    return filteredItems;
  }, [remove, rewards]);

  const seperatedList = useMemo(
    () => _.groupBy(list, (element) => element.type),
    [list]
  );

  if (seperatedList["undefined"]?.length !== list.length) {
    const keys = Object.keys(seperatedList);
    return (
      <>
        {Object.values(seperatedList).map((e, i) => {
          const key = keys[i] === "undefined" ? "Others" : keys[i];
          return (
            <div key={key}>
              <Box padding="2" paddingBlockStart={i > 0 ? "6" : "0"}>
                <Text as="p" variant="headingMd">
                  {key}
                </Text>
              </Box>
              <Divider />
              <ResourceList
                items={e}
                renderItem={(item: IRewardsListingType) => (
                  <EarningListItem item={item} />
                )}
              />
            </div>
          );
        })}
      </>
    );
  }

  return (
    <ResourceList
      items={list}
      renderItem={(item: IRewardsListingType) => (
        <EarningListItem item={item} />
      )}
    />
  );
};

export default EarningList;
