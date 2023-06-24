import React from 'react';
import { useField } from 'formik';
import styles from './styles.module.scss';
import classNames from 'classnames';

type TextAreaProps = {
  name: string;
  label?: string;
  placeholder?: string;
  [key: string]: any;
};

function TextArea({ label, ...props }: TextAreaProps) {
  const [field, meta] = useField(props);
  return (
    <div className={styles.wrapper}>
      {!!label && (
        <div className={styles.labelWrapper}>
          <label className={styles.label} htmlFor={props.name}>
            {label}
          </label>
        </div>
      )}
      <textarea
        className={classNames(styles.textarea, {
          [styles.textareaError]: meta.touched && meta.error,
        })}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <p className={styles.error}>{meta.error}</p> : null}
    </div>
  );
}

export default TextArea;
