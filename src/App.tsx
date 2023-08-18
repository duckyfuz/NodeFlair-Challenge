import React, { useEffect, useState } from "react";

import { ChakraProvider, Box, Text, theme, HStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import data from "./test/data.json";
import JobCard from "./components/JobCard";

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
            <JobCard job={job} />
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
          borderColor={theme.colors.gray["300"]}
          borderWidth={1}
        >
          <Text align={"center"}>Selected</Text>
        </Box>
      </HStack>
    </ChakraProvider>
  );
};
