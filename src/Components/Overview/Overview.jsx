import React from 'react'
import { FeaturedInfo } from '../FeaturedInfo/FeaturedInfo'
import RecentTransactions from '../RecentTransactions/RecentTransactions'

const Overview = () => {
  return (
    <div>Overview
      <FeaturedInfo/>
      <RecentTransactions/>
    </div>
  )
}

export default Overview