import {
  Box,
  DatePicker,
  Icon,
  LegacyCard,
  Popover,
  Range,
  TextField,
  VerticalStack,
} from "@shopify/polaris";
import { CalendarMinor } from "@shopify/polaris-icons";
import { memo, useEffect, useState } from "react";

export function VipDatePicker() {
  const [visible, setVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [{ month, year }, setDate] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
  });
  const formattedValue = selectedDate.toISOString().slice(0, 10);

  function handleInputValueChange() {
    console.log("handleInputValueChange");
  }
  function handleOnClose() {
    setVisible(false);
  }
  function handleMonthChange(month: number, year: number) {
    setDate({ month, year });
  }
  function handleDateSelection(date: Range) {
    setSelectedDate(date.start);
    setVisible(false);
  }
  useEffect(() => {
    if (selectedDate) {
      setDate({
        month: selectedDate.getMonth(),
        year: selectedDate.getFullYear(),
      });
    }
  }, [selectedDate]);
  return (
    <VerticalStack gap="1">
      <Box minWidth="420px">
        <Popover
          active={visible}
          autofocusTarget="none"
          preferredAlignment="left"
          fullWidth
          fullHeight
          preferInputActivator={false}
          preferredPosition="below"
          preventCloseOnChildOverlayClick
          onClose={handleOnClose}
          activator={
            <TextField
              role="combobox"
              label=" We can only account for activity from when you installed the
                  app."
              prefix={<Icon source={CalendarMinor} />}
              value={formattedValue}
              onFocus={() => setVisible(true)}
              onChange={handleInputValueChange}
              autoComplete="off"
            />
          }
        >
          <LegacyCard>
            <DatePicker
              month={month}
              year={year}
              selected={selectedDate}
              onMonthChange={handleMonthChange}
              onChange={handleDateSelection}
            />
          </LegacyCard>
        </Popover>
      </Box>
    </VerticalStack>
  );
}

export default memo(DatePicker);
