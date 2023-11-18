import React from 'react'
import './EditProfile.css';
import { Checkbox, CheckboxGroup, Stack, Input, Text, Flex } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { Link } from 'react-router-dom';


const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
})


export const EditProfile = () => {
    const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)

  const [showOtherInput, setShowOtherInput] = React.useState(false);
  const [otherInputValue, setOtherInputValue] = React.useState('');

  const handleCheckboxChange = (values) => {
    setShowOtherInput(values.includes('Other'));
  };

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

  return (
    <div style={containerStyle}>
        <div className="head1"> Profile Settings </div>
        <br/>

        <Stack spacing={4} align='center'>
            <Flex align='center'>
                <Text mr='4px'>First Name:</Text>
                <Input
                    onChange={handleChange}
                    placeholder='Enter your first name'
                    size='sm'
                    width='200px'
                    borderColor='black'
                />
            </Flex>

            <Flex align='center'>
                <Text mr='4px'>Last Name:</Text>
                <Input
                onChange={handleChange}
                placeholder='Enter your last name'
                size='sm'
                width='200px'
                borderColor='black'
                />
            </Flex>

            <Flex align='center'>
                <Text mr='4px'>Username</Text>
                <Input
                onChange={handleChange}
                placeholder='@username'
                size='sm'
                width='200px'
                borderColor='black'
                />
            </Flex>

            <Flex align='center'>
                <Text mr='4px'>Email:</Text>
                <Input
                onChange={handleChange}
                placeholder='Enter your email address'
                size='sm'
                width='200px'
                borderColor='black'
                />
            </Flex>

            <Flex align='center'>
                <Text mr='4px'>Bio</Text>
                <Input
                onChange={handleChange}
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
        <CheckboxGroup colorScheme='green' defaultValue={[]} onChange={handleCheckboxChange} borderColor='black'>
                <Stack spacing={4} direction='column'>
                    <Checkbox size='lg' borderColor='black' value='dairy'>Dairy</Checkbox>
                    <Checkbox size='lg' borderColor='black' value='gluten'>Gluten</Checkbox>
                    <Checkbox size='lg' borderColor='black' value='nuts'>Nuts</Checkbox>
                    <Checkbox size='lg' borderColor='black' value='vegan'>Vegan</Checkbox>
                    <Checkbox size='lg' borderColor='black' value='vegitarian'>Vegetarian</Checkbox>
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
                <Link to="/Profile" className="link" style={{ color: 'black'}}> Done Editing </Link>
          </div>
        </div>

         <br/> <br/>

    </div>
    
  )
}