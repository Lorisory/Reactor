import './App.css';
import ReactLogo from './ReactLogo';
import ReactorHeader from './ReactorHeader';
import ReactDataStatus from './ReactDateStatus';

function App() {
  return (
    // <div className='App'
    //   style={{ display: 'flex', alignItems: 'center', width: '120px', height: '120px' }}>
    //   <ReactLogo />
    //   <ReactorHeader />
    // </div>
    <div style={{
      display: 'grid',
      gridTemplateRows: '1fr 1fr 1fr 1fr', // čtyři řádky
      gridTemplateColumns: '1fr 4fr 1fr', // tři sloupce
      height: '100vh',
      gap: '5px' // mezery mezi mřížkovými prvky
    }}>
      <div style={{
        border: '1px dashed black',
        backgroundColor: 'lightgreen',
        gridRow: '1', // Umístění do 2. řádku
        gridColumn: '1' // Umístění do 1. sloupce
      }}>
        <ReactLogo />
      </div>
      <div style={{
        border: '1px dashed black',
        backgroundColor: 'lightblue',
        gridRow: '1', // Umístění do 1. řádku
        gridColumn: '2' // Přes všechny sloupce (1 až 3)
      }}>
        <ReactorHeader />
      </div>
      <div style={{
        border: '1px dashed black',
        backgroundColor: 'lightcoral',
        gridRow: '1', // Umístění do 2. řádku
        gridColumn: '3' // Umístění do 3. sloupce
      }}>
        <ReactDataStatus/>
      </div>
      <div style={{
        border: '1px dashed black',
        backgroundColor: 'lightgray',
        gridRow: '3', // Umístění do 3. řádku
        gridColumn: '1 / 4' // Přes všechny sloupce (1 až 3)
      }}>
        Footer
      </div>
    </div>
  );
}

export default App;
