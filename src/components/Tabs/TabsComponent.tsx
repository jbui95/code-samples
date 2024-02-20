import { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { TabContent } from "./TabContent";
import { TabsProps } from "./Tabs.props";

export const TabsComponent = ({ tabs }: TabsProps): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          {tabs.map((tab) => {
            return <Tab label={tab.label} key={tab.label} />;
          })}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => {
        return (
          <TabContent
            value={value}
            index={index}
            label={tab.label}
            key={tab.label}
          >
            {tab.body}
          </TabContent>
        );
      })}
    </Box>
  );
};
