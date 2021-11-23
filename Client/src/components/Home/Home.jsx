import React from "react";
import { Image, Flex } from "@chakra-ui/react";

//Components
import Services from "./Services";
import img from "./../../assets/driver.jpg";

function Home() {
  return (
    <Flex direction="column">
      <Image src={img} w="100%" />
      <Services />
    </Flex>
  );
}

export default Home;
