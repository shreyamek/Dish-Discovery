import React from "react";
import { useState } from "react";
import background from "../BackgroundImage.png";
import RecipeCard from "../components/RecipeCard";
import Popular from "../components/Popular";
import { ChakraProvider } from "@chakra-ui/react";
import Search from "../components/Search";

import "./Home.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <div className="mainTitle"> Dish Discovery </div>
        <div className="sideText"> Make cooking hassle-free. </div> <br />
        <Search />
        <br /> <br />
      </div>
      <div className="heading1"> Popular Recipes </div>
      <div className="homefeed">
        <Popular />
      </div>
      <div className="heading1"> Frequently Asked Questions </div> <br /> <br />
      <div className="Accordion">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <div className="sectionTitle">What is Dish Discovery?</div>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {" "}
              <div className="textWithin">
                Dish Discovery is a website that serves as a user-friendly
                platform where individuals can find easy recipes by searching up
                ingredients, keywords, or cuisines.
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <div className="sectionTitle">How can I save recipes?</div>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {" "}
              <div className="textWithin">
                You can save recipes by selecting any recipe and bookmarking it,
                which it will then show up on your profile!
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <div className="sectionTitle">
                  Why it it useful to have an account?
                </div>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {" "}
              <div className="textWithin">
                Making an account ensures that your comments and recipes are
                saved. It also allows you to interact through the website more
                personally and lets you contribute to our recipe database as
                well.
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <div className="sectionTitle">
                  How can I add my own recipes?
                </div>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {" "}
              <div className="textWithin">
                Adding your own recipes is extremely simple! In the navigation
                bar, click 'Add Recipes' and fill in the information required.
                Your recipe will be then saved to our database and be recommend
                to other users!
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </ChakraProvider>
  );
}
