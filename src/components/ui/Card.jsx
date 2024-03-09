import classes from './Card.module.css'

function Card({ title, content }) {

  return (
    <div className={classes.container}>
      <div className={classes['background-image']}></div>
      <div className={classes['content-container']}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  )
}
export default Card
