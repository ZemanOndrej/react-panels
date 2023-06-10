import { Constants } from "./constants";

const gridConditionalStyleData = {
	id: '4',
	title: 'New Grid Row Conditional Style',
	type: Constants.gridRowConditionalStyle
};
const gridData = {
	id: '1',
	title: 'New Grid',
	type: Constants.grid,
	gridRowConditionalStyles: [gridConditionalStyleData]
};
const kpiData = {
	id: '2',
	title: 'New Kpi',
	type: Constants.kpi
};
const layoutData = {
	id: '0',
	title: 'New Layout',
	type: Constants.layout,
	segments: [gridData, kpiData]
};
export const data = {
	layout: layoutData
};

export type DataType = typeof data;
export type LayoutData = typeof layoutData;
export type GridData = typeof gridData;
export type KpiData = typeof kpiData;
export type GridRowConditionalStyleData = typeof gridConditionalStyleData;