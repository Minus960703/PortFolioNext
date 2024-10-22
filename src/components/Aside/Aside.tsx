'use client';

import React, { useContext } from 'react';
import styles from './Aside.module.scss';
import Link from 'next/link';
import { IconImage } from '../IconImage/IconImage';
import { usePathname } from 'next/navigation';
import { LanguageStateContext, ProjectListStateContext, ThemeStateContext } from '@/context';
import { LanguageList } from '@/api/Header/HeaderObject';

function Aside() {
  const { projectList } = useContext(ProjectListStateContext);
  const { theme, onClickThemeButton } = useContext(ThemeStateContext);
  const { language, onClickLanguage } = useContext(LanguageStateContext);
  const pathname = usePathname();
  const moveToPage = (path: 'INSTAGRAM' | 'GITHUB') => {
    let url = '';
    const target = '_blank';
    if (path === 'INSTAGRAM')   url = 'https://www.instagram.com/gym.dak';
    else if (path === 'GITHUB') url = 'https://github.com/Minus960703';
    window.open(url, target);
  }
  
  return (
    <aside className={`
      ${styles.aside}
      ${theme === 'dark' ? styles.dark : styles.light}
    `}>
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
          {projectList.length
            && projectList.map((project) => {
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
        <ul className={styles.aside__theme}>
          <li>
            <button
              className={theme === 'dark' ? `${styles[theme]}` : undefined}
              onClick={() => onClickThemeButton(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'light'
                ? <IconImage icon="DARK"/>
                : <IconImage icon="LIGHT"/>
              }
            </button>
          </li>
        </ul>
        <ul className={styles.aside__language}>
          {LanguageList.length
            &&
            LanguageList.map((currentLang) => {
              return (
                <li
                  className={language === currentLang.value ? styles.active : undefined}
                  onClick={() => onClickLanguage(`${currentLang.value}`)}
                  key={currentLang.id}
                >
                  {currentLang.name}
                </li>
              )
            })}
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