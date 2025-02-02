import { Card } from '@/components/elements/Card';
import type { GoodsType } from 'mocks/features/types';
import type { FC } from 'react';

export type CardsProps = {
  cards: GoodsType[];
};

export const Cards: FC<CardsProps> = ({ cards }) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {cards.map((item, index) => (
        <Card item={item} key={index.toString()} />
      ))}
    </div>
  );
};
