import classes from './Banner.module.css'
import NavBar from './NavBar'

function Banner() {
  return (
    <div className={classes['banner-container']}>
      <NavBar />
      <div className={classes['banner-image']}></div>
      <div className={classes['banner-text']}>Joao Martins </div>
      <div className={classes['banner-text-info']}>
        Frontend-focused full-stack developer shaping user-centric experiences.
      </div>
    </div>
  )
}

export default Banner
