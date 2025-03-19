import { useEffect, useState } from "react";
import "../App.css";
import "../MainStyle.css";
import { Input, Button, Table, notification } from "antd";
import { useFormik } from "formik";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";

const MainPage3 = () => {
  //localStorage list
  //let data_lst = JSON.parse(localStorage.getItem("content")) || [];
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("content")) || []
  );
  //localStorage
  useEffect(() => {
    let local_lst = JSON.parse(localStorage.getItem("content")) || [];
    console.log("data_lst", local_lst);
  }, []);

  return (
    <div className="main_wrap">
      <FormComponent data={data} setData={setData} />
      <TableComponent data={data} setData={setData} />
    </div>
  );
};

export default MainPage3;
