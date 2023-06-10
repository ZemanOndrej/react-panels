import { PanelProps } from '../../Editor';

type Props = {
	props: PanelProps;
};

export default function KpiPanelItem({ props }: Props) {
	return <div>{props.panel.title}</div>;
}
