'use client'

import React from 'react'
import styles from './AboutInterestArea.module.scss'

type Props = {}

function AboutInterestArea({}: Props) {
  return (
    <div className={styles.about__interest}>
      <h2>Interest</h2>
      <div className={styles.tech__area}>
        <div className={styles.tech__image}></div>
        <div className={styles.tech__image}></div>
        <div className={styles.tech__image}></div>
        <div className={styles.tech__image}></div>
        <div className={styles.tech__image}></div>
        <div className={styles.tech__image}></div>
        <div className={styles.tech__image}></div>
        <div className={styles.tech__image}></div>
        <div className={styles.tech__image}></div>
      </div>
    </div>
  )
}

export { AboutInterestArea };