import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = "715809564452-5s6s4ke6bvjgu4ct93uo95j0n1d0okcu.apps.googleusercontent.com";
const API_KEY = 'AIzaSyDCowsMSF7KotLczgMuTI1mUN4y0iolzEk';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

const FinanceHomeView: React.FC = () => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {
        gapi.auth2.getAuthInstance().signIn().then(() => {
          loadCalendar();
        });
      });
    };

    gapi.load('client:auth2', initClient);
  }, []);

  const loadCalendar = () => {
    const today = new Date();
    const date = today.toLocaleDateString('cs-CZ', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    setFormattedDate(date); // Nastav stav pro zobrazení data
  };

  const clearDate = () => {
    setFormattedDate(null); // Resetuj stav na null
  };

  return (
    <div>
      <h1>Google Calendar API</h1>
      <button onClick={loadCalendar}>Zobraz dnešní datum</button>
      {formattedDate && <p>Dnešní datum a den: {formattedDate}</p>}
      {formattedDate && <button onClick={clearDate}>Smaž datum</button>} {/* Tlačítko pro smazání, pokud je datum zobrazeno */}
    </div>
  );
};

export default FinanceHomeView;
