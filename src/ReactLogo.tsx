import logo from './logo.svg'; // Ujisti se, že soubor logo.svg existuje v tvém projektu.

function ReactLogo() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%'
        }}>
            <img src={logo}
                className="App-logo"
                style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                }} />
        </div>
    );
}

export default ReactLogo;
