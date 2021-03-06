import React from "react";
import { Image, Flex } from "@chakra-ui/react";

// Components
import Services from "./Services";
import Feedback from "./Feedback";
import Companies from "./Companies";
import FeedbackForm from "./FeedbackForm";
import LogInUP from "./LogInUP";

// Images
import img from "./../../assets/driver.jpg";

function Home() {
  return (
    <Flex direction="column">
      <Image src={img} w="100%" />
      <Services />
      <Companies />
      <Feedback />
      <FeedbackForm />
      <LogInUP />
    </Flex>
  );
}

export default Home;
