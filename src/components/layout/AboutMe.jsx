import classes from './AboutMe.module.css'

function AboutMe() {
  return (
    <div className={classes.container}>
      <h1>About Me</h1>
      <h3>
        With coding as my true passion, I enrolled in Le Wagon to pursue a
        career aligned with what truly excites me. This decision marked a
        pivotal moment in my journey, as I sought to immerse myself in a program
        renowned for its quality education and hands-on approach to learning.
      </h3>
      <section id="education"></section>
    </div>
  )
}

export default AboutMe
