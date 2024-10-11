import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import FinanceHomeView from './Finance/FinanceHomeView';
import DearMePage from './DearMe/DearMePage';
import NotFound from './NotFound';
import ReactorHeader from './ReactorHeader';
import SidebarNavigation from './SidebarNavigation';
import ReactorFooter from './ReactorFooter';
import OneWeekPage from "./DearMe/SubPages/OneWeekPage";
import OneMonthPage from "./DearMe/SubPages/OneMonthPage";
import OneYearPage from "./DearMe/SubPages/OneYearPage";

import NotesPage from './Notes/NotesPage';
import NotesSubPageA from './Notes/SubPages/NotesSubPageA';
import NotesSubPageB from './Notes/SubPages/NotesSubPageB';
import NotesSubPageC from './Notes/SubPages/NotesSubPageC';


function App() {
  return (
    <Router>
      <div style={{
        display: 'grid',
        height: '100vh',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: '1fr 4fr',
        gridTemplateAreas: `
                    "header header"
                    "sidebar content"
                    "footer footer"
                `
      }}>
        <div style={{ gridArea: 'header', backgroundColor: 'lightblue' }}>
          <ReactorHeader />
        </div>
        <div style={{ gridArea: 'sidebar' }}>
          <SidebarNavigation />
        </div>
        <div style={{ gridArea: 'content', backgroundColor: 'lightgray', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/finance" element={<FinanceHomeView />} />

            {/* DearMePage with subroutes */}
            <Route path="/dear-me" element={<DearMePage />}>
              <Route path="1-week" element={<OneWeekPage />} />
              <Route path="1-month" element={<OneMonthPage />} />
              <Route path="1-year" element={<OneYearPage />} />
            </Route>

            {/* Notes with subroutes */}
            <Route path="/Notes" element={<NotesPage />}>
              <Route path="/Notes/" element={<NotesSubPageA />} />
              <Route path="NotesSubPageA" element={<NotesSubPageA />} />
              <Route path="NotesSubPageB" element={<NotesSubPageB />} />
              <Route path="NotesSubPageC" element={<NotesSubPageC />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div style={{ gridArea: 'footer' }}>
          <ReactorFooter />
        </div>
      </div>
    </Router>
  );
}

export default App;
