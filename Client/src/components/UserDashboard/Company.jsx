import React from "react";
import {
  GridItem,
  Image,
  Flex,
  Text,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

// Images
import companyLogo from "./../../assets/companyLogo.jpeg";
import star from "./../../assets/star.png";

function Company(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GridItem>
      <Box as="button" onClick={onOpen}>
        <Container maxW="container.xl" py="3">
          <Flex direction="column" justifyContent="center">
            <Flex justifyContent="center" py="1">
              <Image src={companyLogo} borderRadius="full" w="20" />
            </Flex>
            <Text
              fontFamily="roboto"
              fontWeight="700"
              fontSize="md"
              color="black"
              py="1"
            >
              {props.name}
            </Text>
            <Flex justifyContent="center" alignItems="center">
              <Image src={star} w="4" h="4" />
              <Text
                fontFamily="roboto"
                fontWeight="700"
                fontSize="md"
                color="black"
                lineHeight="1"
                px="2"
                pt="1"
              >
                {props.rating}
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="gray.900">
          <ModalHeader>
            <Text
              fontSize="2xl"
              fontFamily="roboto"
              color="white"
              fontWeight="700"
            >
              Company Information
            </Text>
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody>
            <Flex w="100%">
              <Flex w="30%" direction="column" alignContent="center">
                <Image src={companyLogo} w="40" borderRadius="full" pb="2" />
                <Flex justifyContent="center" alignItems="center" w="100%">
                  <Image src={star} w="6" h="6" />
                  <Text
                    fontFamily="roboto"
                    fontWeight="700"
                    fontSize="lg"
                    color="black"
                    lineHeight="1"
                    px="2"
                    pt="1"
                  >
                    {props.rating}
                  </Text>
                </Flex>
              </Flex>
              <Flex direction="column" w="70%">
                <Flex>
                  <Text
                    fontSize="lg"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="700"
                  >
                    Company Name: &nbsp;
                  </Text>
                  <Text
                    fontSize="md"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="400"
                  >
                    {props.name}
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    fontSize="lg"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="700"
                  >
                    Number of Drivers: &nbsp;
                  </Text>
                  <Text
                    fontSize="md"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="400"
                  >
                    10
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    fontSize="lg"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="700"
                  >
                    Number of Cars: &nbsp;
                  </Text>
                  <Text
                    fontSize="md"
                    fontFamily="roboto"
                    color="white"
                    fontWeight="400"
                  >
                    15
                  </Text>
                </Flex>

                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="white"
                  fontWeight="700"
                >
                  Description: &nbsp;
                </Text>
                <Text
                  fontSize="md"
                  fontFamily="roboto"
                  color="white"
                  fontWeight="400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ac consectetur ligula. Morbi suscipit, enim eu feugiat
                  dapibus, risus risus fermentum nisi, quis convallis dui ante
                  ac felis. Ut nec mattis sapien, eu porta sem. Nunc leo mi,
                  rutrum quis urna id, pellentesque pellentesque nisi. Nullam
                  tincidunt magna id dapibus congue. In at eros viverra,
                  accumsan urna nec, posuere turpis. Nunc sed felis pulvinar,
                  hendrerit diam luctus, vulputate purus. Ut sed risus vitae
                  ipsum volutpat placerat.
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </GridItem>
  );
}

export default Company;
