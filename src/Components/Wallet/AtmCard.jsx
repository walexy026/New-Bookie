import React, { useState } from 'react'
import { ATMCard } from "atm-card-react";

const AtmCard = () => {
    const [number, setNumber] = useState('');
    const [month, setMonth] = useState(2);
    const [year, setYear] = useState(22);
    const [holder, setHolder] = useState('');
    const [cvv, setCvv] = useState('');

  return (
    <div >
        <h5>My card</h5>
        <>
            <ATMCard
              year={year}
              month={month}
              cvv={cvv}
              number={number}
              holderName={holder}
              bgColor='#070679'
              bankLogo={
                <h1 style={{ 
                  fontFamily: 'Arial', 
                  fontSize: 20, 
                  color: 'white' 
                }}>First Bank</h1>
              }
              lifted='true'
              system="mastercard"
              scale='0.7'
              onChange={(data) => {
                setNumber(data.number);
                setCvv(data.cvv);
                setMonth(data.month);
                setYear(data.year);
                setHolder(data.holder);
              }}/>
        </>
        </div>
  )
}

export default AtmCard