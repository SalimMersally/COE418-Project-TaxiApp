import React from "react";
import { Container, Text, Box, Flex } from "@chakra-ui/react";

function Feedback() {
  const feedback1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada non ex ac euismod. Cras suscipit viverra tortor ac volutpat. Fusce vel sem facilisis, viverra nunc at, sodales neque. Integer elementum elit nisi, quis condimentum sem luctus pretium. Aenean vitae est commodo nibh ornare aliquet. Aliquam ex erat, vestibulum eu consequat eget, feugiat a augue. Mauris vestibulum dictum tincidunt. Quisque ac nulla felis.";
  const feedback2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elitquis pharetra est pharetra. Aliquam nisl nisl, pellentesque hendrerit orci luctus, volutpat auctor mi. Donec at lorem odio. Nunc feugiat augue sit amet feugiat vehicula. Phasellus eleifend diam at erat accumsan, et condimentum tellus eleifend. Mauris tincidunt mauris non dolor malesuada, sit amet lacinia sem sollicitudin. Nunc mattis lorem non congue venenatis. Donec in vestibulum ex, non rhoncus libero. Morbi quam nisl, venenatis suscipit lorem quis, auctor consectetur ante. Nullam ligula lectus, congue id eros vitae, rhoncus varius urna.";
  const name1 = "FIRSTNAME LASTNAME";
  const name2 = "FIRSTNAME LASTNAME";

  return (
    <Box bg="gray.300" py="4">
      <Container maxW="container.xl">
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
          USER FEEDBACKS
        </Text>
        <Flex w="100%" justifyContent="space-around" my="10">
          <Flex flexDirection="column" w="40%">
            <Flex
              w="100%"
              minHeight="60vh"
              justifyContent="center"
              alignItems="center"
              position="relative"
              bg="gray.400"
            >
              <Text fontFamily="roboto" fontWeight="400" fontSize="md" w="80%">
                {feedback1}
              </Text>
            </Flex>
            <Text
              fontFamily="roboto"
              fontSize="xl"
              fontWeight="700"
              color="black"
              textAlign="left"
              my="8"
            >
              {name1}
            </Text>
          </Flex>
          <Flex flexDirection="column" w="40%">
            <Text
              fontFamily="roboto"
              fontSize="xl"
              fontWeight="700"
              color="black"
              textAlign="right"
              my="8"
            >
              {name2}
            </Text>
            <Flex
              w="100%"
              minHeight="60vh"
              justifyContent="center"
              alignItems="center"
              position="relative"
              bg="gray.400"
            >
              <Text fontFamily="roboto" fontWeight="400" fontSize="md" w="80%">
                {feedback2}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Feedback;
