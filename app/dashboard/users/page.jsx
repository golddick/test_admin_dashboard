import React from 'react'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Search from '@/app/ui/dashboard/search/Search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'
import { fetchUsers } from '@/app/lib/data'
import DeleteUserBtn from '../_component/DeleteUserBtn'

const page = async ({searchParams}) => {
const q = searchParams?.q || '';
const page = searchParams?.page || 1;
  const {count, users} = await fetchUsers(q, page)


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='search for a user..'/>
        <Link href= '/dashboard/users/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
          <thead >
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              users?.map((user) => (
                <tr key={user._id}>
                <td>
                  <div className={styles.user}>
                    <Image  src={user.img || '/noavatar.png'} width={40} height={40} alt='' className={styles.userImage} />
                    <span>{user.username}</span>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(0, 14)}</td>
                <td>{user.isAdmin ? 'Admin' : 'client'}</td>
                <td>{user.isActive ? 'Active' :'InActive' }</td>
                <td>
  
                  <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <DeleteUserBtn id={user._id}/>
                  </div>
                </td>
              </tr>
              ))
            }
        
          </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  )
}

export default page