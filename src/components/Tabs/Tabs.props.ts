export interface TabContentProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  label: string;
}

export interface TabProps {
  body: React.ReactNode;
  label: string;
}

export interface TabsProps {
  tabs: TabProps[];
}
