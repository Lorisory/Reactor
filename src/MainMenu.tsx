import './App.css';
import HomeIcon from './Icons/HomeIcon';
import { useNavigate  } from 'react-router-dom';

function MainMenu() {
    const navigate = useNavigate();
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
                <button 
                onClick={()=> navigate('/HomeView')}
                className="MainMenuButtonStyle" style={{ padding: 0 }}>
                    <HomeIcon color="black" size="30pt" />
                </button>

                <button 
                onClick={()=> navigate('/FinanceHomeView')}
                className="MainMenuButtonStyle">
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