import { GridData } from '../../App';
import { PanelProps } from '../../Editor';
import { Constants } from '../../constants';

type Props = {
	props: PanelProps;
};

export default function GridPanelItem({ props: { panel, panelManager } }: Props) {
	const data = panel.data as GridData;

	return (
		<div>
			<h2 className="bg-slate-100">Segments</h2>
			<ol className=" bg-slate-50">
				{data.gridRowConditionalStyles.map(conditionalStyle => (
					<li
						className="hover:bg-slate-200 cursor-pointer"
						key={conditionalStyle.id}
						onClick={() =>
							panelManager.openPanel({
								data: conditionalStyle,
								id: conditionalStyle.id,
								title: conditionalStyle.title,
								type: Constants.gridRowConditionalStyle,
							})
						}>
						{conditionalStyle.id}- {conditionalStyle.title}
					</li>
				))}
			</ol>
		</div>
	);
}
