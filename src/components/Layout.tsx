"use client";
import { LayoutInterface, MenuItem } from "@/interface/Layout";

import type { MenuProps } from "antd";
import { ConfigProvider, Grid, Layout as LayoutAntd, Menu } from "antd";
import { useRef, useState } from "react";
import ImageNext from "./Image";
import Text from "./Text";

// Author, Software Architect, Software Engineer, Software Developer : https://www.linkedin.com/in/wahyu-fatur-rizky

const { Header, Content, Footer, Sider } = LayoutAntd;

const { useBreakpoint } = Grid;

const Layout = ({ ...props }: LayoutInterface) => {
  const screens = useBreakpoint();

  const { lg, xl, xxl, xs } = screens;

  const [currentMenu, setCurrentMenu] = useState<string | null>(null);
  const [openKeys, setOpenKeys] = useState<string[] | undefined>(["sub1"]);

  const ref = useRef<any>(null);

  const items: MenuProps["items"] = [
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
  ].map((item, index) => {
    const { icon, label, children } = item;

    return {
      key: String(index + 1),
      icon: <div className="h-6 w-6">{icon}</div>,
      label: <Text label={label} className="font-bold" />,
      children: children?.map((child, indexChild) => {
        const { icon, label: subLabel } = child;

        return {
          key: String(index + 1) + "-" + String(indexChild + 1),
          icon: <div className="h-6 w-6">{icon}</div>,
          label: subLabel,
        };
      }) as MenuProps["items"],
    };
  });

  const onClickMenu: MenuProps["onClick"] = (e) => {
    setCurrentMenu(e.key);
  };

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys?.indexOf(key) === -1);
    if (
      latestOpenKey &&
      items.map((itemSubMenu: MenuItem) => itemSubMenu?.key).indexOf(latestOpenKey) === -1
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
            Menu: {
              itemSelectedColor: "#185288",
              itemSelectedBg: "rgba(10, 173, 224, 0.15)",
              itemBorderRadius: 0,
              itemMarginInline: 0,
              itemMarginBlock: 16,
            },
          },
        }}
      >
        <LayoutAntd hasSider>
          <Sider
            trigger={!(lg ?? xl ?? xxl) && null}
            theme="light"
            width={220}
            className="scrollbar"
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <Menu
              onClick={onClickMenu}
              selectedKeys={[currentMenu ?? ""]}
              onOpenChange={onOpenChange}
              openKeys={openKeys}
              theme="light"
              mode="inline"
              items={items}
            />
          </Sider>
          <LayoutAntd style={{ marginLeft: 220 }}>
            <Header
              className="drop-shadow-xl"
              style={{
                padding: xxl || xl || lg ? 24 : 8,
                position: "sticky",
                background: "white",
                top: 0,
                zIndex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div className="flex items-center gap-4">
                <Text className="text-secondary-blue font-bold" label="adasd" />
              </div>
            </Header>
            <Content style={{ overflow: "initial" }}>{props.children}</Content>
            <Footer style={{ textAlign: "center" }}></Footer>
          </LayoutAntd>
        </LayoutAntd>
      </ConfigProvider>
    </div>
  );
};

export default Layout;
