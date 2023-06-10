import { useCallback, useState } from 'react';
import LayoutPanelItem from './components/panelItems/LayoutPanelItem';
import GridPanelItem from './components/panelItems/GridPanelItem';
import KpiPanelItem from './components/panelItems/KpiPanelItem';
import { Constants } from './constants';
import { CloseButton } from './components/common/CloseButton';
import GridRowConditionalStylePanelItem from './components/panelItems/GridRowConditionalStylePanelItem';
import { DataType } from './data';
import './Editor.css';

type Props = { data: DataType };
export type Panel = {
	title: string;
	id: string;
	type: string;
	data: unknown;
	index: number;
};

export const Editor = (props: Props) => {
	const [panelList, setPanelList] = useState<Panel[]>([
		{
			id: 'layout' + props.data.layout.id,
			title: props.data.layout.title,
			type: props.data.layout.type,
			data: props.data.layout,
			index: 0
		}
	]);

	const openPanel = useCallback(
		(panel: Panel) => {
			const newPanelList = panelList.filter(p => panel.index > p.index);
			if (newPanelList.every(p => p.id !== panel.id)) {
				setPanelList([panel, ...newPanelList]);
			}
		},
		[panelList, setPanelList]
	);
	const closePanel = useCallback(
		(panel: Panel) => {
			if (panel.type != Constants.layout) {
				const newPanelList = panelList.filter(p => panel.index > p.index);
				setPanelList(newPanelList);
			}
		},
		[panelList, setPanelList]
	);

	return (
		<div className="flex flex-row items-start h-screen overflow-x-hidden">
			{panelList.map((panel, index) => (
				<Panel
					index={index}
					key={panel.id}
					panel={panel}
					panelManager={{ openPanel, closePanel }}
				/>
			))}
		</div>
	);
};

export type PanelProps = {
	panel: Panel;
	index: number;
	panelManager: {
		openPanel: (panel: Panel) => void;
		closePanel: (panel: Panel) => void;
	};
};

const Panel = (props: PanelProps) => {
	return (
		<div className={props.index > 1 ? 'hidden-panel' : 'visible-panel'}>
			<div className={'w-72 bg-white h-screen border-l-red-500 border-4 '}>
				<div className="bg-black flex justify-between items-center">
					<h2 className="text-2x">{props.panel.title}</h2>
					<CloseButton onClick={() => props.panelManager.closePanel(props.panel)} />
				</div>
				<div className="text-black">{renderSource(props)}</div>
			</div>
		</div>
	);
};

const renderSource = (props: PanelProps) => {
	switch (props.panel.type) {
		case Constants.kpi:
			return <KpiPanelItem props={props} />;
		case Constants.grid:
			return <GridPanelItem props={props} />;
		case Constants.layout:
			return <LayoutPanelItem props={props} />;
		case Constants.gridRowConditionalStyle:
			return <GridRowConditionalStylePanelItem props={props} />;

		default:
			return <div>no defined panel</div>;
	}
};
