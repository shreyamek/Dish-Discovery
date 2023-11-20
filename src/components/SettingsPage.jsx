import React, { useState } from 'react';
import './settings-page.css';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { EditIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('account-info');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSectionClick = (sectionId) => {
    if (sectionId === 'logout') {
      onOpen();
    } else {
      setActiveSection(sectionId);
    }
  };

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('User signed out');
      })
      .catch((error) => {
        // An error happened.
        console.error('Error signing out:', error.message);
      });

    onClose();
    // After the modal is closed, update the active section
    setActiveSection('logout');

    // Redirect to the login page
    navigate('/'); // Replace '/login' with the actual path to your login page
  };

  return (
    <div className={`settings-page ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar">
        <button className="collapse-button" onClick={handleToggleSidebar}>
          {sidebarCollapsed ? <ArrowRightIcon /> : <ArrowLeftIcon />}
        </button>
        <ul>
          <li>
            <a
              href="#account-info"
              className={activeSection === 'account-info' ? 'active' : ''}
              onClick={() => handleSectionClick('account-info')}
            >
              Account Info
            </a>
          </li>
          <li>
            <a
              href="#privacy-security"
              className={activeSection === 'privacy-security' ? 'active' : ''}
              onClick={() => handleSectionClick('privacy-security')}
            >
              Privacy & Security
            </a>
          </li>
          <li>
            <a
              href="#help-support"
              className={activeSection === 'help-support' ? 'active' : ''}
              onClick={() => handleSectionClick('help-support')}
            >
              Help & Support
            </a>
          </li>
          <br />
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className={activeSection === 'logout' ? 'active' : ''}
              onClick={() => handleSectionClick('logout')}
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              Logout
            </a>
          </li>
        </ul>
      </div>

      <div className="content">
        <section id="account-info" className={activeSection === 'account-info' ? 'visible' : 'hidden'}>
          
          <div className="content-box">
          <h2>Account Info</h2>
  <div className="profile-icon">
    <img src="profile-image.jpg" alt="User Profile" />
  </div>
  <div className="user-details">
    <div className="detail">
      <p>Username: JohnDoe</p>
      <span className="change-icon"><IconButton aria-label='Edit Username'icon={<EditIcon />} onClick={() => { navigate('/profile');}}/></span>
    </div>
    <div className="detail">
      <p>Email: john.doe@example.com</p>
      <span className="change-icon"><IconButton aria-label='Edit Username'icon={<EditIcon />} onClick={() => { navigate('/profile');}}/></span>
    </div>
    <div className="detail">
      <p>Linked Social Media:</p>
    </div>
    <ul className="social-media-list">
      <li>
        <p>Twitter: @johndoe</p>
        <span className="change-icon"><IconButton aria-label='Edit Username'icon={<EditIcon />}/></span>
      </li>
      <li>
        <p>Instagram: @johndoe_photos</p>
        <span className="change-icon"><IconButton aria-label='Edit Username'icon={<EditIcon />}/></span>
      </li>
    </ul>
  </div>
</div>
</section>

        <section id="privacy-security" className={activeSection === 'privacy-security' ? 'visible' : 'hidden'}>
        <div className="content-box">
          <h2>Privacy & Security</h2>
<p>
  Privacy and Security Policy
  Effective Date: [11/3/23]
  <br /><br />
  Welcome to Dish Discovery! We are committed to safeguarding your privacy and ensuring the security of your personal information. This Privacy and Security Policy outlines how we collect, use, and protect your data when you visit our website and use our services.
  <br /><br />
  <br /><br />
  Data We Collect:
  <ul>
    <li>Account Information: When you create an account, we collect your name and email address to personalize your experience and provide account-related notifications.</li>
    <li>User-Generated Content: Any recipes, comments, or reviews you create and share on Dish Discovery are collected, as well as the information you choose to provide in your profile.</li>
    <li>Device and Usage Information: We automatically collect information about your device and how you interact with our website, including your IP address, browser type, and pages visited.</li>
  </ul>
  <br /><br />
  How We Use Your Data:
  <ul>
    <li>Personalization: We use your account information to personalize your experience, provide recommendations, and display user-generated content.</li>
    <li>Communication: We may send you notifications, updates, or promotional materials based on your preferences and interactions with our website.</li>
    <li>User-Generated Content: Content you create and share is visible to other users and can be used to enhance the community experience on Dish Discovery.</li>
  </ul>
  <br /><br />
  Data Security:
  <ul>
    <li>Encryption: We use industry-standard encryption methods to protect data during transmission and storage.</li>
    <li>Access Controls: Access to your personal information is limited to authorized personnel only, and we regularly review and update access controls.</li>
    <li>Data Retention: We retain your data for as long as necessary to provide our services, and you can delete your account or request data removal.</li>
  </ul>
  <br /><br />
  Data Sharing:
  <ul>
    <li>With Other Users: Your user-generated content, such as recipes and comments, is visible to other users.</li>
    <li>With Service Providers: We may share your data with third-party service providers that assist us in delivering our services.</li>
    <li>Legal Compliance: We may disclose information when required by law or to protect our rights, privacy, safety, and property, or that of our users or the public.</li>
  </ul>
  <br /><br />
  Your Choices:
  <ul>
    <li>Account Settings: You can manage your account settings, communication preferences, and user-generated content at any time.</li>
    <li>Cookies: You can manage your cookie preferences by adjusting your browser settings.</li>
  </ul>
  <br /><br />
  Your Rights:
  <ul>
    <li>Access: You have the right to access and obtain a copy of your personal data.</li>
    <li>Rectification: You can correct inaccuracies in your personal information.</li>
    <li>Deletion: You can request the deletion of your account and associated data.</li>
  </ul>
  <br /><br />
  Contact Us:
  If you have any questions or concerns about this Privacy and Security Policy, please contact us.
  <br /><br />
  Updates:
  We may update this policy to reflect changes in our data practices or legal requirements. Please review it periodically for any updates.
  <br /><br />
  Thank you for being part of the Dish Discovery community, and trust that we are committed to providing a safe and enjoyable experience for all our users.
</p>
</div>
        </section>

        <section id="help-support" className={activeSection === 'help-support' ? 'visible' : 'hidden'}>
        <div className="content-box">
          <h2>Help & Support</h2>
          <p>
 
  At Dish Discovery, we're dedicated to providing the assistance and support you need to ensure a smooth and enjoyable experience with our platform. Whether you have questions, encounter issues, or simply want to learn more about how to make the most of our services, our Help and Support resources are here to guide you.
  <br /><br />

  Getting Started:
  <ol>
    <li>FAQs: Check out our Frequently Asked Questions (FAQs) for quick answers to common inquiries. You might find solutions to your questions right here.</li>
    <li>Tutorials: Explore our collection of step-by-step tutorials that cover various features and functionalities of Dish Discovery. These guides will help you navigate the platform with ease.</li>
    <li>Contact Us: If you can't find the answers you're looking for, feel free to reach out to our support team. You can contact us by [insert contact method].</li>
  </ol>
  <br /><br />

  Technical Support:
  <ul>
    <li>Contact Support: If you're experiencing technical difficulties or have encountered an error, don't hesitate to contact our technical support team. You can reach us at [insert contact information].</li>
    <li>Report a Bug: Found a bug or a technical glitch? Help us improve by reporting it through our dedicated bug reporting system. We appreciate your assistance in making Dish Discovery better.</li>
  </ul>
  <br /><br />

  Community Engagement:
  <ul>
    <li>User Forums: Join our user forums to engage with like-minded individuals, discuss cooking tips, share your culinary journey, and learn from others.</li>
    <li>Recipe Sharing: Share your favorite recipes and get feedback from the Dish Discovery community. Your culinary creations can inspire and help others on their food exploration.</li>
    <li>Support from Peers: Our community is here to support and guide you. If you have questions about recipes, ingredients, or cooking techniques, feel free to ask for assistance from experienced users.</li>
  </ul>
  <br /><br />

  Feedback and Suggestions:
  <ol>
    <li>Share Your Feedback: Let us know what you love about Dish Discovery and where you believe we can make it even better.</li>
    <li>Feature Requests: If there's a feature you'd like to see on our platform, tell us about it. We're always eager to explore new ideas.</li>
    <li>Report Issues: If you encounter issues, report them to our team, so we can address them promptly.</li>
  </ol>
  <br /><br />

  At Dish Discovery, we're committed to helping you find joy and inspiration in cooking. Our Help and Support resources are designed to assist you on your culinary journey. Whether you're an experienced chef or just starting, we're here to make your experience memorable.
</p>
</div>
 </section>

 <section id="logout" className={activeSection === 'logout' ? 'visible' : 'hidden'}>
          <div className="popUp">
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Log Out</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>Are you sure you want to log out?</p>
                </ModalBody>
                <ModalFooter>
                  <Button variant="link" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button colorScheme="red" onClick={handleLogout}>
                    Log Out
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </section>
    </div>
    </div>
    );
  };

export default SettingsPage;


