import ButtonMiddle from '../Buttons/ButtonMiddle';
import { SavageLog } from './SavageLog';
import { PANEL_TYPE_ENUM } from '../../ts/PanelTypeEnum';
import { rarityInfoType } from '../../ts/rarityType';

export type ActiveBattleflyPanelContainerBaseType = {
  dispatchVisibleClass: (x: string) => void;
  active: number;
  setActive: (x: number) => void;
};

type BattleflyBlock = ActiveBattleflyPanelContainerBaseType & {
  index: number;
  children: React.ReactNode;
  panelType: PANEL_TYPE_ENUM;
  rarity?: Array<rarityInfoType['rarity']>;
};

const ActiveBattleflyPanelContainer: React.FunctionComponent<
  BattleflyBlock
> = ({
  index,
  panelType,
  rarity,
  dispatchVisibleClass,
  active,
  setActive,
  children,
}) => {
  return (
    <div className="mb-2">
      <div
        className="grid grid-cols-3 gap-2 font-bold lg:text-[16px] sm:text-[12px] xs:text-[10px]"
        onClick={() => {
          setActive(index);
        }}
      >
        {children}
        <div className="grid col-span-3 border-b-[1px] border-[#1F1F57] w-[100%]" />
      </div>
      <div className="col-span-3">
        <div
          className={`mt-2 font-bold bg-[#05051F] lg:text-[16px] sm:text-[12px] xs:text-[10px] ${
            panelType === PANEL_TYPE_ENUM.HYPERDOME || active === index
              ? ''
              : 'hidden'
          }`}
        >
          {panelType === PANEL_TYPE_ENUM.GARDEN && (
            <SavageLog rarity={rarity} />
          )}
          <div className="py-3">
            <ButtonMiddle
              className={``}
              secondary={true}
              onClick={() => {
                dispatchVisibleClass('');
              }}
            >
              {panelType === PANEL_TYPE_ENUM.GARDEN && 'Adjust Layout'}
              {panelType === PANEL_TYPE_ENUM.HYPERDOME && 'Adjust Stake'}
            </ButtonMiddle>
            <ButtonMiddle
              className={``}
              secondary={true}
              onClick={() => {
                console.log('kjghf');
              }}
            >
              {panelType === PANEL_TYPE_ENUM.GARDEN && 'Enter to Hyperdome'}
              {panelType === PANEL_TYPE_ENUM.HYPERDOME && 'Retreat to Garden'}
            </ButtonMiddle>
            {panelType === PANEL_TYPE_ENUM.GARDEN && (
              <ButtonMiddle
                className={``}
                onClick={() => {
                  setActive(-1);
                  dispatchVisibleClass('hidden');
                }}
              >
                <span className={`text-[#5C5C98]`}>Other Battleflys</span>
              </ButtonMiddle>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveBattleflyPanelContainer;
