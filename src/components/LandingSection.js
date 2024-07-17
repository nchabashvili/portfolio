import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ProfilePic from "../images/pfp.jpg";

const greeting = "Hello, I am Nodar!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        size="2xl"
        name="Nodar"
        src={ProfilePic}
      />
      <h1>{greeting}</h1>
      <Heading as="h2">{bio1}</Heading>
      <Heading as="h2">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
