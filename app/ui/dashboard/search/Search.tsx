'use client'

import React from 'react'
import styles from './search.module.css'
import { MdSearch } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'



interface searchProps {
    placeholder : string
}

const Search = ({placeholder}:searchProps) => {
  const {replace} = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()


  const handleSearch = useDebouncedCallback ((e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)

    params.set('page', '1');
    
    if(e.target.value){
      params.set('q', e.target.value)
      // e.target.value.length > 2 && params.set('q', e.target.value)
    }else{
      params.delete('q')
    }

    params.set('q', e.target.value)
  
    replace(`${pathname}?${params}`)
  
  

  },300)

  return (
    <div className={styles.container}>
        <MdSearch/>
        <input type='text' placeholder={placeholder} className={styles.input} onChange={handleSearch}/>
    </div>
  )
}

export default Search