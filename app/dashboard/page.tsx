import React from 'react'
import Card from '../ui/dashboard/card/Card'
import styles from '../ui/dashboard/dashboard.module.css'
import Rightbar from '../ui/dashboard/rightbar/Rightbar'
import Transaction from '../ui/dashboard/transaction/Transaction'
import Chart from '../ui/dashboard/chart/Chart'

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>

      <div className={styles.cards}>
        <Card/>
        <Card/>
        <Card/> 
      </div>

            <Transaction/>
            <Chart/>

      </div>

      <div className={styles.side}>
        <Rightbar/>
      </div>
    
    </div>
  )
}

export default page