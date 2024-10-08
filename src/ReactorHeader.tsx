import './App.css';
import ReactLogo from './ReactLogo';

function ReactorHeader() {
  return (
    <header className="App-header" >
      <div style={{
        display: 'grid',
        width: '100%',
        height: '100%',
        gridTemplateRows: '80px',
        gridTemplateColumns: '1fr 4fr',
      }}>
        <div className="App-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center', // Centers content horizontally
            gridRow: '1',
            gridColumn: '1',
          }}>
          <ReactLogo />
        </div>


        <div className='App-header '
          style={{
            // border: '2px dashed white',
            width: '100%',
            display: 'flex', // Flexbox pro zarovnání
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'row',
            gridRow: '1',
            gridColumn: '2'
          }}>
          <h1>
            WimeApp in React as Reactor
          </h1>
        </div>

        {/* <div style={{
          //border: '1px dashed black',
          width: '100%',
          gridRow: '1',
          gridColumn: '3'
        }}>
          <ReactDateStatus />
        </div> */}

      </div>
    </header>
  );
}

export default ReactorHeader;
