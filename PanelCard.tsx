import type { GardenBattleflyDataType } from '../../ts/GardenBattleflyDataType';
import type { HyperdomeBattleflyDataType } from '../../ts/HyperdomeBattleflyDataType';
import { PANEL_TYPE_ENUM } from '../../ts/PanelTypeEnum';
import { calculateGainLoss } from '../../util/calculateGainLoss';
import { SelectedModsSquare } from '../sidebars/selectMods/SelectedModsSquare';

export type AllPanelCardProps = {
  panelType: PANEL_TYPE_ENUM;
  data: object;
};

export type PanelWithGardenProps = {
  panelType: PANEL_TYPE_ENUM.GARDEN;
  data: GardenBattleflyDataType;
} & AllPanelCardProps;

export type PanelWithHyperdomeProps = {
  panelType: PANEL_TYPE_ENUM.HYPERDOME;
  data: HyperdomeBattleflyDataType;
} & AllPanelCardProps;

export type PanelCardProps = PanelWithGardenProps | PanelWithHyperdomeProps;

const PanelCard: React.FunctionComponent<PanelCardProps> = ({
  data,
  panelType,
}) => {
  return (
    <>
      <div className="w-full h-0 shadow-lg pb-full rounded-lg bg-[#1F1F57] mx-auto ">
        <div className="p-1 relative">
          <div className="w-[7px] h-[50%] rounded-[127px]" />
          {/** The image is square and no longer needs padding to be centered */}
          <img src={data?.src} width="100%" height="100%" />
        </div>
      </div>
      <div className="grid col-span-2">
        <div className="">{data?.name}</div>
        <div className="grid grid-cols-2 text-[12px]">
          <span className="grid content-center">ROI</span>
          <span className="grid place-content-end content-center">
            {data?.roiValue}
          </span>
        </div>
        <div className="grid grid-cols-2 text-[12px]">
          <span className="grid content-center">Age</span>
          <span className="grid  place-content-end content-center">
            {data?.age}
          </span>
        </div>
        {panelType === PANEL_TYPE_ENUM.HYPERDOME && (
          <>
            <div className="grid grid-cols-2 text-[12px]">
              <span className="grid content-center">Staked Amount</span>
              <span className="grid  place-content-end content-center">
                {data?.stakedAmount}&nbsp;
                {data?.priceType}
              </span>
            </div>
            <div className="grid grid-cols-2 text-[12px]">
              <span className="grid content-center">Original Stake</span>
              <span className="grid  place-content-end content-center">
                {data?.originalStake} &nbsp;
                {data?.priceType}
              </span>
            </div>
            <div className="grid grid-cols-2 text-[12px]">
              <span className="grid content-center">Gain/Loss</span>
              <span className="grid  place-content-end content-center">
                {calculateGainLoss(data?.stakedAmount, data?.originalStake)}{' '}
                &nbsp;
                {data?.priceType}
              </span>
            </div>
          </>
        )}
        <div className="grid grid-cols-4 gap-1 my-2 ">
          {data?.rarity.map((mod, i) => {
            return <SelectedModsSquare rarity={`${mod}`} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PanelCard;
