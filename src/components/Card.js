import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  
  return (
    <VStack
      borderWidth="10px"
      borderRadius="lg"
      borderColor="white"
      overflow="hidden"
      boxShadow="md"
      p={0}
      spacing={4}
      align="start"
      w="100%"
      background="white"

    >
      <Image
        src={imageSrc}
        alt={title}
        boxSize="100%"
        objectFit="cover"
        borderTopRadius="lg"
        borderBottomRadius="lg"
      />

      <VStack align="start" spacing={2} w="100%">
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>
        <Text color="gray">{description}</Text>
      </VStack>

      <HStack w="100%">
        <Text color="black">Read more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
      </HStack>
    </VStack>
  );
};

export default Card;