"use client";

import Text from "@/components/Text";
import { ConfigProvider, Table, TableProps } from "antd";
import { DashboardTableDataType, TablePaginationConfig } from "@/interface/dashboard.interface";
import ImageNext from "@/components/Image";
import { Key, useCallback, useEffect, useState } from "react";
import { FilterValue } from "antd/es/table/interface";
import { actionButton, mockDataTable } from "./mock.data";
import Input from "@/components/Input";

export default function Home() {
  const [dataTable, setDataTable] = useState<DashboardTableDataType[]>([]);

  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  const [tableParams, setTableParams] = useState<{
    pagination: TablePaginationConfig;
  }>({
    pagination: {
      current: 1,
      pageSize: 10,
      showSizeChanger: true,
    },
  });

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: any
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setDataTable([]);
    }
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: Key[]) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };

  const fetchData = useCallback(() => {
    setDataTable(
      mockDataTable.map((item: DashboardTableDataType, index: number) => ({
        ...item,
        key: index,
        id: index,
      }))
    );

    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        total: mockDataTable.length,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(tableParams)]);

  const columns: TableProps<DashboardTableDataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      key: "name",
      render: (text: string) => {
        return (
          <div className="flex items-center gap-2">
            <ImageNext
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/2sHnk28/Screenshot-2024-03-03-at-20-13-00.png`}
              width={32}
              height={32}
              priority
              alt="icon"
              className="h-auto w-auto"
            />

            <div>
              <Text label={text} className="text-base font-normal text-gray-400" />
              <Text label={text} className="text-xs font-normal text-gray-400" />
            </div>
          </div>
        );
      },
    },
    {
      title: "Size",
      dataIndex: "size",
      sorter: (a, b) => a.size - b.size,
      key: "size",
      render: (text: string) => {
        return <Text label={`${text} KB`} className="text-base font-normal text-gray-400" />;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
      key: "status",
      render: (text: string) => {
        return <Text label={text} className="text-base font-normal text-gray-400" />;
      },
    },
    {
      title: "Status",
      dataIndex: "timeLeft",
      sorter: (a, b) => a.timeLeft - b.timeLeft,
      key: "timeLeft",
      render: (text: string) => {
        return <Text label={`${text} Sec`} className="text-base font-normal text-gray-400" />;
      },
    },
    {
      title: "Last Modification",
      dataIndex: "lastModification",
      sorter: (a, b) => a.lastModification.length - b.lastModification.length,
      key: "lastModification",
      render: (text: string) => {
        return <Text label={text} className="text-base font-normal text-gray-400" />;
      },
    },
  ];

  return (
    <div className="bg-primary-dark">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#16161EA6",
            colorText: "rgb(156 163 175)",
            colorBgContainer: "#16161E",
          },
          components: {
            Table: {
              rowHoverBg: "black",
              headerSplitColor: "#16161E",
            },
            Pagination: {
              itemActiveBg: "white",
              itemInputBg: "white",
              itemLinkBg: "white",
              itemBg: "white",
              itemActiveBgDisabled: "white",
              itemActiveColorDisabled: "white",
            },
          },
        }}
      >
        <div className="flex items-center p-6 lg:justify-between gap-10 overflow-x-scroll flex-nowrap border-2 border-[#22222A]">
          <Input
            name="search"
            type="text"
            required
            placeholder="Add url"
            prefixIcon={
              <ImageNext
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/G2nTYKs/Screenshot-2024-03-04-at-01-36-02.png`}
                width={32}
                height={32}
                priority
                alt="icon"
                className="h-auto w-auto"
              />
            }
            suffixIcon={
              <ImageNext
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/MMmPjtw/Screenshot-2024-03-04-at-02-21-35.png`}
                width={32}
                height={32}
                priority
                alt="icon"
                className="h-auto w-auto"
              />
            }
            classNameInput="rounded-xl bg-[#22222A] border-0 p-3 ps-12 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm"
          />

          {actionButton.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <ImageNext
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.img}`}
                width={32}
                height={32}
                priority
                alt="icon"
                className="h-[32px] w-[32px]"
              />

              <Text
                label={item.label}
                className="text-white text-gray-400 text-center sm:text-base text-xs"
              />
            </div>
          ))}
        </div>

        <div className="border-2 border-[#22222A] p-6">
          <Table
            columns={columns}
            dataSource={dataTable}
            scroll={{ x: 1400 }}
            pagination={tableParams.pagination}
            onChange={handleTableChange}
            rowSelection={rowSelection}
            rowKey={(record) => record.id}
          />
        </div>
      </ConfigProvider>
    </div>
  );
}
