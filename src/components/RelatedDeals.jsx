import React from "react";
import { deals } from "../assets/data/dealsData";
import DealsCard from "./DealsCard";
const RelatedDeals = () => {
  console.log(deals);
  return (
    <div className="deals-list-con">
      <h1>Related deals you might like for</h1>
      <div className="deals-cards-con">
        {deals.map((deal, i) => {
          return <DealsCard key={i} {...deal} />;
        })}
      </div>
    </div>
  );
};

export default RelatedDeals;
