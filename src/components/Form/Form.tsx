'use client'

import React, { useContext, useRef, useState } from 'react'
import styles from './Form.module.scss'
import { TextField } from '@/components'
import { Button } from '../Button/Button';
import { LanguageStateContext, ModalStateContext } from '@/context';

const ModalValidateObejct = {
  name: {
    name_KR: '이름을 입력해주세요',
    name_EN: 'Please Enter Your Name...'
  },
  email: {
    name_KR: '이메일을 입력해주세요',
    name_EN: 'Please Enter Your Email...'
  },
  emailPattern: {
    name_KR: '이메일 주소를 확인 해 주세요 <br/> ( example@example.com 형식이어야 합니다. )',
    name_EN: 'Please Check Your Email Address... <br/> ( ex) example@example.com 형식이어야 합니다. )'
  },
  message: {
    name_KR: '전달하실 메세지 내용을 입력해주세요',
    name_EN: 'Please Enter Message...'
  }
}

function Form() {
  const { language } = useContext(LanguageStateContext);
  const { modalState, openModal, closeModal } = useContext(ModalStateContext);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onChangeTextField = (name: string, value: string) => {
    setUserInfo((prev) => {
      return {
        ...userInfo, [name]: value
      }
    })
  }

  const validateUserInfo = () => {
    const langKey = `name_${language}` as 'name_KR' | 'name_EN';
    if (!userInfo.name) {
      openModal({
        type: 'A',
        content: ModalValidateObejct.name[langKey],
      });
      return false;
    }

    if (!userInfo.email) {
      openModal({
        type: 'A',
        content: ModalValidateObejct.email[langKey],
      });
      return false;
    }

    if (userInfo.email) {
      const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
      if (!pattern.test(userInfo.email)) {
        openModal({
          type: 'A',
          content: ModalValidateObejct.emailPattern[langKey],
        });
        return false;
      }
    }

    if (!userInfo.message) {
      openModal({
        type: 'A',
        content: ModalValidateObejct.message[langKey],
      });
      return false;
    }

    return true;
  }

  const clickSubmitButton = () => {
    if (validateUserInfo()) {
      
    }
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
          required={true}
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
          placeholder='이메일을 입력해주세요'
          onChangeEvent={onChangeTextField}
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          // name=''
          />
      </div>
      <div className={styles.form__input}>
        <label htmlFor="message">Message <span>*</span></label>
        <textarea
          id          = "message"
          name        = "message"
          readOnly    = {false}
          value       = {userInfo.message}
          placeholder = '전달하실 메세지를 입력해주세요.'
          onChange    = {(e) => onChangeTextField('message', e.currentTarget.value)}
          rows        = {6}
        />
      </div>
      <Button value={'Submit'} onClickEvent={()=>clickSubmitButton()}/>
    </div>
  )
}

export { Form };