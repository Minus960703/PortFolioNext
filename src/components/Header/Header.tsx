'use client'

import React, { useContext } from 'react'
import styles from './Header.module.scss';
import { LanguageList, MenuList } from '@/api/Header/HeaderObject';
import { LanguageStateContext, ThemeStateContext } from '@/context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconImage } from '../IconImage/IconImage';

type Props = {}

function Header({ }: Props) {
  const pathname = usePathname();
  const { theme, onClickThemeButton } = useContext(ThemeStateContext);
  const { language, onClickLanguage } = useContext(LanguageStateContext);
  return (
    <header className={styles.header}>
      <nav>
        {/* image */}
        <div className={styles.header__logo}>Gymdak</div>
        <nav className={styles.nav__menu}>
          <ul className={styles.nav__menu}>
            {MenuList.map((item) => {
                const isActive = pathname === item.path ? true : false;
                return (
                  <li
                    key={item.id}
                    className={isActive ? styles.active : undefined}
                  >
                    <Link href={item.path}>{item[`name_${language}`]}</Link>
                  </li>
                  )})
              }
          </ul>
        </nav>
        <ul className={styles.header__setting}>
          <li>
            <button
              className={theme === 'dark' ? `${styles[theme]}` : undefined}
              onClick={() => onClickThemeButton()}
            >
              {theme === 'light'
                ? <IconImage icon="DARK"/>
                : <IconImage icon="LIGHT"/>
              }
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header };