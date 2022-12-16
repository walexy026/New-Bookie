import React from "react";
import Savings from "../../Assets/save-money-image.svg";
import Family from "../../Assets/family-section-image.svg";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Save.css";

export default function Save() {
  return (
    <section className="save-money-section">
      <h3 className="save-money-heading">The Service We Provide</h3>
      <div className="save-money-container">
        <div className="img-container">
          <img src={Savings} alt="savings" className="savings-img" />
        </div>
        <div className="left-container">
          <h3 className="container-heading">Save Money</h3>
          <p className="container-para">
            You can have a saving wallets with Bookie
          </p>
          <Link to='/savemoney'>
          <button className="save-section-btn">
            <b>Learn more</b> <BiChevronRight size={30} />
          </button>
          </Link>
        </div>
      </div>
      <div className="save-money-container reverse">
        <div className="left-container">
          <h3 className="container-heading">Buy Books</h3>
          <p className="container-para">
            You can have a saving wallets with Bookie
          </p>
          <Link to='/buybooks'>
          <button className="save-sect-btn">
            Learn more <BiChevronRight size={30} />
          </button>
          </Link>
        </div>
        <div className="img-container">
          <img src={Family} alt="savings" className="savings-img" />
        </div>
      </div>
    </section>
  );
}
