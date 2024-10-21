'use client'

import { ModalStateContext } from '@/context/ModalStateContext';
import React, { useContext, useEffect } from 'react'
import styles from './Modal.module.scss';
import { ThemeStateContext } from '@/context';
import { Button } from '../Button/Button';

function isDiscernModal(type: 'A' | 'C' | 'L' | 'S') {
  switch (type) {
    case 'A':
      return <AlertModal />;
    case 'C':
      return <ConfirmModal />;
    case 'L':
      return <LoginModal />;
    case 'S':
      return <SettingModal />;
    default:
      return null;
  };
}

function Modal() {
  const { modalState, closeModal } = useContext(ModalStateContext);

  const ModalComponent = isDiscernModal(modalState['type']);

  useEffect(() => {
    modalState.active
      ? document.documentElement.style.overflow = "hidden"
      : document.documentElement.style.overflow = "unset"
    return () => {
      document.documentElement.style.overflow = "unset"
    }
  }, [modalState.active]);

  if (!modalState.active) return null;

  if (!ModalComponent) return null;  

  return (
    <div className={styles.modal}>
      <div className={styles.modal__background} onClick={() => closeModal()}></div>
      {ModalComponent}
    </div>
  )
}

function SettingModal() {
  const { modalState, closeModal } = useContext(ModalStateContext);
  const { theme } = useContext(ThemeStateContext);

  return (
    <div
      className={`${styles.modal__whiteground}
                  ${theme === 'dark' ? styles.modal__dark : styles.modal__light}
      `}
    >
      <div className={styles.modal__close} onClick={() => closeModal()}>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul>
          <li>Account</li>
          {/* <li>Notifications</li> */}
        </ul>      
      </nav>
      <div className={`${styles.modal__content} ${styles.flex}`}>
        <div className={styles.modal__user}>
          {/* image */}
          <div className={styles.user__image}></div>
        </div>
        <div className={styles.modal__info}>
          <div className={styles.modal__personal}>
            <div className={styles.modal__area}>
              <div className={styles.modal__title}>
                Name
              </div>
              <p>최진우</p>
              <span>Change name</span>
            </div>
            <div className={styles.modal__area}>
              <div className={styles.modal__title}>
                Email
              </div>
              <p>cgzoo9607@gmail.com</p>
              {/* <span>Change name</span> */}
            </div>
            <div className={styles.modal__area}>
              <div className={styles.modal__title}>
                Job title
              </div>
              <p>Developer</p>
              <span>Change job title</span>
            </div>
          </div>
          <div className={styles.modal__language}>
            <div className={styles.modal__area}>
              <div className={styles.modal__title}>
                Language
              </div>
              <p>한국어</p>
              <span>Change language</span>
            </div>
          </div>
          <div className={styles.modal__language}>
            <div className={styles.modal__area}>
              <div className={styles.modal__title}>
                Language
              </div>
              <p>한국어</p>
              <span>Change language</span>
            </div>
          </div>
          <div className={styles.modal__language}>
            <div className={styles.modal__area}>
              <div className={styles.modal__title}>
                Language
              </div>
              <p>한국어</p>
              <span>Change language</span>
            </div>
          </div>
          <div className={styles.modal__language}>
            <div className={styles.modal__area}>
              <div className={styles.modal__title}>
                Language
              </div>
              <p>한국어</p>
              <span>Change language</span>
            </div>
          </div>
          <div className={styles.modal__theme}>
            <div className={styles.modal__area}>
              <div className={styles.modal__title}>
                Theme
              </div>
              {/* Select */}
              {/* <p>현재 테마</p>
              <span>Change name</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ConfirmModal() {
  return (
    <div className={styles.modal__whiteground}>
      cc
    </div>
  )
}

function AlertModal() {
  const { modalState, closeModal } = useContext(ModalStateContext);
  const { theme } = useContext(ThemeStateContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);
  
  return (
    <div
      className={`${styles.modal__whiteground}
                  ${theme === 'dark' ? styles.modal__dark : styles.modal__light}
                  ${styles.modal__alert}
      `}
    >
      <p>
        <b dangerouslySetInnerHTML={{__html: modalState.content}} />
      </p>
      <div className={styles.btn__area}>
        <Button value={'확인'} onClickEvent={() => closeModal()}/>
      </div>
    </div>
  )
}

function LoginModal() {
  return (
    <div className={styles.modal__whiteground}>
      ll
    </div>
  )
}

function ChangeInputModal() {
  return (
    <div>

    </div>
  )
}

export { Modal };