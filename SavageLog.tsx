import { SelectedModsSquare } from '../sidebars/selectMods/SelectedModsSquare';
import { Mod } from '../sidebars/selectMods/Mod';
import { rarityInfoType } from '../../ts/rarityType';
import CurrentModsContainer from '../sidebars/common/CurrentModsContainer';
import React, { useRef, useState } from 'react';
import CircularButtonMiddle from '../Buttons/CircularButtonMiddle';

export type SavageLogProps = {
  rarity: Array<rarityInfoType['rarity']>;
};

export const SavageLog = ({ rarity }: SavageLogProps) => {
  return (
    <CurrentModsContainer>
      <ModsContainer rarity={rarity} />
    </CurrentModsContainer>
  );
};
export const ModsContainer = ({ rarity }: { rarity: any }) => {
  const [isShowing, setIsShowing] = useState(null);
  const savageRightRef = useRef(null);
  function handleScrollSavageLog(scrollOffset: number) {
    savageRightRef.current.scrollLeft += scrollOffset;
  }
  return (
    <>
      <div className="grid grid-cols-4 col-span-3 ">
        <div className="grid col-span-3 content-center">Savage log</div>
        <div className="col-span-1 grid-cols-2 place-items-end hidden md:grid">
          <CircularButtonMiddle
            src={'../assets/icons/left-arrow.svg'}
            onClick={() => handleScrollSavageLog(-20)}
          />
          <CircularButtonMiddle
            src={'../assets/icons/right-arrow.svg'}
            onClick={() => handleScrollSavageLog(20)}
          />
        </div>
      </div>
      <div className="flex overflow-hidden mt-2" ref={savageRightRef}>
        <div className="flex flex-inline">
          {rarity.map((rarity, i) => {
            return (
              <div
                className={`md:flex md:w-[100px] mr-1 `}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  setIsShowing(rarity);
                }}
                onMouseLeave={(e) => {
                  e.stopPropagation();
                  setIsShowing(null);
                }}
              >
                <SelectedModsSquare key={i} rarity={rarity} />
              </div>
            );
          })}
        </div>
      </div>
      {isShowing && (
        <div className="sm:z-20 sm:absolute sm:top-[40%] sm:left-[40%] sm:right-[20%] sticky row-start-2 col-span-5">
          <Mod rarity={isShowing} />
        </div>
      )}
    </>
  );
};
