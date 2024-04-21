import { Button } from '@/components/elements/Button';
import { List } from '@/components/elements/List';
import { SearchField } from '@/components/elements/SearchField';
import { SORT_OPTIONS } from '@/const';
import { filterGoods, sortGoods } from '@/features/goods';
import { category } from 'mocks/features/data/category.json';
import { type FC, type LegacyRef, forwardRef, useState } from 'react';
import { useDispatch } from 'react-redux';

export type SideMenuProps = {
  ref?: LegacyRef<HTMLDivElement>;
};

export const SideMenu: FC<SideMenuProps> = forwardRef((props, ref) => {
  const normal = 'bg-gray-50 fixed left-0 shadow-lg p-1.5 z-20';
  const dark = 'dark:bg-gray-800 dark:text-white dark:shadow-white';
  const style = `${normal} ${dark}`;
  const [isListDispaly, setIsListDisplay] = useState(false);
  const [isMenuDispaly, setIsMenuDisplay] = useState(false);
  const dispatch = useDispatch();

  const handleClickAllDisplay = () => {
    dispatch(filterGoods({ method: 'all', value: '' }));
    const sortEl = document.getElementById('sort_el') as HTMLSelectElement;
    if (!sortEl) return;
    const selectSort = sortEl.options.selectedIndex;
    if (!selectSort) return;
    const target = SORT_OPTIONS[selectSort - 1];
    dispatch(sortGoods({ category: target.category, sort: target.sort }));
  };

  return (
    <div className={style} ref={ref} {...props}>
      <Button
        addClass='m-2'
        iconClass={
          isMenuDispaly
            ? 'i-ph-arrow-bend-double-up-left-fill h-7 w-7'
            : 'i-ph-arrow-bend-double-up-right-fill h-7 w-7'
        }
        clickHandler={() => setIsMenuDisplay(!isMenuDispaly)}
      />
      {isMenuDispaly && (
        <div className='flex flex-col'>
          <SearchField />
          <Button
            label={isListDispaly ? '閉じる' : '一覧表示'}
            addClass='m-2'
            iconClass={
              isListDispaly
                ? 'i-material-symbols-book-2-rounded h-5 w-5'
                : 'i-material-symbols-menu-book-outline-rounded h-5 w-5'
            }
            clickHandler={() => setIsListDisplay(!isListDispaly)}
          />
          {isListDispaly && (
            <>
              <div
                className='my-2 overflow-y-scroll flex flex-col justify-center items-center'
                style={{ maxHeight: '550px' }}
              >
                <Button
                  label='全表示'
                  addClass='m-2'
                  iconClass={'i-material-symbols-done-all h-5 w-5'}
                  clickHandler={handleClickAllDisplay}
                />
                <List list={category} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
});
