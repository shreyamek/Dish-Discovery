//Aditya Sajeev
import React from 'react'
import SettingsPage from '../components/SettingsPage';
import background from '../BackgroundImage.png';

export const Settings = () => {
  return (
    <div>
    <div className="App" style={{backgroundImage: `url(${background})`}}>
    <SettingsPage />
    </div>
    </div>

  )
}