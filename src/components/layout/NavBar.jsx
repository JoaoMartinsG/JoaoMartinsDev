import classes from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={classes['nav-container']}>
      <p>JoaoMartinsDev</p>
      <div className={classes['nav-navigation']}>
        <p style={{ marginRight: 10 }}>About me</p>
        <p>Projects</p>
      </div>
    </nav>
  )
}

export default NavBar
