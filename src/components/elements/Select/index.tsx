import { SORT_OPTIONS } from '@/const';
import { sortGoods } from '@/features/goods';
import type { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';

export const Select: FC = () => {
  const normal =
    'block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline';
  const dark = 'dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:shadow-white';
  const style = `${normal} ${dark}`;
  const dispatch = useDispatch();
  const handleChangeSortItem = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.currentTarget.options.selectedIndex;
    const target = SORT_OPTIONS[selectedIndex - 1];
    dispatch(sortGoods({ category: target.category, sort: target.sort }));
  };

  return (
    <div className='inline-block relative w-64 dark:text-white'>
      <select id='sort_el' className={style} onChange={handleChangeSortItem}>
        <option value='' disabled={true} selected={true} hidden={true}>
          選択してください
        </option>
        {SORT_OPTIONS.map((item, index) => (
          <option key={index.toString()} data-category={item.category} data-sort={item.sort}>
            {item.value}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute bottom-2 right-0 flex items-center px-2'>
        <span className='i-material-symbols-arrow-drop-down-circle-outline-rounded w-5 h-5'> </span>
      </div>
    </div>
  );
};
