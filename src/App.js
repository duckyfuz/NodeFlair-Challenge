import React, { useEffect, useState } from "react";

import {
  ChakraProvider,
  Box,
  Text,
  theme,
  HStack,
  Skeleton,
  Card,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import data from "./test/data.json";
import JobCard from "./components/JobCard";

export const App = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [selectedJob, setSelectedJob] = useState("1");
  const [isLoading, setIsLoading] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth < 1010) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Mock time taken to fetch data
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <HStack
        justifyContent={"center"}
        alignItems={"flex-start"}
        backgroundColor={theme.colors.gray["100"]}
      >
        <Box backgroundColor={"red"} width={mobileView ? "100%" : ""}>
          {data.map((job) => (
            <JobCard
              key={job.ID}
              job={job}
              selectedJob={selectedJob}
              setSelectedJob={setSelectedJob}
              isLoading={isLoading}
              mobileView={mobileView}
              windowWidth={windowSize[0]}
            />
          ))}
        </Box>
        {!mobileView && (
          <>
            <Card w={675} />
            <Skeleton
              isLoaded={!isLoading}
              position={"fixed"}
              top={0}
              right={(window.innerWidth - 425 - 675 - 40) / 2}
              borderRadius={"lg"}
              h={window.innerHeight}
              w={675}
              // Add dynamic sizing if there's time
              // maxW={675}
              // minW={650}
            />
            {!isLoading && (
              <Card
                position={"fixed"}
                top={0}
                right={(window.innerWidth - 425 - 675 - 40) / 2}
                h={window.innerHeight}
                w={675}
                // Add dynamic sizing if there's time
                // maxW={675}
                // minW={650}
                backgroundColor={"white"}
                boxShadow="base"
                borderRadius={"lg"}
                borderColor={theme.colors.gray["300"]}
                borderWidth={1}
                p={4}
              >
                <Text align={"start"} as="b" fontSize="4xl">
                  {data.find((job) => job.ID === selectedJob)["Job Title"]}
                </Text>
              </Card>
            )}
          </>
        )}
      </HStack>
    </ChakraProvider>
  );
};
