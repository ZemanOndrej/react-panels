import { useCallback, useState } from 'react';
import { DataType } from './App';
import LayoutPanelItem from './components/panelItems/LayoutPanelItem';
import GridPanelItem from './components/panelItems/GridPanelItem';
import KpiPanelItem from './components/panelItems/KpiPanelItem';
import { Constants } from './constants';
import { CloseButton } from './components/common/CloseButton';

type Props = { data: DataType };
export type Panel = {
	title: string;
	id: string;
	type: string;
	data: unknown;
	index?: number;
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
			if (panelList.every(p => p.id !== panel.id)) {
				panel.index = panelList.length;
				setPanelList([panel, ...panelList]);
			}
		},
		[panelList, setPanelList]
	);
	const closePanel = useCallback(
		(panel: Panel) => {
			if (panel.type != Constants.layout) {
				const newPanelList = panelList.filter(
					p => p.index != null && panel.index != null && p.index < panel.index
				);
				setPanelList(newPanelList);
			}
		},
		[panelList, setPanelList]
	);

	return (
		<div className="flex flex-row items-start h-screen">
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
		<div
			className={
				'w-72 bg-white h-screen border-l-red-500 border-4 ' +
				(props.index > 1 ? 'hidden' : '')
			}>
			<div className="bg-black flex justify-between items-center">
				<h2 className="text-2x">{props.panel.title}</h2>
				<CloseButton onClick={() => props.panelManager.closePanel(props.panel)} />
			</div>
			<div className="text-black">{renderSource(props)}</div>
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

		default:
			return <div>no defined panel</div>;
	}
};
