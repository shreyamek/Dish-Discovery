import React from 'react';
import background from '../BackgroundImage.png';
import circle from '../ProfilePic.png';
import './Profile.css';
import { useNavigate} from 'react-router-dom';

//const [activeIndex, setActiveIndex] = useState(0);

const user = {
  name: '@User1',
  imageSize: 200,
};

//Laya
export const Profile = () => {

  const navigate = useNavigate;
  const handleclick = () => {
    navigate(`/editprofile`)
  }

  return (
    <div>
      <div className="App" style={{backgroundImage: `url(${background})`}}>
        <br/><br/>
        <img
          className="avatar"
          src={circle}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize

          }}
        />
        <h2>{user.name}</h2>
       <button onClick={handleclick}>
          edit profile
        </button>
      </div>
    </div>
      

  )
}