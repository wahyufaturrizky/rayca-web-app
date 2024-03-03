"use client";
import { LayoutInterface, MenuItem } from "@/interface/Layout";

import type { MenuProps } from "antd";
import { ConfigProvider, Grid, Layout as LayoutAntd, Menu } from "antd";
import { useState } from "react";
import ImageNext from "./Image";
import Input from "./Input";
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
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/6ZhGXdV/Screenshot-2024-03-03-at-23-56-43.png`}
              width={32}
              height={32}
              priority
              alt="icon"
              className="h-auto w-auto"
            />
          ),
          label: "Musics",
          key: "musics",
        },
        {
          icon: (
            <ImageNext
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/rM6Tqsz/Screenshot-2024-03-03-at-23-58-50.png`}
              width={32}
              height={32}
              priority
              alt="icon"
              className="h-auto w-auto"
            />
          ),
          label: "Compressed",
          key: "compressed",
        },
        {
          icon: (
            <ImageNext
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/DwyQMWL/Screenshot-2024-03-04-at-00-00-51.png`}
              width={32}
              height={32}
              priority
              alt="icon"
              className="h-auto w-auto"
            />
          ),
          label: "Videos",
          key: "videos",
        },
        {
          icon: (
            <ImageNext
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/bQXNWP9/Screenshot-2024-03-04-at-00-02-21.png`}
              width={32}
              height={32}
              priority
              alt="icon"
              className="h-auto w-auto"
            />
          ),
          label: "Programs",
          key: "programs",
        },
        {
          icon: (
            <ImageNext
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/Xy1Xwsb/Screenshot-2024-03-04-at-00-04-09.png`}
              width={32}
              height={32}
              priority
              alt="icon"
              className="h-auto w-auto"
            />
          ),
          label: "Documents",
          key: "documents",
        },
        {
          icon: (
            <ImageNext
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/QQ1X4jn/Screenshot-2024-03-04-at-00-05-45.png`}
              width={32}
              height={32}
              priority
              alt="icon"
              className="h-auto w-auto"
            />
          ),
          label: "APKs",
          key: "apks",
        },
        {
          icon: (
            <ImageNext
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/QQ1X4jn/Screenshot-2024-03-04-at-00-05-45.png`}
              width={32}
              height={32}
              priority
              alt="icon"
              className="h-auto w-auto"
            />
          ),
          label: "APKs",
          key: "apks",
        },
        {
          icon: (
            <ImageNext
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/jy9g8Yh/Screenshot-2024-03-04-at-00-06-40.png`}
              width={32}
              height={32}
              priority
              alt="icon"
              className="h-auto w-auto"
            />
          ),
          label: "Images",
          key: "images",
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
      label: <Text label={label} className="text-gray-400" />,
      children: children?.map((child, indexChild) => {
        const { icon, label: subLabel } = child;

        return {
          key: String(index + 1) + "-" + String(indexChild + 1),
          icon: <div className="h-6 w-6">{icon}</div>,
          label: <Text label={subLabel} className="text-gray-400" />,
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
      label: <Text label={label} className="text-gray-400" />,
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
              darkItemSelectedBg: "#16161EA6",
            },
          },
        }}
      >
        <LayoutAntd>
          <Header
            style={{
              padding: "32px 24px",
              background: "#16161E",
              display: "flex",
              alignItems: "center",
              borderBottom: "2px solid #22222A",
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

            <Input
              name="search"
              type="text"
              required
              placeholder="Search in the list"
              prefixIcon={
                <ImageNext
                  src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/mHJk6n4/Screenshot-2024-03-03-at-23-50-59.png`}
                  width={32}
                  height={32}
                  priority
                  alt="icon"
                  className="h-auto w-auto"
                />
              }
              classNameInput="rounded-xl bg-[#22222A] border-0 p-3 ps-12 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm"
            />
          </Header>

          <Content>
            <LayoutAntd>
              <Sider breakpoint="lg" theme="dark" className="scrollbar">
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
