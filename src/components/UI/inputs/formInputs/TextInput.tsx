import { useField } from 'formik';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { InputProps } from './types';


function TextInput({ label, ...props }: InputProps) {
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
      <input
        className={classNames(styles.input, {
          [styles.inputError]: meta.touched && meta.error,
        })}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <p className={styles.error}>{meta.error}</p> : null}
    </div>
  );
}

export default TextInput;
