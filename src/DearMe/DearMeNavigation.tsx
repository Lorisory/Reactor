import { useNavigate } from "react-router-dom";

export default function DearMeNavigation() {
  const navigate = useNavigate();
  return (<div style={{
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'limegreen',
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
  </div>)
}
