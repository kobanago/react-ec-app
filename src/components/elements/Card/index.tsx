import type { GoodsType } from 'mocks/features/types';
import type { FC } from 'react';

export type CardProps = {
  item: GoodsType;
};

export const Card: FC<CardProps> = ({ item }) => {
  const normal =
    'max-w-sm rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 overflow-hidden bg-white hover:bg-sky-100 hover:text-sky-900 border-b border-gray-200 transition-all duration-300 ease-in-out cursor-pointer';
  const dark =
    'dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-gray-800 dark:shadow-white';

  const style = `${normal} ${dark}`;
  return (
    <div className={style} onMouseDown={() => {}}>
      <img className='w-80 h-80 object-contain' src={item.src} alt={item.name} />
      <div className='px-6 py-4'>
        <div className='font-semibold text-gray-600 dark:text-white text-xl mb-2'>{item.name}</div>
        <p className='text-gray-500 dark:text-white text-base'>
          {item.price.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2'>
          #{item.label}
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2'>
          #{item.sex ? item.sex : 'ユニセックス'}
        </span>
      </div>
    </div>
  );
};
