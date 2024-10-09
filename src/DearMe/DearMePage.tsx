import './DearMeStyles.css';
import { useNavigate, Outlet } from 'react-router-dom';

function DearMePage() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
        <button
          className="DearMeToolbarButton"
          onClick={() => navigate('/dear-me/1-week')}
        >
          1 Week
        </button>
        <button
          className="DearMeToolbarButton"
          onClick={() => navigate('/dear-me/1-month')}
        >
          1 Month
        </button>
        <button
          className="DearMeToolbarButton"
          onClick={() => navigate('/dear-me/1-year')}
        >
          1 Year
        </button>
      </div>

      <div
        style={{
          border: 'dashed red 3px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'top',
          flexWrap: 'wrap', // Allows wrapping items
          height: '100vh',
        }}
      >
        {/* Outlet will render the respective subpage content */}
        <Outlet />
      </div>
    </div>
  );
}

export default DearMePage;
