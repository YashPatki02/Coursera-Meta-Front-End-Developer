import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      style={{ backgroundColor: "white", color: "black", borderRadius: "20px", paddingBottom: "15px" }}
    >
      <Image src={imageSrc} alt={title} style={{ borderRadius: "20px" }} />
      <Heading
        size="md"
        style={{ textAlign: "start", margin: "10px 10px 0 10px" }}
      >
        {title}
      </Heading>
      <Text
        align="start"
        fontSize="sm"
        style={{ color: "gray", margin: "0 20px 0 20px" }}
      >
        {description}
      </Text>

      <HStack justifyContent="space-between" alignItems="center">
        <Text fontSize="sm">
          See More
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
