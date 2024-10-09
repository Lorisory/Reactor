import {Outlet} from "react-router-dom";

export default function DearMeSubpageContainer() {
  return (<div
    style={{
      border: 'dashed red 3px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'top',
      flexWrap: 'wrap', // Allows wrapping items
      height: '75vh',
    }}
  >
    {/* Outlet will render the respective subpage content */}
    <Outlet/>
  </div>)
}
