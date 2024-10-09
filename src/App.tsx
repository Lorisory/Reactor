import './App.css';
import ReactorHeader from './ReactorHeader';
import MainMenu from './MainMenu';
import ReactorFooter from './ReactorFooter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './HomeView';
import FinanceHomeView from './Finance/FinanceHomeView';
import DearMeHomeView from './DearMe/DearMeHomeView';

function App() {
  return (
    <Router>
      <div style={{
        display: 'grid',
        height: '100vh',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: '1fr 4fr ',
      }}>
        <div style={{
          //border: '1px dashed black',
          backgroundColor: 'lightblue',
          gridRow: '1',
          gridColumn: '1/-1'
        }}>
          <ReactorHeader />
        </div>

        <div style={{
          //border: '1px dashed green',
          gridRow: '2',
          gridColumn: '1'
        }}>
          <MainMenu />
        </div>

        <div style={{
          border: '1px dashed black',
          backgroundColor: 'lightgray',
          display: 'flex',
          alignContent: 'center',
          gridRow: '2',
          gridColumn: '2'
        }}>
          <Routes>
            <Route path="/HomeView" element={<HomeView />} />
            <Route path="/FinanceHomeView" element={<FinanceHomeView />} />
            <Route path="/DearMeHomeView" element={<DearMeHomeView />} />
          </Routes>
        </div>


        <div style={{
          //border: '1px dashed yellow',
          //backgroundColor: 'lightgray',
          height: '100%',
          minHeight: '10pt',
          gridRow: '3',
          gridColumn: 'span 3'
        }}>
          <ReactorFooter />
        </div>

      </div>
    </Router>
  );
}

export default App;
