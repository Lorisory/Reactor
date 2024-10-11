import { useNavigate, Outlet } from "react-router-dom";

export default function NotesPage() {
    const navigate = useNavigate();
    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                background: 'limegreen',
                border: '3px dashed black',
                width: '100%',
            }}>

                <button
                    onClick={() => navigate('/Notes/NotesSubPageA')}
                >
                    FirstSubPageA
                </button>
                <button
                    onClick={() => navigate('/Notes/NotesSubPageB')}
                >
                    SecondSubPageB
                </button>
                <button
                    onClick={() => navigate('/Notes/NotesSubPageC')}
                >
                    ThirdSubPageC
                </button>

            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                background: 'violet',
                border: '3px dashed gray',
                width: '100%',
                height: '100%',
            }}>
                <Outlet />
            </div>
        </div>
    )
}