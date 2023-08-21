import React, { useEffect, useState } from "react";

import { ChakraProvider, Box, extendTheme, HStack } from "@chakra-ui/react";

import data from "./test/data.json";
import JobCard from "./components/JobCard";
import { DetailsCard } from "./components/DetailsCard";
import { nodeColors } from "./helpers/nodeColors";

const theme = extendTheme({
  colors: {
    green: {
      100: "#010605",
      back: "rgba(228, 247, 233)",
      char: "rgba(114, 198, 111)",
    },
  },
});

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
      if (window.innerWidth < 675 + 425 + 8) {
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
      <HStack
        justifyContent={"center"}
        alignItems={"flex-start"}
        backgroundColor={nodeColors.backgroundGrey}
      >
        {/* Display jobs list with dynamic width */}
        <Box width={mobileView ? "100%" : ""}>
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
        {/* Display details only if !mobileView */}
        {!mobileView && (
          <DetailsCard
            isLoading={isLoading}
            data={data}
            selectedJob={selectedJob}
          />
        )}
      </HStack>
    </ChakraProvider>
  );
};
