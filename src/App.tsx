import React from 'react';
import Converter from './components/converter/Converter.component';
import './App.css';

export interface IValue {
    id: number;
    name: string;
    coef: number;
}

const firstSel: IValue[] = [
    {
        id: 1, name: 'metres', coef: 1
    },
    {
        id: 2, name: 'yards', coef: 1.094
    },
    {
        id: 3, name: 'test3', coef: 3.234
    },
    {
        id: 4, name: 'test4', coef: 4.55
    }
];

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Converter SelectValues={ firstSel } />
      </header>
    </div>
  );
};

export default App;
