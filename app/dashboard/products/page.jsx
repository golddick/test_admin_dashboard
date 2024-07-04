// 'use client'

import Pagination from '@/app/ui/dashboard/pagination/Pagination'
import Search from '@/app/ui/dashboard/search/Search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/ui/dashboard/products/product.module.css'
import { fetchProduct } from '@/app/lib/data'
import { deleteProduct } from '@/app/lib/database/actions/DeleteAction'
import DeleteBtn from '../../dashboard/_component/DeleteBtn'



const page = async ({searchParams}) => {
  // const [isPending, startTransition] = useTransition();
  const q = searchParams?.q || '';
const page = searchParams?.page || 1;
  const {count, products} = await fetchProduct(q, page)


  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder='search for a product..'/>
      <Link href= '/dashboard/products/add'>
        <button className={styles.addButton}>Add New</button>
      </Link>
    </div>

    <table className={styles.table}> 
        <thead >
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Available stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (

        
          <tr key={product.id}>
            <td>
              <div className={styles.user}>
                <Image src={product.img || '/noproduct.jpg'} width={40} height={40} alt='' className={styles.userImage} />
                <span>{product.title}</span>
              </div>
            </td>
            <td>{product.desc}</td>
            <td>#{product.price}</td>
            <td>{product.createdAt?.toString().slice(0, 15)}</td>
            <td>{product.stock}</td>
            <td>

              <div className={styles.buttons}>
              <Link href={`/dashboard/products/${product.id}`}>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
           {/* <form action={deleteProduct}>
            <input type="hidden" name='id' value={product._id} />
           <button className={`${styles.button} ${styles.delete}`} >Delete</button>
           </form> */}
                {/* <button className={`${styles.button} ${styles.delete}`} onClick={() => handleDelete(product.id)}>Delete</button> */}
                <DeleteBtn id={product._id}/>
              </div>
            </td>
          </tr>
            ))}
        </tbody>
    </table>
    <Pagination count={count}/>
  </div>
  )
}

export default page
