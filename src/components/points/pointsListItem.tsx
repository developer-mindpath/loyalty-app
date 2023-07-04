import { ChangeEvent, memo, useState } from "react";
import Toggle from "react-toggle";
import {
  Badge,
  Box,
  Button,
  HorizontalStack,
  Icon,
  Text,
} from "@shopify/polaris";
import { DragHandleMinor, EditMinor } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hook";
import { AsyncThunk } from "@reduxjs/toolkit";
import { IStateUpdate } from "@/types/program/points/earnPoint";

interface IPointListItemProps {
  icon: string;
  path: string;
  checked: boolean;
  disableDrag?: boolean;
  id: number;
  name?: string;
  points?: string | number;
  handler?: AsyncThunk<IStateUpdate, IStateUpdate, any>;
}

const PointListItem = (props: IPointListItemProps) => {
  const { id, name, icon, checked, points, path, disableDrag, handler } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Handle Toggle Update
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns
   */
  const handleUpdate = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!id) return;
    if (!handler) return;
    const { checked } = e.target;
    try {
      setLoading(true);
      await dispatch(handler({ id, state: checked })).unwrap();
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <Box paddingBlockStart="4" paddingBlockEnd="4">
      <HorizontalStack align="space-between" blockAlign="center">
        <div style={{ width: "50%" }}>
          <div style={{ width: "fit-content" }}>
            <HorizontalStack>
              <img src={icon} alt={name} height={25} width={25} />
              <Box paddingInlineStart="4">
                <Text as="p" variant="headingSm">
                  {name}
                </Text>
                {points && <Badge>{`${points} Points`}</Badge>}
              </Box>
            </HorizontalStack>
          </div>
        </div>

        <Box paddingInlineStart="4">
          <HorizontalStack blockAlign="center">
            <Button icon={EditMinor} onClick={() => navigate(path)}>
              Edit
            </Button>
            <Box paddingInlineStart="4">
              <Toggle
                checked={checked}
                disabled={loading}
                onChange={handleUpdate}
              />
            </Box>
          </HorizontalStack>
        </Box>

        <div
          style={{
            width: "5%",
            display: disableDrag ? "none" : "initial",
          }}
        >
          <div
            data-movable-handle
            style={{ cursor: "grab", width: "fit-content" }}
          >
            <Box>
              <Icon source={DragHandleMinor} />
            </Box>
          </div>
        </div>
      </HorizontalStack>
    </Box>
  );
};

export default memo(PointListItem);
