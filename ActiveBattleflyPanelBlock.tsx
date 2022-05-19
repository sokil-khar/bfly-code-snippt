import ActiveBattleflyPanelContainer, {
  ActiveBattleflyPanelContainerBaseType,
} from './ActiveBattleflyPanelContainer';
import PanelCard, { PanelCardProps } from './PanelCard';

type ActiveBattleflyPanelBlockProps = ActiveBattleflyPanelContainerBaseType &
  PanelCardProps;

const ActiveBattleflyPanelBlock: React.FunctionComponent<
  ActiveBattleflyPanelBlockProps
> = ({ data, dispatchVisibleClass, active, setActive, panelType }) => {
  return (
    <ActiveBattleflyPanelContainer
      setActive={setActive}
      active={active}
      dispatchVisibleClass={dispatchVisibleClass}
      index={data.index}
      panelType={panelType}
      rarity={data.rarity}
    >
      <PanelCard data={data} panelType={panelType} />
    </ActiveBattleflyPanelContainer>
  );
};

export default ActiveBattleflyPanelBlock;
