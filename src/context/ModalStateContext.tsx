'use client'

import { createContext, useState, ReactNode, FC, useCallback, useEffect } from 'react';

interface ModalState {
  active: boolean;
  type: 'A' | 'C' | 'L' | 'S';
  // A = Alert(기본알림), C = Confirm 확인여부, S = Setting 팝업,
  content: string;
}

interface ModalProps {
  modalState: ModalState;
  openModal: ({ type, content }: { type: ModalState['type']; content: string }) => void;
  closeModal: () => void;
};

export const ModalStateContext = createContext<ModalProps>({
  modalState: {
    active: false,
    type: 'A',
    content: ''
  },
  // modalOpen: false,
  // type: 'A',
  openModal: () => {},
  closeModal: () => {}
});

const initialModalState: ModalState = {
  active: false,
  type: 'A',
  content: '',
}

export const ModalStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modalState, setModalState] = useState<ModalState>({ ...initialModalState });
  
  const openModal = ({ type, content }: { type: ModalState['type']; content: string }) => {
    setModalState((prev) => {
      return {
        ...prev,
        active: true,
        type,
        content,
      }
    })
  }
  const closeModal  = () => setModalState({...initialModalState});

  return (
    <ModalStateContext.Provider value={{ modalState, openModal, closeModal}}>
      {children}
    </ModalStateContext.Provider>
  );
}