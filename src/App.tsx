import './App.css';
import ReactorHeader from './ReactorHeader';

function App() {
  return (
    <div style={{
      display: 'grid',
      height: '100vh',
      gridTemplateRows: 'auto 1fr auto', 
      gridTemplateColumns: '1fr 4fr 1fr',
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
        border: '1px dashed black',
        backgroundColor: 'lightgray',
        gridRow: '2', // Umístění do 3. řádku
        gridColumn: '1 ' // Přes všechny sloupce (1 až 3)
      }}>
        Footer1
      </div>
      <div style={{
        border: '1px dashed black',
        backgroundColor: 'lightgray',
        gridRow: '2', // Umístění do 3. řádku
        gridColumn: '2' // Přes všechny sloupce (1 až 3)
      }}>
        Footer2
      </div>
      <div style={{
        border: '1px dashed black',
        backgroundColor: 'lightgray',
        gridRow: '2', // Umístění do 3. řádku
        gridColumn: '3' // Přes všechny sloupce (1 až 3)
      }}>
        Footer3
      </div>

      <div style={{
        border: '1px dashed black',
        backgroundColor: 'lightgray',
        height: '100%',
        gridRow: '3', // Umístění do 3. řádku
        gridColumn: 'span 3' // Přes všechny sloupce (1 až 3)
      }}>
        Patička
      </div>
    </div>
  );
}

export default App;
