import './App.css';
import ReactorHeader from './ReactorHeader';
import MainMenu from './MainMenu';
import ReactorFooter from './ReactorFooter';

function App() {
  return (
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
        display:'flex',
        alignContent:'center',
        gridRow: '2', // Umístění do 3. řádku
        gridColumn: '2' // Přes všechny sloupce (1 až 3)
      }}>
        Body
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
  );
}

export default App;
