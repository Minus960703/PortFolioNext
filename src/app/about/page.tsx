'use client'

import { Introduce } from '@/api/About/Introduce';
import { CVDownload } from '@/api/About/downloadCV';
import { LanguageStateContext } from '@/context';
import React, { useContext } from 'react'

function AboutPage() {
  const { language } = useContext(LanguageStateContext);
  const langKey = `name_${language}` as 'name_KR' | 'name_EN';
  return (
    <section className='about'>
      <h1>ABOUT</h1>
      <h2>{Introduce[langKey].title}안녕하세요, 최진우입니다.</h2>
      <p dangerouslySetInnerHTML={{ __html: Introduce[langKey].content }} />
      <div className='about__tech'>
        <h2>skills</h2>
      </div>
      <div className='about__exp'>
        <h2>Experience</h2>
      </div>
      <div className="about__more">
        <h2>More Introduce</h2>
        {/* notion Site */}
        <button onClick={() => CVDownload()}>
          Download my CV
        </button>
      </div>
    </section>
  )
}

export default AboutPage;