import React from "react";
import { Container, Text, Box } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Components
import Company from "./Company";

function Companies() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <Company name="company name 1" rating={4.3} />,
    <Company name="company name 2" rating={4.1} />,
    <Company name="company name 3" rating={4.9} />,
    <Company name="company name 4" rating={4.8} />,
    <Company name="company name 5" rating={3.2} />,
    <Company name="company name 6" rating={4} />,
    <Company name="company name 7" rating={4.2} />,
    <Company name="company name 8" rating={3.7} />,
    <Company name="company name 9" rating={2.5} />,
    <Company name="company name 10" rating={2} />,
  ];

  return (
    <>
      <Box py="4">
        <Container maxW="container.lg">
          <Text
            color="yellow.400"
            fontSize="2xl"
            fontFamily="roboto"
            fontWeight="900"
          >
            SOME OF OUR
          </Text>
          <Text
            color="gray.900"
            fontSize="4xl"
            fontFamily="roboto"
            fontWeight="900"
          >
            TOP COMPANIES
          </Text>
        </Container>
      </Box>
      <Box py="6">
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={1500}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          mouseTracking
          disableButtonsControls
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </Box>
    </>
  );
}

export default Companies;
