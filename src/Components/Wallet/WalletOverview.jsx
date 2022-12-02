import React from "react";
import "./Wallet.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

const WalletOverview = () => {
  return (
    <div>
     
<h5>Wallet Overview</h5>
      <div className="walletOverviewContainer">

        <div>
          <h6>Wallets Balance </h6>
          <h5>NGN 100 000</h5>
        </div>
        <span className="copyDetails">
         
          <CopyToClipboard text="the good man" onCopy={() => "Copied"}>
            <span>
             
              <FaCopy /> Copy Account Details
            </span>
          </CopyToClipboard>
        </span>
        <div className="walletBtn">
          <button className="walletAddFund">Add Fund</button>
          <button className="walletWidrawal">Withdrawal Funds</button>
        </div>
      </div>
    </div>
  );
};

export default WalletOverview;
