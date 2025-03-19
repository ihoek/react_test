import { useState, useEffect } from "react";
import "../App.css";
import "../MainStyle.css";
import {
  Input,
  Button,
  Table,
  notification,
  Select,
  ConfigProvider,
} from "antd";

const TableComponent = (props) => {
  let { data, setData, data_lst } = props;

  //옵션 선택 변수
  const [optionvalue, setOptionValue] = useState("red");
  //localStorage
  useEffect(() => {
    //console.log("data_lst", data_lst);
  }, []);

  //th
  const columns = [
    {
      title: "이름",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "나이",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "별명",
      dataIndex: "nickName",
      key: "nickName",
    },
    {
      title: "취미",
      dataIndex: "hobby",
      key: "hobby",
    },
    {
      title: "관리",
      render: (data, row, index) => {
        //console.log("Data", data, row, index);

        return (
          <Button
            onClick={(e) => {
              console.log("data", index);
              let data_lst = JSON.parse(localStorage.getItem("content"));
              let new_data = data_lst.filter((item, i) => i !== index);
              //console.log("new", new_data);

              data_lst = new_data;
              setData(data_lst);
              localStorage.setItem("content", JSON.stringify(data_lst));
            }}
          >
            삭제
          </Button>
        );
      },
    },
  ];

  //option
  const options = [
    {
      value: "red",
      label: "빨간색",
    },
    {
      value: "blue",
      label: "파란색",
    },
    {
      value: "purple",
      label: "보라색",
    },
  ];

  //select 옵션 선택 시
  const selectOption = (op) => {
    //console.log("op", op);
    setOptionValue(op);
  };

  return (
    <>
      <Select
        className="select"
        defaultValue={optionvalue}
        options={options}
        onChange={selectOption}
      ></Select>

      <ConfigProvider
        theme={{
          components: {
            Table: {
              /* here is your component tokens */
              headerBg: optionvalue,
            },
          },
        }}
      >
        <Table
          columns={columns}
          className="table"
          // style={{ backgroundColor: optionvalue }}
          // headerColor={optionvalue}
          dataSource={data}
        ></Table>
      </ConfigProvider>
    </>
  );
};

export default TableComponent;
