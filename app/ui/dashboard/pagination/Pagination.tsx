'use client'

import React from 'react'
import styles from './pagination.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


interface PaginationProps {
  count: number
}

const Pagination = ({count}: PaginationProps) => {

  const {replace} = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  // const page = searchParams.get('page') || 1;

  const page = parseInt(searchParams.get('page') || '1');



  const ITEM_PER_PAGE = 2
  const params = new URLSearchParams(searchParams)

  const hasPrev = ITEM_PER_PAGE * (page - 1) >  0

  const hasNext = ITEM_PER_PAGE * (page-1 ) + ITEM_PER_PAGE < count

  // const hasNext = ITEM_PER_PAGE * page < count;

  // Function to handle page navigation
  const handleChangePage = (direction: 'prev' | 'next') => {
    const newPage = direction === 'prev' ? page - 1 : page + 1;
    replace(`${pathname}?page=${newPage}`);
  };


  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination