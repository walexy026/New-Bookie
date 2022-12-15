import React from 'react'
import { FeaturedInfo } from '../FeaturedInfo/FeaturedInfo'
import RecentTransactions from '../RecentTransactions/RecentTransactions'
// import Refferal from '../Refferal/Refferal'
import UpperPanel from '../UpperPanel/UpperPanel'
import './Overview.css'

const Overview = () => {
  return (
    <div className='overviewWrap'>
      <UpperPanel/>
      <FeaturedInfo/>
      <RecentTransactions/>
      {/* <Refferal/> */}
    </div>
  )
}

export default Overview