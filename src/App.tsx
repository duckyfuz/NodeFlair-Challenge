import React, { useEffect, useState } from "react";

import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  GridItem,
  theme,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Divider,
  HStack,
  Container,
  VStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import styled from "styled-components";

import data from "./test/data.json";

// const StickyGrid = styled(GridItem)`
//   position: sticky;
//   top: 0;
// `;

export const App = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <HStack
        justifyContent={"center"}
        alignItems={"flex-start"}
        backgroundColor={"#F5F5F5"}
      >
        <Box>
          {data.map((job) => (
            <Card
              w={425}
              m={2}
              key={job["Job Title"]}
              boxShadow="base"
              borderColor={"grey"}
              borderWidth={1}
            >
              <CardBody>
                <HStack justifyContent={"space-between"}>
                  <VStack align={"start"}>
                    <HStack>
                      <Text>{job["Company Name"]}</Text>
                      <Text>{job["Rating"]}</Text>
                    </HStack>
                    <Text>{job["Job Title"]}</Text>
                    <HStack>
                      <Text>{job["Created Date"]}</Text>
                      <Text>{job["Location"]}</Text>
                    </HStack>
                    <Text>{job["Pay Range"]}</Text>
                  </VStack>
                  <Stack align={"end"}>
                    <Text backgroundColor={"red"}>{job["Type"]}</Text>
                  </Stack>
                </HStack>
              </CardBody>
              <Divider />
              <CardFooter>
                <HStack>
                  {job["Tech Stacks"] &&
                    job["Tech Stacks"].map((tech) => (
                      <Text key={tech}>{tech}</Text>
                    ))}
                </HStack>
              </CardFooter>
            </Card>
          ))}
        </Box>
        <Box w={675}></Box>
        <Box
          position={"fixed"}
          top={0}
          right={(window.innerWidth - 425 - 675 - 40) / 2}
          h={window.innerHeight}
          // Add dynamic sizing if there's time
          // maxW={675}
          // minW={650}
          w={675}
          backgroundColor={"white"}
          boxShadow="base"
          borderColor={"grey"}
          borderWidth={1}
        >
          <Text align={"center"}>Selected</Text>
        </Box>
      </HStack>
    </ChakraProvider>
  );
};
