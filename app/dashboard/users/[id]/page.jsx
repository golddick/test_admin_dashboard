// 'use client'


import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import { fetchUser } from '@/app/lib/data'
import { updateUser } from '@/app/lib/database/actions/actions'
import { connectToDatabase } from '@/app/lib/database'



const page = async ({params}) => {

    const {id} = params
    console.log(id)


    

    const user = await fetchUser(id);

    console.log(user._id); 


  

  return (
    <div className={styles.container}>
        <div className={styles.infoContainer }>
            <div className={styles.imgContainer}>
                <Image src={user?.img || '/noavatar.png '}alt='' fill/>
            </div>
            <span>{user?.username}</span>
        </div>
 
        <div className={styles.formContainer}>
            {/* <form className={styles.form}> */}
            <form action={updateUser} className={styles.form}>
                <input type='hidden' name='id' value={id}/>

               <label>Username:</label>
                <input type="text" name="username" placeholder={user?.username} />

    
                <label>Email:</label>
                <input type="email" name="email" placeholder={user?.email}/>

                <label>Password:</label>
                <input type="password" name="password" placeholder=" ******"/>

                <label>Phone:</label>
                <input type="text" name="phone" placeholder={user?.phone}/>

                <label>Address:</label>
                <input type="text" name="address" placeholder={user?.address}/>

                <label>Is Active:</label>
                <select name='isActive' id='isActive'>
                    <option value="true" selected={user.isActive}>Yes</option>
                    <option value="false" selected={!user.isActive}>No</option>
                </select>

                <label>Is Admin:</label>
                <select name='isAdmin' id='isAdmin'>
                    <option value="true" selected={user.isAdmin}>Yes</option>
                    <option value="false" selected={!user.isAdmin}>No</option>
                </select>
                <button>update</button>
            </form>
        </div>
    </div>
  )
}

export default page