import backgroundImage from "../BackgroundImage.png";
import React, { useState } from "react";
import { useRecipeContext } from "../pages/RecipeContext";

export const AddRecipes = () => {
  const { addRecipe } = useRecipeContext();
  const [recipeName, setRecipeName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instruction, setInstruction] = useState("");
  const [recipeImage, setRecipeImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const instructionInputStyle = {
    width: "85%",
    height: "20vh",
    resize: "none",
    fontSize: "20px",
    paddingLeft: "4px",
  };

  const inputStyle = {
    width: "20%",
    height: "2.2vh",
    marginLeft: "5px",
    fontSize: "20px",
    paddingLeft: "3px",
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#FFE1EE",
    padding: "0px",
    borderRadius: "0px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    width: "100vw",
    height: "100vh",
    color: "#000",
    position: "center",
  };

  const contentStyle = {
    maxWidth: "1000px",
    margin: "50px auto 0",
    padding: "15px",
    background: "#dbead2",
    borderRadius: "10px",
  };

  const headingStyle = {
    fontSize: "38px",
  };

  const paragraphStyle = {
    fontSize: "20px",
  };

  const handleRecipeNameChange = (e) => {
    setRecipeName(e.target.value);
  };

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleRecipeImageChange = (e) => {
    const file = e.target.files[0];
    setRecipeImage(file);
  };

  const handleAddIngredient = () => {
    if (ingredient.trim() !== "") {
      const capitalizedIngredient =
        ingredient.charAt(0).toUpperCase() + ingredient.slice(1);

      setIngredients([...ingredients, capitalizedIngredient]);
      setIngredient("");
    }
  };

  const handleInstructionChange = (e) => {
    setInstruction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !recipeName ||
      ingredients.length === 0 ||
      !instruction ||
      !recipeImage
    ) {
      setShowPopup(true);
      return;
    }

    const newRecipe = {
      recipeName,
      ingredients,
      instruction,
      recipeImage: URL.createObjectURL(recipeImage),
    };
    addRecipe(newRecipe);

    setRecipeName("");
    setIngredients([]);
    setInstruction("");
    setShowPopup(false);
    setSuccessPopup(true);

    document.getElementById("recipeImage").value = null;
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Add Your Recipe</h1>
        <p style={{ fontSize: "20px", lineHeight: "1.6" }}>
          Share your favorite recipe with the community! Fill out the form below
          to add your recipe to our collection.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="recipeName">Recipe Name:</label>
            <input
              style={inputStyle}
              type="text"
              id="recipeName"
              name="recipeName"
              value={recipeName}
              onChange={handleRecipeNameChange}
            />
          </div>
          <div
            style={{
              backgroundColor: "#dbead2",
              height: "2px",
              margin: "15px 0",
            }}
          ></div>
          <div>
            <label htmlFor="ingredients">Ingredients:</label>
            <input
              style={inputStyle}
              type="text"
              id="ingredient"
              name="ingredient"
              value={ingredient}
              onChange={handleIngredientChange}
            />
            <button
              style={{
                backgroundColor: "#5A5A5A",
                border: "1px solid grey",
                padding: "5px",
                color: "white",
                borderRadius: "5px",
                fontSize: "14px",
                marginLeft: "10px",
              }}
              type="button"
              onClick={handleAddIngredient}
            >
              ADD
            </button>
            <ul>
              {ingredients.map((ing, index) => (
                <li key={index} style={{ fontSize: "17px" }}>
                  {ing}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              backgroundColor: "#dbead2",
              height: "2px",
              margin: "1px 0",
            }}
          ></div>
          <div>
            <label htmlFor="instructions">Instructions:</label>
            <textarea
              style={instructionInputStyle}
              id="instructions"
              name="instructions"
              value={instruction}
              onChange={handleInstructionChange}
            />
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <label
              htmlFor="recipeImage"
              style={{
                display: "inline-block",
                marginBottom: "10px",
                marginLeft: "174px",
              }}
            >
              Recipe Image:
            </label>
            <input
              type="file"
              id="recipeImage"
              name="recipeImage"
              onChange={handleRecipeImageChange}
              style={{ display: "inline-block" }}
            />
          </div>
          <div
            style={{
              backgroundColor: "#dbead2",
              height: "2px",
              margin: "15px 0",
            }}
          ></div>
          <button
            style={{
              backgroundColor: "#5A5A5A",
              border: "1px solid grey",
              padding: "15px 30px",
              color: "white",
              borderRadius: "8px",
              fontSize: "19px",
              marginBottom: "50px",
            }}
            type="submit"
          >
            SUBMIT RECIPE
          </button>
        </form>

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
            <p>Please Fill in All Fields.</p>
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
            <p>Successfully Added to Your Recipes!</p>
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
      </div>
    </div>
  );
};
