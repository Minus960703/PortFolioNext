'use client'

import { ProjectListStateContext } from '@/context';
import React, { useContext } from 'react'
import styles from './HomeProjectArea.module.scss';

type Props = {}

function HomeProjectArea({ }: Props) {
  const { projectList } = useContext(ProjectListStateContext);

  console.log(projectList);

  if (!projectList.length) {
    return null;
  }
  
  return (
    <>
      {
        projectList.map((project) => {
          return (
            <div className={styles.home__project} key={project.id}>
              <div className={styles.home__image}></div>
              <div className={styles.overlay}>
                <h2>{project.name_KR}</h2>
              </div>
            </div>
          )
        })
      }
    </>
  )
  
}

export { HomeProjectArea };