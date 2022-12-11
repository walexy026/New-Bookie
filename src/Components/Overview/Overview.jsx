import React from 'react'
import { FeaturedInfo } from '../FeaturedInfo/FeaturedInfo'
import RecentTransactions from '../RecentTransactions/RecentTransactions'
import UpperPanel from '../UpperPanel/UpperPanel'
import './Overview.css'

const Overview = () => {
  return (
    <div className='overviewWrap'>
      <UpperPanel/>
      <FeaturedInfo/>
      <RecentTransactions/>
    </div>
  )
}

export default Overview