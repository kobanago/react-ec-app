import { SORT_OPTIONS } from '@/const';
import { filterGoods, sortGoods } from '@/features/goods';
import { type FC, type LegacyRef, type MouseEvent, forwardRef } from 'react';
import { useDispatch } from 'react-redux';

export type ListProps = {
  list: any[];
  addClass?: string;
  ref?: LegacyRef<HTMLDivElement>;
};

export const List: FC<ListProps> = forwardRef(({ list, addClass }, ref) => {
  const normal =
    'px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out cursor-pointer';
  const dark = 'dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white flex items-center';
  const style = `${normal} ${dark}`;
  const nodataNormal = 'px-4 py-2 bg-whiteborder-gray-200 flex items-center';
  const nodataDark = 'dark:text-white dark:border-gray-800';
  const nodataStyle = `${nodataNormal} ${nodataDark}`;
  const dispatch = useDispatch();
  const handleMouseDownMenuItem = (event: MouseEvent<HTMLLIElement>) => {
    dispatch(filterGoods({ method: 'match', value: event.currentTarget.innerText }));
    const sortEl = document.getElementById('sort_el') as HTMLSelectElement;
    if (!sortEl) return;
    const selectSort = sortEl.options.selectedIndex;
    if (!selectSort) return;
    const target = SORT_OPTIONS[selectSort - 1];
    dispatch(sortGoods({ category: target.category, sort: target.sort }));
  };

  return (
    <div className={`px-4 sm:px-8 w-auto max-w-5xl m-auto ${addClass}`} ref={ref}>
      {list.length ? (
        <ul className='border border-gray-200 rounded overflow-hidden shadow-md dark:shadow-white'>
          {list.map((item, index) => (
            <li className={style} key={index.toString()} onMouseDown={handleMouseDownMenuItem}>
              {item.class && <span className={item.class}> </span>}
              <span>{item.class ? `\u00a0\u00a0 ${item.label}` : item.label}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={nodataStyle}>
          <span className='i-material-symbols-do-not-disturb-on'> </span>
          <span>{`\u00a0\u00a0 ${'no data'}`}</span>
        </p>
      )}
    </div>
  );
});
// コメントアウトでも読み込んでおく必要有
/* <span className='i-material-symbols-add-circle-rounded'> </span>
<span className='i-streamline-interface-time-rewind-back-return-clock-timer-countdown'>
  {' '}
</span>
<span className='i-material-symbols-logout-rounded'> </span>
<span className='i-material-symbols-person'> </span> */
