'use client'

import React, { useState } from 'react'
import styles from './Form.module.scss'
import { TextField } from '@/components'
import { Button } from '../Button/Button';

function Form() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onChangeTextField = (name, value) => {
    setUserInfo((prev) => {
      return {
        ...userInfo, [name]: value
      }
    })
  }

  return (
    <div className={styles.form__container}>
      <div className={styles.form__input}>
        <label htmlFor="name">Name <span>*</span></label>
        <TextField
          id='name'
          name='name'
          value={userInfo.name}
          type='text'
          placeholder='이름을 입력해주세요'
          onChangeEvent={onChangeTextField}
          // name=''
          />
      </div>
      <div className={styles.form__input}>
        <label htmlFor="email">Email Address <span>*</span></label>
        <TextField
          id='email'
          name='email'
          value={userInfo.email}
          type='email'
          placeholder='이름을 입력해주세요'
          onChangeEvent={onChangeTextField}
          // name=''
          />
      </div>
      <div className={styles.form__input}>
        <label htmlFor="message">Message <span>*</span></label>
        <TextField
          id='message'
          name='message'
          value={userInfo.message}
          type='text'
          placeholder='이름을 입력해주세요'
          onChangeEvent={onChangeTextField}
          // name=''
          />
      </div>
      <Button value={'Submit'}/>
    </div>
  )
}

export { Form };