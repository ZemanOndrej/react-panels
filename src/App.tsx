import { useState } from 'react';
import { Editor } from './Editor';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Constants } from './constants';

const gridData = {
	id: '1',
	title: 'New Grid',
	type: Constants.grid,
	gridRowConditionalStyles: [
		{
			id: '4',
			title: 'grid row conditional style',
			type: Constants.gridRowConditionalStyle
		}
	]
};
const kpiData = {
	id: '2',
	title: 'Kpi',
	type: Constants.kpi
};
const layoutData = {
	id: '0',
	title: 'new layout',
	type: Constants.layout,
	segments: [gridData, kpiData]
};
const data = {
	layout: layoutData
};

export type DataType = typeof data;
export type LayoutData = typeof layoutData;
export type GridData = typeof gridData;
export type KpiData = typeof kpiData;

function App() {
	return (
		<div className="flex flex-row h-screen w-screen items-center">
			<Viewer />
			<Editor data={data} />
		</div>
	);
}

function Viewer() {
	const [count, setCount] = useState(0);

	return (
		<div className="viewer">
			<div className="flex flex-col items-center">
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</div>
	);
}

export default App;