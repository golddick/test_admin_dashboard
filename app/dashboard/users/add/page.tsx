import React from 'react'
import styles from './addUser.module.css'
import { addUser } from '@/app/lib/database/actions/actions'


const AddUser = async() => {

  return (
    <div className={styles.container}> 
    <form action={addUser} className={styles.form}>
      <input type="text" placeholder='Username' name='username' required />
      <input type="email" placeholder='Email@gmail.com' name='email' required />
      <input type="password" placeholder='Password' name='password' required />
      <input type="phone" placeholder='Phone' name='phone' required />
      <select name='isAdmin' id='isAdmin'>
      <option value="false" selected>Is Admin</option>
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>
      <select name='isActive' id='isActive'>
      <option value="false" selected>Is Active</option>
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select> 
      <textarea name="address" id="address" rows={10}></textarea>
      <button type='submit'>submit...</button>
    </form>
  </div>
  )
}

export default AddUser