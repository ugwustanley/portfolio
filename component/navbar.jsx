import React from 'react'
import styles from '../styles/navbar.module.scss'

function Navbar({setNav}){

  return(
      <div className={styles.nav_bar}>
                      
                      <nav className={styles.nav}>
                        <h1 className={styles.logo}>Stanlee</h1>

                        <div className={styles.menu_bar} onClick={ () => setNav(false)}>
                          <div className={styles.menu_bar_arrow}></div>
                          <div className={styles.menu_bar_arrow}></div>
                        </div>

                      </nav>

                      <div className={styles.nav_bar_links}>
                           <h2 className={styles.nav_bar_links_link}>Home</h2>
                           <h2 className={styles.nav_bar_links_link}>About Me</h2>
                           <h2 className={styles.nav_bar_links_link}>Projects</h2>
                           <h2 className={styles.nav_bar_links_link}>Contact Details</h2>

                           <h1 className={styles.nav_bar_links_h1}>Connect With Me</h1>
                      </div>

 
          
      </div>
  )

}

export default Navbar;