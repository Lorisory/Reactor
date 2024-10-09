import './DearMeStyles.css';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnvelopeView from './EnvelopeView';
import EnvelopeOverall from './EnvelopesOverall';

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
                    Envelope
                    1 Week
                </button>
                <button className="DearMeToolbarButton"
                    onClick={() => navigate('/EnvelopeOverall')}>
                    EnvelopeOverall
                    1 Month
                </button>
                <button className="DearMeToolbarButton">
                    1 Year
                </button>
            </div>
            <div>
                <Routes>
                    <Route path="/EnvelopeOverall" element={<EnvelopeOverall />} />
                    <Route path="/EnvelopeView" element={<EnvelopeView />} />
                </Routes>
            </div>

        </div>
    );
}

export default DearMeHomeView