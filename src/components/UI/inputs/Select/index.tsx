import styles from './styles.module.scss';
import { useAppDispatch } from '@/hooks/reduxHooks';
import classNames from 'classnames';
import { useState } from 'react';

type SelectProps = {
  selectedOption: string;
  handleOption: any;
  options: string[];
};

function Select({ selectedOption, options, handleOption }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  function handleSelect(option: string) {
    dispatch(handleOption(option));
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.selectOption, { [styles.optionActive]: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
      </div>

      <ul
        className={classNames(styles.optionList, { [styles.optionListActive]: isOpen })}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className={styles.optionItem}
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
