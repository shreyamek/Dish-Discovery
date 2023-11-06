import React, { useState } from 'react';
import './settings-page.css';

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('account-info');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`settings-page ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar">
        <button className="collapse-button" onClick={handleToggleSidebar}>
          {sidebarCollapsed ? '►' : '◄'}
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
          <br></br>

          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => handleSectionClick('about')}
            >

              About
            </a>
          </li>
          <br></br>
          <li>
            <a
              href="#logout"
              className={activeSection === 'logout' ? 'active' : ''}
              onClick={() => handleSectionClick('logout')}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <section id="account-info" className={activeSection === 'account-info' ? 'visible' : 'hidden'}>
          <h2>Account Info</h2>
          <div className="profile-info">
  <div className="profile-icon">
    <img src="profile-image.jpg" alt="User Profile" />
  </div>
  <div className="user-details">
    <div className="detail">
      <p>Username: JohnDoe</p>
      <span className="change-icon">✏️</span>
    </div>
    <div className="detail">
      <p>Email: john.doe@example.com</p>
      <span className="change-icon">✏️</span>
    </div>
    <div className="detail">
      <p>Linked Social Media:</p>
    </div>
    <ul className="social-media-list">
      <li>
        <p>Twitter: @johndoe</p>
        <span className="change-icon">✏️</span>
      </li>
      <li>
        <p>Instagram: @johndoe_photos</p>
        <span className="change-icon">✏️</span>
      </li>
    </ul>
  </div>
</div>

        </section>

        <section id="privacy-security" className={activeSection === 'privacy-security' ? 'visible' : 'hidden'}>
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

        </section>

        <section id="help-support" className={activeSection === 'help-support' ? 'visible' : 'hidden'}>
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

        </section>


<section id="about" className={activeSection === 'about' ? 'visible' : 'hidden'}>
  <h2>About</h2>
  <p>
  About Dish Discovery
  Dish Discovery is a culinary haven that's tailored to everyday people who are passionate about embracing healthy eating while minimizing food waste. Our platform is dedicated to those who wish to explore the world of cooking with ease, without the stress of complicated recipes or the guilt of wasting ingredients. Let's dive deeper into what Dish Discovery is all about.
  <br /><br />

  Our Mission:
  <br />
  <ul>
    <li>At Dish Discovery, our mission is to make healthy eating accessible and effortless for everyone. We understand the challenges of busy lives and how food waste can negatively impact our environment. That's why we've created a unique and user-friendly platform to help you rediscover the joy of cooking and inspire healthier eating habits.</li>
  </ul>
  <br />

  The Ingredients of Dish Discovery:
  <ol>
    <li>User-Based Website Interface: Our website provides a seamless and intuitive user experience. Whether you're a seasoned chef or a novice in the kitchen, our interface is designed to accommodate your culinary skills. We offer a wide range of easy-to-follow recipes that empower you to create delicious and nutritious meals without the complexity.</li>
    <li>Server: Our server ensures that you have uninterrupted access to our vast collection of recipes, helpful content, and community interactions. It's the backbone that keeps our platform running smoothly.</li>
    <li>Dynamic Database: The heart of Dish Discovery is its dynamic database, containing a rich library of recipes, ingredients, and cooking tips. This database continuously adapts and grows, offering you a treasure trove of options to suit your culinary preferences.</li>
  </ol>
  <br />

  Our Purpose:
  <ol>
    <li>Effortless Recipes: Our platform offers a diverse selection of recipes that cater to various dietary preferences, skill levels, and cooking time constraints. Say goodbye to complicated dishes, and say hello to meals that are both nutritious and uncomplicated to prepare.</li>
    <li>Food Waste Reduction: We believe in the importance of reducing food waste. Dish Discovery not only helps you plan your meals effectively but also suggests recipes that utilize ingredients you already have. This proactive approach to cooking ensures that your groceries are used efficiently.</li>
    <li>Healthier Eating Habits: Eating well is the cornerstone of a healthy lifestyle. Dish Discovery promotes healthier eating habits by offering nutritious recipes and cooking tips. We encourage you to explore new ingredients and discover healthier alternatives.</li>
    <li>Time Savings: Our platform saves you valuable time by providing quick and easy recipes that fit into your busy schedule. No more endless hours in the kitchen – Dish Discovery enables you to prepare wholesome meals efficiently.</li>
  </ol>
  <br />

  The Positive Impact:
  <ol>
    <li>Reducing Food Waste: Every meal prepared through Dish Discovery is a step towards reducing food waste and minimizing your carbon footprint.</li>
    <li>Promoting Health: Your choice to cook and enjoy nutritious meals inspires healthier eating habits for yourself and your loved ones.</li>
    <li>Saving Time: The time you save with our convenient recipes can be spent on activities that matter most to you.</li>
  </ol>
  <br />

  Dish Discovery is more than just a culinary website; it's a lifestyle choice. We invite you to join our vibrant community of food enthusiasts who share your passion for healthy eating and reducing food waste. Together, we can transform everyday meals into memorable culinary experiences.
  <br /><br />

  Let's embark on a journey of discovery, where healthy eating, sustainability, and simplicity unite in the kitchen.
</p>

</section>

<section id="logout" className={activeSection === 'logout' ? 'visible' : 'hidden'}>
  <h2>Logout</h2>
  <p>Sign out of your account to protect your privacy and data.</p>
</section>

        </div>
      </div>
    );
  };

export default SettingsPage;


