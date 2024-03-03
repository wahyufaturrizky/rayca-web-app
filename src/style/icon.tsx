import Icon from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const IconDashboard = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25.3333 6.66667V9.33333H20V6.66667H25.3333ZM12 6.66667V14.6667H6.66667V6.66667H12ZM25.3333 17.3333V25.3333H20V17.3333H25.3333ZM12 22.6667V25.3333H6.66667V22.6667H12ZM28 4H17.3333V12H28V4ZM14.6667 4H4V17.3333H14.6667V4ZM28 14.6667H17.3333V28H28V14.6667ZM14.6667 20H4V28H14.6667V20Z"
      fill="currentColor"
    />
  </svg>
);

export const DashboardIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={IconDashboard} {...props} />
);
