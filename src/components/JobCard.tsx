import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  theme,
  Skeleton,
  Box,
} from "@chakra-ui/react";

import MiniDetails from "./JobCard/MiniDetails";
import TechStack from "./JobCard/TechStack";

import "./JobCard.css";
import { nodeColors } from "../helpers/nodeColors";

const JobCard = ({
  job,
  selectedJob,
  setSelectedJob,
  isLoading,
  mobileView,
  windowWidth,
}: any) => {
  const [displayNo, setDisplayNo] = useState([0, false]);

  useEffect(() => {
    if (job["Tech Stacks"]) {
      let displayNo: [number, boolean] = [0, false];
      let charCount: number = 0;
      let restriction = mobileView ? windowWidth : 425;
      while (
        charCount <= restriction &&
        displayNo[0] < job["Tech Stacks"].length
      ) {
        charCount += job["Tech Stacks"][displayNo[0]].length * 12 + 20;
        displayNo[0] += 1;
      }
      if (charCount > restriction) {
        displayNo[0] -= 1;
        displayNo[1] = true;
      }
      setDisplayNo(displayNo);
    }
  }, [job, windowWidth]);

  const [springProps, api] = useSpring(() => ({
    y: 0,
    boxShadow: "0px 0px 0px 0px #E2E8F0",
  }));

  const handleMouseEnter = () => {
    api.start({
      y: -4,
      boxShadow: "2px 3px 4px 3px #E2E8F0",
    });
  };

  const handleMouseLeave = () => {
    api.start({
      y: 0,
      boxShadow: "0px 0px 0px 0px #E2E8F0",
    });
  };

  const jobClickHandler = () => {
    if (selectedJob === job.ID) {
      return;
    }
    console.log(job.ID);
    setSelectedJob(job.ID);
  };

  return (
    <animated.div
      className="disable-text-selection"
      style={{
        ...springProps,
        margin: "10px",
        borderRadius: "0.5rem",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Skeleton isLoaded={!isLoading} borderRadius={"lg"}>
        <Card
          w={mobileView ? "100%" : 425}
          px={6}
          py={1}
          key={job["Job Title"]}
          borderRadius={"lg"}
          borderColor={theme.colors.gray["300"]}
          borderWidth={selectedJob === job.ID ? 0 : 0.5}
          outline={
            selectedJob === job.ID ? `3px solid ${nodeColors.green}` : ""
          }
          onClick={jobClickHandler}
        >
          <CardBody p={0}>
            <MiniDetails job={job} />
          </CardBody>
          <Box px={2}>
            <Divider color={nodeColors.backgroundGrey} />
          </Box>
          <CardFooter m={0} py={2} px={0}>
            <TechStack stacks={job["Tech Stacks"]} displayNo={displayNo} />
          </CardFooter>
        </Card>
      </Skeleton>
    </animated.div>
  );
};

export default JobCard;
