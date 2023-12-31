"use client"
import { usePathname } from 'next/navigation'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'
import styles from './navbar.module.css'

const Navbar = () => {

  const pathname = usePathname()

  return (
    <div className={styles.container}>
    
      <div className={styles.title}>{pathname.split('/').pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch/>
          <input type='text' placeholder='search...' className={styles.input}/>
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} className={styles.iconchat}/>
          <MdNotifications size={20} className={styles.iconchat}/>
          <MdPublic size={20} className={styles.iconchat}/>
        </div>
      </div>

    </div>
  )
}

export default Navbar