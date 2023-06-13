import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ResourceList,
  ResourceItem,
  Box,
  HorizontalStack,
  Text,
} from "@shopify/polaris";
import { IRewardsType, rewardType } from "../constants/reward";
import { useNavigate } from "react-router";
import { useMemo } from "react";
import _ from "lodash";

interface IEarningList {
  rewards: IRewardsType[];
  remove: any[];
}

const EarningList = (props: IEarningList) => {
  const { remove, rewards } = props;
  const navigate = useNavigate();

  const list = useMemo(() => {
    if (remove.length < 0) return rewardType;
    const filteredItems = _.filter(
      rewards,
      (item) => !remove.includes(item.id)
    );
    return filteredItems;
  }, [remove, rewards]);

  return (
    <ResourceList
      items={list}
      renderItem={(item: IRewardsType) => (
        <ResourceItem
          id={item.id}
          name={item.name}
          verticalAlignment="center"
          accessibilityLabel={`View details for ${item.name}`}
          media={<img width={25} height={25} alt={item.name} src={item.img} />}
          onClick={() =>
            navigate(
              `/programs/points/${item.id}/new?id=${item.id}&name=${item.name}&img=${item.img}`
            )
          }
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
      )}
    />
  );
};

export default EarningList;
