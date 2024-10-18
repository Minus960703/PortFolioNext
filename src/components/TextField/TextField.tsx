import React        from 'react'
import styles       from './TextField.module.scss';

interface TextFieldProps {
  id             ?: string;
  name            : string;
  value           : string;
  type            : string;
  placeholder     : string;
  maxLength      ?: number;
  onChangeEvent   : (name: string, value: string) => void;
  onKeyDown      ?: boolean;
  onKeyDownEvent ?: () => void;
  pattern        ?: string;
}

const TextField = ({
  id,
  name,
  value,
  type             = 'text',
  placeholder,
  maxLength        = 9999,
  onChangeEvent,
  onKeyDown        = false,
  onKeyDownEvent,
  pattern          = ''
}: TextFieldProps) => {
  const keyPressDownEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    (e.key === 'Enter' && onKeyDownEvent) && onKeyDownEvent();
  }

  return (
    <input
      className       = {styles.input}
      id              = {id}
      name            = {name}
      value           = {value}
      type            = {type}
      placeholder     = {placeholder}
      maxLength       = {maxLength}
      onChange        = {(e) => { onChangeEvent(name, e.target.value) }}
      onKeyDown       = {onKeyDown ? (e) => {keyPressDownEnterKey(e)} : () => {}}
      required        = {type === 'email' ? true : false}
      pattern         = {pattern}
    />
  )
}

export { TextField };