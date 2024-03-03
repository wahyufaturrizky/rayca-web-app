import { PaginationProps } from "antd";

export interface DashboardTableDataType {
  id: number;
  key: number;
  name: string;
  size: number;
  status: string;
  timeLeft: number;
  lastModification: string;
}

type TablePaginationPosition =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight"
  | "none";

export interface TablePaginationConfig extends PaginationProps {
  position?: TablePaginationPosition[];
}
