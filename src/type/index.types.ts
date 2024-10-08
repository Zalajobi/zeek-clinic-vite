import { ReactNode } from "react";

export interface SidebarItemProps {
  item: string;
  Icon: ReactNode;
  route?: string;
  child?: ChildSidebarItemProps[] | null;
}

interface ChildSidebarItemProps {
  item: string;
  Icon: ReactNode;
  route?: string;
  showSidebar?: boolean;
}

export interface SvgItemProps {
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}
