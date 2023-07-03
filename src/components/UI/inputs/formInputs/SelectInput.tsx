import { useField } from 'formik';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { InputProps } from './types';



function SelectInput({ label, ...props }: InputProps) {
  const [field, meta] = useField(props);
  return (
    <div className={styles.wrapper}>
      <div className={styles.labelWrapper}>
        <label className={styles.label} htmlFor={props.name}>
          {label}
        </label>
      </div>
      <select
        className={classNames(styles.select, {
          [styles.selectError]: meta.touched && meta.error,
        })}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <p className={styles.error}>{meta.error}</p> : null}
    </div>
  );
}

export default SelectInput;
