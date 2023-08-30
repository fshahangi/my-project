import React from 'react'
import styles from './MyError.module.css'

const MyError = (props) => {
  return (
    <div>
      <div className={`${styles.maincontainer}`}>
      {props.children}
    </div>
    </div>
  )
}

export default MyError
