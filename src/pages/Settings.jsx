import React from 'react'
import SettingsPage from '../components/SettingsPage';
import background from '../BackgroundImage.png';

export const Settings = () => {
  return (
    <div>
    <div className="App" style={{backgroundImage: `url(${background})`}}>
    <div className="mainTitle">Settings</div>   
    <SettingsPage />
    </div>
    </div>

  )
}