import ActiveBattleflyBlock from './ActiveBattleflyPanelBlock';
import { ActiveBattleflyPanelContainerBaseType } from './ActiveBattleflyPanelContainer';
import { PanelCardProps } from './PanelCard';
import PanelContainer from '../sidebars/common/PanelContainer';

type ActiveBattleflyPanelProps = ActiveBattleflyPanelContainerBaseType &
  PanelCardProps;

const ActiveBattleflyPanel: React.FunctionComponent<
  ActiveBattleflyPanelProps
> = ({ data, dispatchVisibleClass, active, setActive, panelType }) => {
  return (
    <PanelContainer>
      {data.map((activeBattlefly, i) => {
        return (
          <ActiveBattleflyBlock
            data={activeBattlefly}
            dispatchVisibleClass={dispatchVisibleClass}
            active={active}
            setActive={setActive}
            index={activeBattlefly.index}
            panelType={panelType}
            key={i}
          />
        );
      })}
    </PanelContainer>
  );
};

export default ActiveBattleflyPanel;
