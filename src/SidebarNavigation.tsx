import { NavLink } from 'react-router-dom';
import React from 'react';
import HomeIcon from './Icons/HomeIcon'; // Assuming this is your HomeIcon component

export default function SidebarNavigation() {
  return (
    <div
      className="App-header"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Aligns to the top
        width: '100%',
        height: '100%',
      }}
    >
      <NavLink
        to="/home"
        style={({ isActive }) => ({
          padding: 0,
          fontWeight: isActive ? 'bold' : 'normal',
        })}
        className="MainMenuButtonStyle"
      >
        <HomeIcon color="black" size="30pt" />
      </NavLink>

      <NavLink
        to="/finance"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
        })}
        className="MainMenuButtonStyle"
      >
        Finance
      </NavLink>

      <NavLink
        to="/work"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
        })}
        className="MainMenuButtonStyle"
      >
        Work
      </NavLink>

      <NavLink
        to="/Notes"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
        })}
        className="MainMenuButtonStyle"
      >
        Notes
      </NavLink>

      <NavLink
        to="/dear-me"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
        })}
        className="MainMenuButtonStyle"
      >
        Dear Me
      </NavLink>
    </div>
  );
}
