import React from "react";
import RecentTransactions from "../RecentTransactions/RecentTransactions";
import AtmCard from "./AtmCard";
import "./Wallet.css";
import WalletOverview from "./WalletOverview";

const Wallet = () => {
  return (
    <div className="walletWrapper">
      <div className="upperWallet">
      <WalletOverview />
      <AtmCard />
      <button className="btnAddNewCard">Add new Card</button>
      </div>
      <RecentTransactions />
    
    </div>
  );
};

export default Wallet;
