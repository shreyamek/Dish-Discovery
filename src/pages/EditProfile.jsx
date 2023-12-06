import React, { useState } from 'react';
import './EditProfile.css';
import { Checkbox, CheckboxGroup, Stack, Input, Text, Flex } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { useProfile } from './ProfileContext';
import { Link, useNavigate } from 'react-router-dom';


const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
})


export const EditProfile = () => 
{

    const [showOtherInput, setShowOtherInput] = React.useState(false);
    const [otherInputValue, setOtherInputValue] = React.useState('');

    const [showPopup, setShowPopup] = useState(false);
    const [successPopup, setSuccessPopup] = useState(false);

    

    const containerStyle = {
        backgroundColor: '#C1E7AC',
        width:'50%',
        padding: '50px', 
        borderRadius: '20px',  
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        maxWidth: '800px',  
        margin: '40px auto 0',  
        color: 'black', 
    };

    const { updateProfileData } = useProfile();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    userName: '',
    aboutMe: '',
    preferences: [],
    // Add other form fields as needed
  });

  const handleChange = (field, value) => 
  {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleCheckboxChange = (values) => 
    {
        setShowOtherInput(values.includes('Other'));
        setFormData({
          ...formData,
          preferences: values, // Update preferences field
        });
    };

  const handleDoneEditing = async () => {
    if (formData.firstName && formData.lastName && formData.userName && formData.aboutMe) 
    {
      const dataToSend = 
      {
        userName: formData.userName,
        aboutMe: formData.aboutMe,
        firstName: formData.firstName,
        lastName: formData.lastName,
      };

      if (dataToSend.userName && dataToSend.aboutMe) 
      {
        // Check if at least one checkbox is checked
        if (formData.preferences && formData.preferences.length > 0) 
        {
          try {
            await updateProfileData(dataToSend);
            setSuccessPopup(true);
            // Optional: You can reset the form data here
            setFormData({
              firstName: '',
              lastName: '',
              userName: '',
              aboutMe: '',
              preferences: [],
            });
            // Optional: You can navigate or perform any other actions here
            navigate('/profile');
          } catch (error) {
            console.error('Error updating profile data:', error);
            // Handle error, e.g., show an error message
          }
          // Optional: You can navigate or perform any other actions here
        } else {
          setShowPopup(true); // Show popup if no checkbox is checked
        }
      } else {
        setShowPopup(true); // Show popup if username or aboutMe is empty
      }
    } else {
      setShowPopup(true); // Show popup if any of the required fields is empty
    }

    //updateProfileData(dataToSend);
  };



  return (
    <div style={containerStyle}>
        <div className="head1"> Profile Settings </div>
        <br/>

        <Stack spacing={4} align='center'>
            <Flex align='center'>
                <Text mr='4px'>First Name:</Text>
                <Input
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    value={formData.firstName}
                    placeholder='Enter your first name'
                    size='sm'
                    width='200px'
                    borderColor='black'
                />
            </Flex>

            <Flex align='center'>
                <Text mr='4px'>Last Name:</Text>
                <Input
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    value={formData.lastName}
                    placeholder='Enter your last name'
                    size='sm'
                    width='200px'
                    borderColor='black'
                />
            </Flex>

            <Flex align='center'>
                <Text mr='4px'>Username</Text>
                <Input
                    onChange={(e) => handleChange('userName', e.target.value)}
                    value={formData.userName}
                    placeholder='@username'
                    size='sm'
                    width='200px'
                    borderColor='black'
                />
            </Flex>

            <Flex align='center'>
                <Text mr='4px'>Bio</Text>
                <Input
                    onChange={(e) => handleChange('aboutMe', e.target.value)}
                    placeholder='Tell us about you!'
                    size='sm'
                    width='200px'
                    borderColor='black'
                />
            </Flex>

        </Stack>
    
        <div className="head2"> Dietary Preferances or Allergies</div>
        <div className="head3"> Select the choices that apply to you!</div>
        <br/>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CheckboxGroup colorScheme='green' value={formData.preferences} defaultValue={[]} onChange={handleCheckboxChange} borderColor='black'>
                <Stack spacing={4} direction='column'>
                    <Checkbox size='lg' borderColor='black' value='dairy allergy'>Dairy</Checkbox>
                    <Checkbox size='lg' borderColor='black' value='nut allergy'>Nuts</Checkbox>
                    <Checkbox size='lg' borderColor='black' value='gluten free diet'>Gluten</Checkbox>
                    <Checkbox size='lg' borderColor='black' value='vegan diet'>Vegan</Checkbox>
                    <Checkbox size='lg' borderColor='black' value='vegitarian diet'>Vegetarian</Checkbox>
                    <Checkbox size='lg' borderColor='black' value='None'>None</Checkbox>
                    <Checkbox size='lg' borderColor='black' value='Other'>Other</Checkbox>
                        {showOtherInput && (
                            <Stack spacing={2} direction='column'>
                                <Input
                                    size='sm' // Adjust the size as needed
                                    width='100px' // Adjust the width as needed
                                    placeholder='Specify'
                                    value={otherInputValue}
                                    onChange={(e) => setOtherInputValue(e.target.value)}
                                    borderColor='black'
                                />
                            </Stack>
                        )} 
                </Stack>
            </CheckboxGroup>  
        </div>

        <br/> 

        

      <div className='container3'>
        <div className="doneButton">
          <Link to="/profile" className="link" onClick={handleDoneEditing} style={{ color: 'black' }}>
            Done Editing
          </Link>
        </div>
      </div>

     

      {showPopup && (
          <div
            style={{
              position: "fixed",
              top: "47%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "70px",
              background: "#feddb6",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <p>Please Fill in all Fields.</p>
            <button
              onClick={() => setShowPopup(false)}
              style={{
                background: "#5A5A5A",
                color: "white",
                border: "none",
                padding: "2px 10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              OK
            </button>
          </div>
        )}
        {successPopup && (
          <div
            style={{
              position: "fixed",
              top: "47%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "70px",
              background: "#F5DADF",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <p>Successfully Updated Profile!</p>
            <button
              onClick={() => setSuccessPopup(false)}
              style={{
                background: "#5A5A5A",
                color: "white",
                border: "none",
                padding: "2px 10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              OK
            </button>
          </div>
        )}

         <br/> <br/>

    </div>
  )
}

/*<Flex align='center'>
                <Text mr='4px'>Email:</Text>
                <Input
                    onChange={handleChange}
                    placeholder='Enter your email address'
                    size='sm'
                    width='200px'
                    borderColor='black'
                />
            </Flex>  */