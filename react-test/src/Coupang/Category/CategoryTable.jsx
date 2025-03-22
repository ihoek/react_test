import { useEffect, useState } from "react";
import "../CSS/category.css";

//antd
import {} from "antd";

//table
const CategoryTable = (props) => {
  //props
  const { title, content } = props;

  return (
    <>
      <div className="table_row">
        <div className="table_header">{title}</div>
        <div className="table_content">{content}</div>
      </div>
    </>
  );
};

export default CategoryTable;
