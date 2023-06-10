import { PanelProps } from '../../Editor';
import { GridRowConditionalStyleData } from '../../data';

type Props = {
	props: PanelProps;
};

export default function GridRowConditionalStylePanelItem({ props: { panel } }: Props) {
	const data = panel.data as GridRowConditionalStyleData;
	return (
		<div>
			<h2>{data.title}</h2>
		</div>
	);
}
