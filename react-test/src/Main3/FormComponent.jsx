import { useEffect, useState } from "react";

import "../App.css";
import "../MainStyle.css";
import { useFormik } from "formik";
import { Input, Button, Table, notification } from "antd";

const FormComponent = (props) => {
  let { data, setData } = props;

  const userFormik = useFormik({
    initialValues: {
      name: "",
      age: "",
      nickName: "",
      hobby: "",
    },
    onSubmit: (values) => {
      //폼 안에 버튼을 눌렀을 때 생기는 것
      let addvalue = {
        ...values,
        key: "1",
      };
      let data_lst = JSON.parse(localStorage.getItem("content")) || [];

      data_lst.push(values);
      setData(data_lst);
      console.log("getdata", data_lst);

      localStorage.setItem("content", JSON.stringify(data_lst));
    },
  });

  return (
    <>
      <form onSubmit={userFormik.handleSubmit} className="form">
        <Input
          name="name"
          placeholder="이름을 입력해 주세요"
          className="input"
          onChange={userFormik.handleChange}
        />
        <Input
          name="age"
          className="input"
          placeholder="나이을 입력해 주세요"
          onChange={userFormik.handleChange}
        />
        <Input
          name="nickName"
          className="input"
          placeholder="별명을 입력해 주세요"
          onChange={userFormik.handleChange}
        />
        <Input
          name="hobby"
          className="input"
          placeholder="취미을 입력해 주세요"
          onChange={userFormik.handleChange}
        />
        <Button className="btn" htmlType="submit">
          저장
        </Button>
      </form>
    </>
  );
};

export default FormComponent;
