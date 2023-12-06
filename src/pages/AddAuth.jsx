import React, {useState, useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Auth';
import './Login.css'
import { Settings } from './Settings';
import Login from './Login';
import { AddRecipes } from './AddRecipes';

const AddAuth = () => 
{
    const [user1, setUser] = useState(null);

    useEffect(() => {
      const checkState = onAuthStateChanged(auth, (user1) => {
        setUser(user1);
      });
  
      return () => checkState();
    }, []);
  
    if (!user1) {
      // Redirect or show a login prompt if the user is not signed in
      return (
        <div>
          <Login/>
      </div>
      )
    }
    return (
      <div>
        <AddRecipes/>
    </div>
    );
  };
  export default AddAuth;