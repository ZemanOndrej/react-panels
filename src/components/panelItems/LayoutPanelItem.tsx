import { LayoutData } from '../../App';
import { PanelProps } from '../../Editor';

type Props = {
	props: PanelProps;
};

export default function LayoutPanelItem({ props: { panel, panelManager } }: Props) {
	const data = panel.data as LayoutData;
	return (
		<div>
			<h2 className="bg-slate-100">Segments</h2>
			<ol className=" bg-slate-50">
				{data.segments.map(segment => (
					<li
						className="hover:bg-slate-200 cursor-pointer"
						key={segment.id}
						onClick={() =>
							panelManager.openPanel({
								data: segment,
								id: segment.id,
								title: segment.title,
								type: segment.type,
							})
						}>
						{segment.id}- {segment.title}
					</li>
				))}
			</ol>
		</div>
	);
}
