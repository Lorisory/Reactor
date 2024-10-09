import './DearMeStyles.css';
import DearMeNavigation from "./DearMeNavigation";
import DearMeSubpageContainer from "./DearMeSubpageContainer";

function DearMePage() {


  return (
    <div style={{ width: '100%', backgroundColor: 'lightseagreen' }}>
      <DearMeNavigation />
      <DearMeSubpageContainer />
    </div>
  );
}

export default DearMePage;
