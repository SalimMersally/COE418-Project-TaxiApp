import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Container,
  Text,
  InputGroup,
  InputRightElement,
  Grid,
  Input,
  Select,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

// Components
import Company from "./Company";

function CompaniesList() {
  const [search, setSearch] = useState("");
  const [companies, setCompanies] = useState([]);
  const [filterCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/companies").then((res) => {
      setCompanies(res.data);
      setFilteredCompanies(res.data);
    });
  }, []);

  useEffect(() => {
    setFilteredCompanies((prev) =>
      companies.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <Container maxW="container.lg" px="10" h="90vh" py="2">
      <Flex justifyContent="space-between" alignItems="center" py="2">
        <Text
          fontFamily="roboto"
          fontSize="3xl"
          fontWeight="700"
          textAlign="left"
        >
          Comapnies
        </Text>
        <Flex w="60%" justifyContent="flex-end">
          <Box w="30%" mr="2">
            <Select
              placeholder="-- None --"
              size="md"
              w="100%"
              bg="white"
              variant="outline"
              borderRadius="0"
              borderColor="yellow.400"
            >
              <option value="AZ">Ascending A-Z</option>
              <option value="ZA">Descending Z-A</option>
              <option value="HR">Highest Rating</option>
              <option value="LR">Lowest Rating</option>
            </Select>
          </Box>
          <Box w="40%">
            <InputGroup>
              <Input
                placeholder="Search For Company"
                size="md"
                w="100%"
                bg="white"
                variant="outline"
                borderRadius="0"
                borderColor="yellow.400"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <InputRightElement
                pointersEvents="none"
                children={<SearchIcon color="yellow.400" />}
              />
            </InputGroup>
          </Box>
        </Flex>
      </Flex>
      <hr className="info" my="2" />
      <Box overflowY="auto" h="85%" my="2">
        <Grid templateColumns="repeat(5, 1fr)">
          {filterCompanies.map((item) => (
            <Company
              name={item.name}
              rating={item.rating}
              mobileNB={item.mobileNB}
              email={item.email}
              description={item.description}
              key={item.companyID}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default CompaniesList;
