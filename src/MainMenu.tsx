import './App.css';
import HomeIcon from './Icons/HomeIcon';

function MainMenu() {
    return (
        <div className="App-header"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start', // Vertikální zarovnání k horní části
                width: '100%',
                height: '100%',
            }}
        >

            <button className="MainMenuButtonStyle" style={{padding:0}}>
                <HomeIcon color="black" size="30pt" />
            </button>

            <button className="MainMenuButtonStyle">
                Finance
            </button>

            <button className="MainMenuButtonStyle">
                Work
            </button>

            <button className="MainMenuButtonStyle">
                Notes
            </button>

        </div>


    );
}
export default MainMenu;