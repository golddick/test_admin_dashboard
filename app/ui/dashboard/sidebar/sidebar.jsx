import React from 'react'
import styles from './sidebar.module.css'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from './menuLink/MenuLink';
import Image from 'next/image';
import { BiLogIn } from 'react-icons/bi';
import { auth, signOut } from '@/app/auth';

const Sidebar = async () => {

  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
        // {
        //   title: "Login",
        //   path: "/login",
        //   icon: <BiLogIn/>,
        // },
      ],
    },
  ];

  const session = await auth()
  const userInfo = session?.user
  console.log(userInfo)

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src={userInfo.img || '/noavatar.png'} alt='' width='50' height='50' className={styles.userImage}/>
        <div className={styles.userDetail}>
          <span className={styles.username}>{userInfo?.username}</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <ul>
        {menuItems.map ((category) => (
          <li key={category.title}>
         <span className={styles.cat}> {category.title}  </span>
         {category.list.map((item) => (
          <MenuLink item={item} key={item.title}/>
         ))}
          </li>
        ))}
      </ul>
      <form action={async () => {
        'use server'
        await signOut()
      }}>
        <button className={styles.logout}>
          <MdLogout/>
          Logout</button>
      </form>
    </div>
  )
}

export default Sidebar