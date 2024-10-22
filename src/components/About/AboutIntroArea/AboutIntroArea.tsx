'use client'

import { LanguageStateContext } from '@/context';
import React, { useContext } from 'react'
import { Introduce } from '@/api/About/Introduce';
import styles from './AboutIntroArea.module.scss';

type Props = {}

function AboutIntroArea({ }: Props) {
  const { language } = useContext(LanguageStateContext);
  const langKey = `name_${language}` as 'name_KR' | 'name_EN';

  const formattedContent = Introduce[langKey].content.split('\n').map((content, index) => {
    return (
      <React.Fragment key={index}>
        {content.trim() ? <span>{content}</span> : <br />}
      </React.Fragment>
    ) 
  })
  
  return (
    <>
      <h2>{Introduce[langKey].title}</h2>
      {formattedContent}
    </>
  )
}

export { AboutIntroArea };