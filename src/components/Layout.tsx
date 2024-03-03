"use client";
import { LayoutInterface, MenuItem } from "@/interface/Layout";

import type { MenuProps } from "antd";
import { ConfigProvider, Grid, Layout as LayoutAntd, Menu } from "antd";
import { useState } from "react";
import ImageNext from "./Image";
import Text from "./Text";

// Author, Software Architect, Software Engineer, Software Developer : https://www.linkedin.com/in/wahyu-fatur-rizky

const { Header, Content, Sider } = LayoutAntd;

const { useBreakpoint } = Grid;

const Layout = ({ ...props }: LayoutInterface) => {
  const screens = useBreakpoint();

  const { lg, xl, xxl, xs } = screens;

  const [currentMenu, setCurrentMenu] = useState<string | null>(null);
  const [currentMenuNav, setCurrentMenuNav] = useState<string | null>(null);

  const [openKeys, setOpenKeys] = useState<string[] | undefined>(["sub1"]);

  const itemsMenu: MenuProps["items"] = [
    {
      icon: (
        <ImageNext
          src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/2sHnk28/Screenshot-2024-03-03-at-20-13-00.png`}
          width={32}
          height={32}
          priority
          alt="icon"
          className="h-auto w-auto"
        />
      ),
      label: "Approvals",
      key: "approvals",
      children: [
        {
          icon: (
            <ImageNext
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/2sHnk28/Screenshot-2024-03-03-at-20-13-00.png`}
              width={32}
              height={32}
              priority
              alt="icon"
              className="h-auto w-auto"
            />
          ),
          label: "asd",
          key: "to-review",
        },
      ],
    },
    {
      icon: (
        <ImageNext
          src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/2sHnk28/Screenshot-2024-03-03-at-20-13-00.png`}
          width={32}
          height={32}
          priority
          alt="icon"
          className="h-auto w-auto"
        />
      ),
      label: "Unfinished",
      key: "unfinished",
      children: [],
    },
    {
      icon: (
        <ImageNext
          src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/2sHnk28/Screenshot-2024-03-03-at-20-13-00.png`}
          width={32}
          height={32}
          priority
          alt="icon"
          className="h-auto w-auto"
        />
      ),
      label: "Finished",
      key: "finished",
      children: [],
    },
  ].map((item, index) => {
    const { icon, label, children } = item;

    return {
      key: String(index + 1),
      icon: <div className="h-6 w-6">{icon}</div>,
      label: <Text label={label} />,
      children: children?.map((child, indexChild) => {
        const { icon, label: subLabel } = child;

        return {
          key: String(index + 1) + "-" + String(indexChild + 1),
          icon: <div className="h-6 w-6">{icon}</div>,
          label: <Text label={subLabel} />,
        };
      }) as MenuProps["items"],
    };
  });

  const itemsNav: MenuProps["items"] = [
    {
      label: "Tasks",
      key: "tasks",
    },
    {
      label: "File",
      key: "file",
    },
    {
      label: "Downloads",
      key: "downloads",
    },
    {
      label: "View",
      key: "view",
    },
    {
      label: "Help",
      key: "help",
    },
  ].map((item, index) => {
    const { label } = item;

    return {
      key: String(index + 1),
      label: <Text label={label} />,
    };
  });

  const onClickMenu: MenuProps["onClick"] = (e) => {
    setCurrentMenu(e.key);
  };

  const onClickMenuNav: MenuProps["onClick"] = (e) => {
    setCurrentMenuNav(e.key);
  };

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys?.indexOf(key) === -1);
    if (
      latestOpenKey &&
      itemsMenu.map((itemSubMenu: MenuItem) => itemSubMenu?.key).indexOf(latestOpenKey) === -1
    ) {
      setOpenKeys(keys);
    } else {
      const resKeys = latestOpenKey ? [latestOpenKey] : [];
      setOpenKeys(resKeys);
    }
  };

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              siderBg: "#16161E",
            },
            Menu: {
              itemSelectedColor: "#185288",
              itemSelectedBg: "rgba(10, 173, 224, 0.15)",
              darkItemBg: "#16161E",
            },
          },
        }}
      >
        <LayoutAntd>
          <Header
            style={{
              padding: 24,
              background: "#16161E",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Menu
              onClick={onClickMenuNav}
              selectedKeys={[currentMenuNav ?? ""]}
              theme="dark"
              mode="horizontal"
              items={itemsNav}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header>

          <Content>
            <LayoutAntd>
              <Sider
                theme="dark"
                className="scrollbar"
                style={{
                  height: "100vh",
                }}
              >
                <Menu
                  onClick={onClickMenu}
                  selectedKeys={[currentMenu ?? ""]}
                  onOpenChange={onOpenChange}
                  openKeys={openKeys}
                  theme="dark"
                  mode="inline"
                  items={itemsMenu}
                />
              </Sider>
              <Content>{props.children}</Content>
            </LayoutAntd>
          </Content>
        </LayoutAntd>
      </ConfigProvider>
    </div>
  );
};

export default Layout;
