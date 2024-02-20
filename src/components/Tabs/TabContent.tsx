import { Box } from "@mui/material";
import { TabContentProps } from "./Tabs.props";

export const TabContent = ({
  children,
  value,
  index,
  label,
  ...other
}: TabContentProps): JSX.Element => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};
