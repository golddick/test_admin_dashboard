

import React from 'react'
import styles from '@/app/ui/login/login.module.css'
import LoginForm from '../ui/login/loginForm/LoginForm'

const page = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  )
}

export default page