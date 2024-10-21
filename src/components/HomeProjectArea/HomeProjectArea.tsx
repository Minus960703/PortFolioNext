'use client'

import { ProjectListStateContext } from '@/context';
import React, { useContext } from 'react'
import styles from './HomeProjectArea.module.scss';
import { useRouter } from 'next/navigation';

function HomeProjectArea() {
  const { projectList } = useContext(ProjectListStateContext);
  const router = useRouter();

  if (!projectList.length) {
    return null;
  }

  const moveToPage = (value: string) => {
    router.push(`/work/${value}`);
  }
  
  return (
    <>
      {
        projectList.map((project) => {
          return (
            <div className={styles.home__project} key={project.id}
              onClick={() => moveToPage(project.value)}
            >
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