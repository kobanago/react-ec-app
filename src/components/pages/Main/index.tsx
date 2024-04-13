import { Select } from '@/components/elements/Select';
import { Cards } from '@/components/molecules/Cards';
import { Header } from '@/components/molecules/Header';
import { SideMenu } from '@/components/molecules/SideMenu';
import type { RootState } from '@/stores';
import { type FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export const Main: FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const sideMenuRef = useRef<HTMLDivElement>(null);
  const [mainTopPadding, setMainTopPadding] = useState(0);
  const [mainLeftPadding, setMainLeftPadding] = useState(0);
  const displayGoods = useSelector((state: RootState) => state.displayGoods.value);

  useEffect(() => {
    if (!headerRef.current || !sideMenuRef.current) {
      return;
    }
    setMainTopPadding(headerRef.current.offsetHeight);
    setMainLeftPadding(sideMenuRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <Header ref={headerRef} />
      <main
        className='flex justify-between items-start'
        style={{ paddingTop: `${mainTopPadding}px` }}
      >
        <div className='flex flex-row'>
          <SideMenu ref={sideMenuRef} />
          <div style={{ paddingLeft: `${mainLeftPadding}px` }}>
            {displayGoods.length ? (
              <>
                <div className='flex justify-between items-center m-2'>
                  <p>表示{displayGoods.length}件</p>
                  <Select />
                </div>
                <Cards cards={displayGoods} />
              </>
            ) : (
              <div className='text-center'>
                <p>該当する商品はありませんでした</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
