import React from 'react'
import './EditProfile.css';


export const EditProfile = () => {
  return (
    <><div className="head1"> Profile Settings </div><>
    <br></br>

    <label>
          Username:
          <input username="UserName" />
          <br /><br />
          First name:
          <input firstname="firstName" />
          <br /><br />
          Last name:
          <input lastname="lastName" />
          <br /><br />
          Email Address:
          <input email="emailAddress" />
          <br /><br />
          Phone Number:
          <input phone="phoneNumber" defaultValue={"optional"} />

      </label>
          <p>
              Ditary Restrictions (Choose 1 or more options)
              <br /><br />
              <label>
                  Gluten: <input type="checkbox" name="myCheckbox" defaultChecked={false} />
              </label>
              <br></br>

              <label>
                  Dairy: <input type="checkbox" name="myCheckbox" defaultChecked={false} />
              </label>
              <br></br>

              <label>
                  Nuts: <input type="checkbox" name="myCheckbox" defaultChecked={false} />
              </label>
              <br></br>

              <label>
                  Vegetarian: <input type="checkbox" name="myCheckbox" defaultChecked={false} />
              </label>
              <br></br>

              <label>
                  Vegan: <input type="checkbox" name="myCheckbox" defaultChecked={false} />
              </label>
              <br></br>

              <label>
                 Other: <input type="checkbox" name="myCheckbox" defaultChecked={false} />
              </label>
                <br></br>

            <label>
            None: <input type="checkbox" name="myCheckbox" defaultChecked={false} />

            </label>

          </p></></>
    
  )
}