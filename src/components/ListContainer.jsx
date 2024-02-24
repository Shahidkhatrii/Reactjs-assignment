import React from "react";
import { list } from "../assets/data/listData";
import ListCard from "./ListCard";
import BreadCrum from "./BreadCrum";
const ListContainer = () => {
  return (
    <div className="list-container">
      <BreadCrum />
      {list.map((data, index) => {
        return <ListCard key={index} index={index + 1} {...data} />;
      })}
    </div>
  );
};

export default ListContainer;
