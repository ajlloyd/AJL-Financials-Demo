import React from 'react'
import Image from 'next/image'
import styles from "../styles/Loader.module.scss"
import { useState, useEffect } from 'react'

const Loader = (props) => {

  return (
    <div className={styles.loadingContainer}>
        <h4>Loading</h4>
        <Image className={styles.loadingImage} src="/myLoader.svg" alt="Loading..." width="200px" height="200px"/>
        <small className={styles.message}>Please allow 30 seconds per ticker</small>
    </div>
  )
}




export default Loader