import './DearMeStyles.css';
import Envelope from './Envelope';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnvelopeView from './EnvelopeView';

function DearMeHomeView() {
    const navigate = useNavigate();
    return (
        <div style={{
            width: '100%',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                width: '100%'
            }}>

                <button className="DearMeToolbarButton"
                    onClick={() => navigate('/EnvelopeView')}>
                    1 Week
                </button>
                <button className="DearMeToolbarButton">
                    1 Month
                </button>
                <button className="DearMeToolbarButton">
                    1 Year
                </button>
            </div>

            <div
                style={{
                    border: 'dashed red 3px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'top',
                    flexWrap: 'wrap', // Umožní zalamování položek
                    height: '100vh',
                }}
            >
                <Envelope text='1 Week' width={400} height={200} />
                <Envelope text='1 Month' width={400} height={200} />
                <Envelope text='1 Year' width={400} height={200} />
                <Routes>
                    <Route path="/EnvelopeView" element={<EnvelopeView />} />
                </Routes>
            </div>

        </div>
    );
}

export default DearMeHomeView