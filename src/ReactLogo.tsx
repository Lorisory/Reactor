import logo from './logo.svg'; // Ujisti se, že soubor logo.svg existuje v tvém projektu.

function ReactLogo() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" style={{ width: '100%', height: '100%' }} />
        </div>
    );
}

export default ReactLogo;
