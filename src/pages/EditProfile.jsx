import React, {useEffect} from 'react';
import './EditProfile.css';
import './AddRecipes.jsx';
import { Checkbox, CheckboxGroup, Stack, Input, Text, Flex } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { useProfile } from './ProfileContext';
import { Link, useNavigate } from 'react-router-dom';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

export const EditProfile = () => {
  const [showOtherInput, setShowOtherInput] = React.useState(false);
  const [otherInputValue, setOtherInputValue] = React.useState('');
  const [showPopup, setShowPopup] = React.useState(false);

  const { updateProfileData } = useProfile();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    userName: '',
    aboutMe: '', 
    checkboxValues: [],// Add other form fields as needed
  });
  

  const containerStyle = {
    backgroundColor: '#C1E7AC',
    width: '50%',
    padding: '50px',
    borderRadius: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '800px',
    margin: '40px auto 0',
    color: 'black',
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('profileFormData')) || {};
    setFormData((prevData) => ({
      ...prevData,
      ...storedData,
    }));
  }, []);


  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleCheckboxChange = (values) => {
    setFormData((prevData) => ({
      ...prevData,
      checkboxValues: values,
    }));
  };

  const isFormValid = () => {
    return formData.firstName && formData.lastName && formData.userName && formData.aboutMe && formData.checkboxValues.length > 0;
  };

  const handleDoneEditing = () => {
    if (!isFormValid()) {
      return; // Don't proceed if the form is not valid
    }

    const dataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      userName: formData.userName,
      aboutMe: formData.aboutMe,
    };

    localStorage.setItem('profileFormData', JSON.stringify(dataToSend));

    updateProfileData(dataToSend);
    navigate('/profile'); // Use useNavigate instead of history.push
  };

  return (
    <div style={containerStyle}>
      <div className="head1"> Profile Settings </div>
      <br />

      <Stack spacing={4} align="center">
        <Flex align="center">
          <Text mr="4px">First Name:</Text>
          <Input
            onChange={(e) => handleChange('firstName', e.target.value)}
            value={formData.firstName}
            placeholder="Enter your first name"
            size="sm"
            width="200px"
            borderColor="black"
          />
        </Flex>

        <Flex align="center">
          <Text mr="4px">Last Name:</Text>
          <Input
            onChange={(e) => handleChange('lastName', e.target.value)}
            value={formData.lastName}
            placeholder="Enter your last name"
            size="sm"
            width="200px"
            borderColor="black"
          />
        </Flex>

        <Flex align="center">
          <Text mr="4px">Username</Text>
          <Input
            onChange={(e) => handleChange('userName', e.target.value)}
            value={formData.userName}
            placeholder="@username"
            size="sm"
            width="200px"
            borderColor="black"
          />
        </Flex>

        <Flex align="center">
          <Text mr="4px">Bio</Text>
          <Input
            onChange={(e) => handleChange('aboutMe', e.target.value)}
            placeholder="Tell us about you!"
            size="sm"
            width="200px"
            borderColor="black"
          />
        </Flex>
      </Stack>

      <div className="head2"> Dietary Preferences or Allergies</div>
      <div className="head3"> Select the choices that apply to you!</div>
      <br />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CheckboxGroup colorScheme="green" defaultValue={[]} onChange={handleCheckboxChange} borderColor="black">
          <Stack spacing={4} direction="column">
            <Checkbox size="lg" borderColor="black" value="dairy allergy">
              Dairy
            </Checkbox>
            <Checkbox size="lg" borderColor="black" value="nut allergy">
              Nuts
            </Checkbox>
            <Checkbox size="lg" borderColor="black" value="gluten free diet">
              Gluten
            </Checkbox>
            <Checkbox size="lg" borderColor="black" value="vegan diet">
              Vegan
            </Checkbox>
            <Checkbox size="lg" borderColor="black" value="vegetarian diet">
              Vegetarian
            </Checkbox>
            <Checkbox size="lg" borderColor="black" value="None">
              None
            </Checkbox>
            <Checkbox size="lg" borderColor="black" value="Other">
              Other
            </Checkbox>
            {showOtherInput && (
              <Stack spacing={2} direction="column">
                <Input
                  size="sm"
                  width="100px"
                  placeholder="Specify"
                  value={otherInputValue}
                  onChange={(e) => setOtherInputValue(e.target.value)}
                  borderColor="black"
                />
              </Stack>
            )}
          </Stack>
        </CheckboxGroup>
      </div>

      <br />

      <div className="container3">
        {isFormValid() && (
          <div className="doneButton">
            <Link to="/profile" className="link" onClick={handleDoneEditing} style={{ color: 'black' }}>
              Done Editing
            </Link>
          </div>
        )}
      </div>

      <br /> <br />

      
    </div>
  );
};
