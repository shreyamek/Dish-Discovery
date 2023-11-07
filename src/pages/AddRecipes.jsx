import backgroundImage from '../BackgroundImage.png';
import React from 'react';


export const AddRecipes = () => {
 const containerStyle = {
   backgroundImage: `url(${backgroundImage})`,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   backgroundColor: '#FFE1EE', // Change the background color
   padding: '70px',
   borderRadius: '5px',
   boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
   width: '100vw',
   height: '100vh',
   color: '#000',
   position: 'relative',
 };


 const contentStyle = {
   maxWidth: '800px',
   margin: '20px auto 0',
   padding: '20px',
   background: '#dbead2',
   borderRadius: '5px',
 };


 const headingStyle = {
   fontSize: '34px',
 };


 const paragraphStyle = {
   fontSize: '20px',
 };


 return (
   <div style={containerStyle}>
     <div style={contentStyle}>
       <h1 style={headingStyle}>Add Your Recipe</h1>
       <p style={paragraphStyle}>
         Share your favorite recipe with the community! Fill out the form below to add your recipe to our collection.
       </p>
       <form>
         <div>
           <label htmlFor="recipeName">Recipe Name:</label>
           <input type="text" id="recipeName" name="recipeName" />
         </div>
         <div style={{ backgroundColor: '#dbead2', height: '2px', margin: '15px 0' }}></div>
         <div>
           <label htmlFor="ingredients">Ingredients:</label>
           <textarea id="ingredients" name="ingredients"></textarea>
         </div>
         <div style={{ backgroundColor: '#dbead2', height: '2px', margin: '15px 0' }}></div>
         <div>
           <label htmlFor="instructions">Instructions:</label>
           <textarea id="instructions" name="instructions"></textarea>
         </div>
         <div style={{ backgroundColor: '#dbead2', height: '2px', margin: '15px 0' }}></div>
         <button style={{ backgroundColor: '#5A5A5A', border: '1px solid grey', padding: '15px 30px', color: 'white', borderRadius: '8px', fontSize: '17px' }} type="submit">
           SUBMIT RECIPE
         </button>
       </form>
     </div>
   </div>
 );
}
