import { useEffect, useState } from "react";
import "../App.css";
import { Input, Button, Table, notification } from "antd";
import { useFormik } from "formik";

const MainPage3 = () => {
  const data = [
    {
      name: "이름",
      age: 123,
      nickName: "닉네임",
      hobby: "낚시",
    },
    {
      name: "오렌지",
      age: 11,
      nickName: "주황",
      hobby: "낚시",
    },
    {
      name: "집",
      age: 123,
      nickName: "닉네임",
      hobby: "낚시",
    },
    {
      name: "김부각",
      age: 123,
      nickName: "침대",
      hobby: "누워있기",
    },
  ];

  const list = data.map((x, i) => {
    return {
      key: i,
      name: x.name,
      age: x.age,
      nickName: x.nickName,
      hobby: x.hobby,
    };
  });

  useEffect(() => {
    userFormik.setFieldValue("name", data.name);
    userFormik.setFieldValue("age", data.age);
    userFormik.setFieldValue("nickName", data.nickName);
    userFormik.setFieldValue("hobby", data.hobby);
  }, []);

  const userFormik = useFormik({
    initialValues: {
      name: "",
      age: "",
      nickName: "",
      hobby: "",
    },
    onSubmit: (values) => {
      //폼 안에 버튼을 눌렀을 때 생기는 것
      //console.log("values", values);
      notification.warning({ message: "준비중" });
    },
  });

  //console.log("userFormik", userFormik.values.name);

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
      render: (data) => {
        console.log("Data", data);
        return (
          <Button
            onClick={() => {
              // data.id;
            }}
          >
            삭제
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <form onSubmit={userFormik.handleSubmit}>
        <Input
          name="name"
          value={userFormik.values.name}
          placeholder="이름을 입력해 주세요"
          onChange={userFormik.handleChange}
        />
        <Input
          name="age"
          value={userFormik.values.age}
          placeholder="나이을 입력해 주세요"
          onChange={userFormik.handleChange}
        />
        <Input
          name="nickName"
          value={userFormik.values.nickName}
          placeholder="별명을 입력해 주세요"
          onChange={userFormik.handleChange}
        />
        <Input
          name="hobby"
          value={userFormik.values.hobby}
          placeholder="취미을 입력해 주세요"
          onChange={userFormik.handleChange}
        />
        {/* antd쓸때만 submit지정해주기 */}
        <Button htmlType="submit">저장</Button>
      </form>

      <Table columns={columns} dataSource={list}></Table>
    </>
  );
};

export default MainPage3;
