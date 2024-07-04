import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer }>
            <div className={styles.imgContainer}>
                <Image src='/noavatar.png' alt='' fill/>
            </div>
            <span>Milo</span>
        </div>

        <div className={styles.formContainer}>
            <form action="" className={styles.form}>

               <label>Title:</label>
                <input type="text" name="title" placeholder=" Title"/>

    
                <label>Price:</label>
                <input type="number" name="price" placeholder=" Item Price"/>

                <label>stock:</label>
                <input type="number" name="Stock" placeholder=" 20"/>

                <label>Color:</label>
                <input type="text" name="color" placeholder=" Green"/>

                <label>Size:</label>
                <input type="number" name="Size" placeholder=" 20"/>

                <label>Category:</label>
                <select name='cat' id='cat'>
                    <option value="kitchen">Kitchen</option>
                    <option value="computers">Computers</option>
                </select>

                <label>Description:</label>
                <textarea name="desc" id="desc" cols={30} rows={10}></textarea>
                <button>update</button>
            </form>
        </div>
    </div>
  )
}

export default page