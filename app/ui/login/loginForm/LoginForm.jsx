

import React from 'react'
import styles from './loginForm.module.css'
import authenticate from '@/app/lib/database/actions/authentication'
import { signIn } from '@/app/auth'

const LoginForm = () => {
  return (
    <form  action={async (formData) => {
      "use server"
      await signIn("credentials", formData)
    }}className={styles.form}>
    {/* <form action={authenticate} className={styles.form}>  */}
        <h1>Login</h1>
        <input type="text "placeholder='username' name='username' />
        <input type="password" placeholder='******'  name='password'/>
        <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm



// 'use client'

// import React, { useState } from 'react'
// import styles from './loginForm.module.css'
// import authenticate from '@/app/lib/database/actions/authentication'
// import { signIn } from '@/app/auth'

// const LoginForm = () => {

//   const [err, setErr] = useState()
//   const handlelogin = async (formData) => {
//     const data = await signIn(formData)
//     data.error && setErr(data.error)
//   }

//   return (
//     <form  action={handlelogin}className={styles.form}>
//     {/* <form action={authenticate} className={styles.form}>  */}
//         <h1>Login</h1>
//         <input type="text "placeholder='username' name='username' />
//         <input type="password" placeholder='******'  name='password'/>
//         <button type='submit'>Login</button>
//     </form>
//   )
// }

// export default LoginForm 