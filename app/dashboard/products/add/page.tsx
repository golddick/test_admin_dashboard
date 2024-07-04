import React from 'react'
import styles from './addProduct.module.css'
import { addProduct } from '@/app/lib/database/actions/ProductAction'

const AddProduct = () => {
  return (
    <div className={styles.container}> 
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder='Title' name='title' required />
        <select name='cat' id='cat'>
          <option value="general">choose </option>
          <option value="gadget">gadget</option>
          <option value="food">food</option>
          <option value="drinks">drinks</option>
        </select>
        <input type="number" placeholder='Price' name='price' />
        <input type="number" placeholder='Stock' name='stock' />
        <input type="text" placeholder='Color' name='color' />
        <input type="text" placeholder='Size' name='size' />
        <textarea name="desc" id="desc" placeholder='Desc' rows={10}></textarea>
        <button type='submit'>submit...</button>
      </form>
    </div>
  )
}

export default AddProduct