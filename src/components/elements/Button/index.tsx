import type { FC, MouseEvent } from 'react';

export type ButtonProps = {
  clickHandler: ((event: MouseEvent<HTMLButtonElement>) => void) | (() => void);
  iconClass?: string;
  label?: string;
  addClass?: string;
};

export const Button: FC<ButtonProps> = ({ clickHandler, iconClass, label, addClass, ...props }) => {
  const normal =
    'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow';
  const dark = 'dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:shadow-white';
  const style = `${normal} ${dark} ${addClass}`;

  return iconClass ? (
    <button
      type='button'
      className={`${style} flex items-center`}
      onClick={clickHandler}
      {...props}
    >
      <span className={iconClass}> </span>
      {label && `\u00a0\u00a0${label}`}
    </button>
  ) : (
    <button type='button' className={style} onClick={clickHandler} {...props}>
      {label}
    </button>
  );
};
