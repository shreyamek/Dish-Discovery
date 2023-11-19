import React from 'react';
import background from '../BackgroundImage.png';
import circle from '../ProfilePic.png';
import './Profile.css';
import { Link } from 'react-router-dom';
import { useProfile } from './ProfileContext';


const user = {
  name: '@User1',
  imageSize: 200,
};

//Laya
export const Profile = () => 
{
  const { profileData } = useProfile();

  return (
    <div>
      <div className="App" style={{backgroundImage: `url(${background})`}}>
        <br/><br/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          className="avatar"
          src={circle}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />

      </div>
        <p>{profileData.userName}</p>
      
        <div className='container2'>
            <div className="editButton">
              <Link to="/EditProfile" className="link"style={{ color: 'black'}}> Edit Profile </Link>
            </div>
          </div>
        </div>
        <div className="rectangleBar">
          <div className="head2"> Bookmarks </div>
        </div>
        <div className="rectangleBar2">
          <div className="head2"> Your Recipies </div>
        </div>
        <div className="rectangleBar3">
          <div className="head2"> Folders </div>
        </div>
        <div className="rectangleBar4">
          <div className="head2"> About Me </div>
            <p>Here's a little about me: {profileData.aboutMe}</p>
        </div>
    </div>
    
      
  )
}