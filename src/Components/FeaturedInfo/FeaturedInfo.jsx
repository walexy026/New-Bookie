import React from "react";
import "./FeaturedInfo.css";
import { Icon } from "@iconify/react";

export const FeaturedInfo = () => {
  return (
    <div className="featuredInfo">
      <p>Hi, Adedoyin</p>
      <div className="featured">
        <div className="featuredItem f1">
          <div>
            <Icon
              icon="material-symbols:savings-rounded"
              fontSize="1.5rem"
              style={{ marginRight: "1.5rem" }}
            />
          </div>
          <span className="featuredTitle"> Total Savings </span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney"> $2,415 </span>
          </div>
          <span className="featuredSub"> </span>
        </div>
        <div className="featuredItem f2">
          <div>
            <Icon
              icon="ion:wallet"
              fontSize="1.5rem"
              style={{ marginRight: "1.5rem" }}
            />
          </div>
          <span className="featuredTitle">Widthdrawal Balance</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney"> $4,415</span>
          </div>
        </div>
        <div className="featuredItem f3">
          <div>
            <Icon
              icon="ion:wallet"
              fontSize="1.5rem"
              style={{ marginRight: "1.5rem" }}
            />
          </div>
          <span className="featuredTitle">Target Savings</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney"> $2,225</span>
          </div>
        </div>
        <div className="featuredItem f4">
          <div>
            <Icon
              icon="ion:wallet"
              fontSize="1.5rem"
              style={{ marginRight: "1.5rem" }}
            />
          </div>
          <span className="featuredTitle">Loan Balance </span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney"> $2,225</span>
          </div>
        </div>
      </div>
    </div>
  );
};
