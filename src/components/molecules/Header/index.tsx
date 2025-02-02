import { List } from '@/components/elements/List';
import { MY_MENU } from '@/const';
import { type FC, type LegacyRef, forwardRef, useEffect, useRef, useState } from 'react';
import { HeaderMenu } from '../../elements/HeaderMenu';

export type HeaderProps = {
  ref?: LegacyRef<HTMLDivElement>;
};

export const Header: FC<HeaderProps> = forwardRef((props, ref) => {
  const normal = 'bg-white fixed top-0 left-0 right-0 z-10 shadow-lg';
  const dark = 'dark:bg-gray-800 dark:text-white dark:shadow-white';
  const style = `${normal} ${dark}`;
  const listRef = useRef<HTMLDivElement>(null);
  const openListStyle = 'absolute top-20 right-0 rounded-md z-20';
  const [isListOpen, setIsListOpen] = useState(false);
  const handleClickDisplayMenu = () => {
    setIsListOpen(true);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (!isListOpen || !listRef.current) {
      return;
    }
    if (!listRef.current.contains(event.target as Node)) {
      setIsListOpen(false);
    }
  };
  useEffect(() => {
    document.removeEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);
  return (
    <header className={style} ref={ref} {...props}>
      <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center text-xl' onMouseDown={() => {}}>
          <span className='i-emojione-shopping-bags w-10 h-10 animate-bounce-short'> </span>
          <h1 className='text-2xl font-bold px-6'>EC Sample</h1>
        </div>
        <div className='right-0'>
          <HeaderMenu handleClickDisplayMenu={handleClickDisplayMenu} />
        </div>
      </div>
      <List
        list={MY_MENU}
        addClass={isListOpen ? openListStyle : 'hidden'}
        ref={listRef}
        aria-hidden={!isListOpen}
      />
    </header>
  );
});
