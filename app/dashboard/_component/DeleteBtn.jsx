'use client'

import React from 'react'
import styles from '@/app/ui/dashboard/products/product.module.css'
import { deleteProduct } from '@/app/lib/database/actions/DeleteAction';
const DeleteBtn = ({id}) => {

    const handleDelete = async (id) => {
 
        console.log(id); // Log the id when Delete button is clicked
      
        try {
            
            await deleteProduct(id);
            console.log('Product deleted successfully');
            // Optionally, update your component state or perform other actions upon successful deletion
          } catch (error) {
            console.error( error);
            // Handle the error in your component UI or notify the user appropriately
          }
        
      };
    

  return (
    <button className={`${styles.button} ${styles.delete}`} onClick={() => handleDelete(id)}>Delete</button>

  )
}

export default DeleteBtn