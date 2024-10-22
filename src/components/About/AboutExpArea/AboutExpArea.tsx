'use client'

import React from 'react'
import styles from './AboutExpArea.module.scss';
import { ExperienceProps } from '@/api/About/experience';

interface AboutExpAreaProps {
  experienceList: ExperienceProps[];
}

function AboutExpArea({ experienceList }: AboutExpAreaProps) {
  return (
    <div className={styles.about__exp}>
      <h2>Experience</h2>
      <div className={styles.exp__container}>
        {experienceList.length
          && experienceList.map((experience) => {
            return (
              <div className={styles.exp__area} key={experience.id}>
                <div className={styles.exp__image}></div>
                <h4 className={styles.exp__name}>{experience.company_name}</h4>
                <p className={styles.exp__role}>{experience.role}</p>
                <p className={styles.exp__period}>{`${experience.start_date} ~ ${experience.end_date}`}</p>
                <p className={styles.exp__tech}>{experience.stack}</p>
                <div className={styles.exp__point}></div>
                <p>특징</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export { AboutExpArea };