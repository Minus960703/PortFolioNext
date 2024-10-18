'use client';

import React from 'react';
import styles from './Aside.module.scss';
import Link from 'next/link';
import { IconImage } from '../IconImage/IconImage';
import { usePathname } from 'next/navigation';

const ProjectsArray = [
  {
    id: 1,
    name_KR: '짐닭포토',
    name_EN: 'GymdakPhoto',
    name_JP: '일본어로짐닭포토',
    value: 'gymdakphoto',
  },
  {
    id: 2,
    name_KR: '짐닭포토2',
    name_EN: 'GymdakPhoto2',
    name_JP: '일본어로짐닭포토2',
    value: 'gymdakphoto',
  },
  {
    id: 3,
    name_KR: '짐닭포토3',
    name_EN: 'GymdakPhoto3',
    name_JP: '일본어로짐닭포토3',
    value: 'gymdakphoto',
  },
  {
    id: 4,
    name_KR: '짐닭포토4',
    name_EN: 'GymdakPhoto4',
    name_JP: '일본어로짐닭포토4',
    value: 'gymdakphoto',
  },
  {
    id: 5,
    name_EN: 'GymdakPhoto5',
    name_JP: '일본어로짐닭포토5',
    value: 'gymdakphoto',
  },
]

function Aside() {
  const pathname = usePathname();
  const moveToPage = (path: 'INSTAGRAM' | 'GITHUB') => {
    let url = '';
    const target = '_blank';
    if (path === 'INSTAGRAM')   url = 'https://www.instagram.com/gym.dak';
    else if (path === 'GITHUB') url = 'https://github.com/Minus960703';
    window.open(url, target);
  }
  
  return (
    <aside className={styles.aside}>
      <div className={styles.aside__logo}>
        <Link href={'/'}>
          GYMDAK
        </Link>
      </div>
      <nav className={styles.aside__menu}>
        <ul className={styles.aside__work}>
          <li>
            <b className={pathname.includes('/work') ? styles.active : undefined}>
              <Link href={'/'}>WORK</Link>
            </b>
          </li>
          {ProjectsArray.length
            && ProjectsArray.map((project) => {
              return (
                <li key={project.id}>
                  <Link href={`/work/${project.value}`}>
                    {project.name_EN}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <ul>
          <li>
            <b className={pathname === '/about' ? styles.active : undefined}>
              <Link href={'/about'}>
                ABOUT
              </Link>
            </b>
          </li>
          <li>
            <b className={pathname === '/contact' ? styles.active : undefined}>
              <Link href={'/contact'}>
                CONTACT
              </Link>
            </b>
          </li>
        </ul>
        <ul className={styles.aside__social}>
          <li>
            <button onClick={() => moveToPage('GITHUB')}>
              <IconImage icon='GITHUB' width={24} height={24}/>
            </button>
          </li>
          <li>
            <button onClick={() => moveToPage('INSTAGRAM')}>
              <IconImage icon='INSTAGRAM' width={35} height={35}/>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export { Aside };