'use client'

import React from 'react'
import styles from './AboutMoreArea.module.scss';
import { CVDownload } from '@/api/About/downloadCV';

type Props = {}

function AboutMoreArea({}: Props) {
  return (
    <div className={styles.about__more}>
      <h2>More Introduce</h2>
      {/* notion Site */}
      <button onClick={() => CVDownload()}>
        Download my CV
        {/* 시간초 지정 클릭못하게 만들기 Or 모달창으로 알림  날리기. */}
      </button>
    </div>
  )
}

export { AboutMoreArea };