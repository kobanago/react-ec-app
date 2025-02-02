import type { FC } from 'react';
import { Button } from '../Button';

export type HeaderMenuProps = {
  handleClickDisplayMenu: () => void;
};

export const HeaderMenu: FC<HeaderMenuProps> = ({ handleClickDisplayMenu }) => {
  return (
    <div className='flex flex-row m-1'>
      <Button
        addClass='mx-2'
        clickHandler={() => {}}
        iconClass='i-material-symbols-shopping-cart-rounded w-7 h-7 hover:animate-bounce'
      />
      <Button
        addClass='mx-2'
        clickHandler={() => {}}
        iconClass='i-material-symbols-favorite w-7 h-7 hover:animate-bounce'
      />
      <Button
        addClass='mx-2'
        clickHandler={handleClickDisplayMenu}
        iconClass='i-material-symbols-patient-list w-7 h-7'
      />
    </div>
  );
};
