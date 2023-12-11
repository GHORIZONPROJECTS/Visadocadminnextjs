
import styles from './sidebar.module.css'
import {MdDashboard} from 'react-icons/md'
import MenuLink from './menuLink/menuLink'
import Image from 'next/image'

const menuItems = [

  {
    title : "Pages" ,
    
    list  : [

      {

        title : "Dashboard",
        path : "/dashboard",
        icon : <MdDashboard/>

      },

      {

        title : "Users",
        path : "/users",
        icon : <MdDashboard/>

      },
      {

        title : "Orders",
        path : "/orders",
        icon : <MdDashboard/>

      },
      {

        title : "Pages",
        path : "/pages",
        icon : <MdDashboard/>

      },
      {

        title : "Transactions",
        path : "/transactions",
        icon : <MdDashboard/>

      },


     


    ]
  },

  {
    title : "Analytics" ,
    
    list  : [

      {

        title : "Revenue",
        path : "/revenue",
        icon : <MdDashboard/>

      },

      {

        title : "Reports",
        path : "/reports",
        icon : <MdDashboard/>

      },
      {

        title : "Teams",
        path : "/teams",
        icon : <MdDashboard/>

      },
     

    ]
  },

  {
    title : "Admins" ,
    
    list  : [

      {

        title : "Settings",
        path : "/settings",
        icon : <MdDashboard/>

      },

      {

        title : "Help",
        path : "/help",
        icon : <MdDashboard/>

      },
      {

        title : "Logout",
        path : "/logout",
        icon : <MdDashboard/>

      },
     

    ]
  }


]


const sidebar = () => {
  return (
    <div className="styles.container">
      <div className={styles.user}>
        <Image src='/noavatar.png' alt='' width='50' height='50' className={styles.userImage}/>
        <div className={styles.userDetails}>
          <span className={styles.username}>Godwin Valentine</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
   
      <ul className={styles.list}>
        {menuItems.map((cat) => (

            <li key={cat.title}>
              
              <span className={styles.cat}>{cat.title}</span>

              {cat.list.map((item) => (

                  <MenuLink item = {item} key={item.title}/>

              ))}
              
            </li>
            

        ))}
      </ul>
    
    </div>
  )
}

export default sidebar