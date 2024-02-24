import React from "react";
import { list } from "../assets/data/listData";
import ListCard from "./ListCard";
const ListContainer = () => {
  return (
    <div className="list-container">
      <ul className="breadcrumb">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Hosting for all</a>
        </li>
        <li>
          <a href="#">Hosting</a>
        </li>
        <li>
          <a href="#">Hosting6</a>
        </li>
        <li>
          <a href="#">Hosting5</a>
        </li>
      </ul>
      {list.map((data, index) => {
        return <ListCard key={index} index={index + 1} {...data} />;
      })}
    </div>
  );
};

export default ListContainer;
