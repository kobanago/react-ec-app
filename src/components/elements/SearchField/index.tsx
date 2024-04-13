import { SORT_OPTIONS } from '@/const';
import { filterGoods, sortGoods } from '@/features/goods';
import { type FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../Button';

export const SearchField: FC = () => {
  const normal =
    'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-3';
  const dark = 'dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white';
  const style = `${normal} ${dark}`;
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const hancleClickSearch = () => {
    if (!inputRef.current) return;
    dispatch(filterGoods({ method: 'like', value: inputRef.current.value }));
    const sortEl = document.getElementById('sort_el') as HTMLSelectElement;
    if (!sortEl) return;
    const selectSort = sortEl.options.selectedIndex;
    if (!selectSort) return;
    const target = SORT_OPTIONS[selectSort - 1];
    dispatch(sortGoods({ category: target.category, sort: target.sort }));
  };

  return (
    <div className='w-full flex flex-row'>
      <input className={style} type='text' placeholder='キーワードを検索' ref={inputRef} />
      <Button clickHandler={hancleClickSearch} iconClass='i-material-symbols-search w-5 h-5' />
    </div>
  );
};
