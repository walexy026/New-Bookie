import React, { useState } from "react";
import OtpInput from "react18-input-otp";

export default function ReactOtpInput() {
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  return (
    <OtpInput
      value={otp}
      onChange={handleChange}
      numInputs={4}
      separator={<span>-</span>}
    />
  );
}
