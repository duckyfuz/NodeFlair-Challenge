import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import {
  Text,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  HStack,
  VStack,
  Image,
  theme,
  Icon,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import { MdLocationOn, MdMoreHoriz } from "react-icons/md";

import { formatTimeAgo } from "../helpers/utils";

const TypeCard = ({ type }: any) => {
  return (
    <Card px={2} py={1} boxShadow="0" backgroundColor={theme.colors.green[100]}>
      <Text as="b" color={theme.colors.green[600]}>
        {type}
      </Text>
    </Card>
  );
};

const TechCard = ({ skill }: any) => {
  return (
    <Card px={2} py={1} boxShadow="0" backgroundColor={theme.colors.gray[100]}>
      <Text as="b" color={theme.colors.gray[600]} w={"100%"}>
        {skill}
      </Text>
    </Card>
  );
};

const JobCard = ({ job, selectedJob, setSelectedJob, isLoading }: any) => {
  const [displayNo, setDisplayNo] = useState([0, false]);

  useEffect(() => {
    if (job["Tech Stacks"]) {
      let displayNo: [number, boolean] = [0, false];
      let charCount: number = 0;
      // Not sure how it's actally implemented on NodeFlair, I opted to limit the number of characters - could have errors if there are multiple 'short' items eg c#, thus added a fixed cost per item
      while (charCount <= 30) {
        charCount += job["Tech Stacks"][0].length + 5;
        displayNo[0] += 1;
      }
      if (charCount > 30) {
        displayNo[0] -= 1;
        displayNo[1] = true;
      }
      console.log(charCount);
      setDisplayNo(displayNo);
    }
  }, [job]);

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
      style={{
        ...springProps,
        margin: "8px",
        borderRadius: "0.5rem",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Skeleton isLoaded={!isLoading} borderRadius={"lg"}>
        <Card
          w={425}
          px={5}
          key={job["Job Title"]}
          borderRadius={"lg"}
          borderColor={
            selectedJob === job.ID
              ? theme.colors.green["400"]
              : theme.colors.gray["300"]
          }
          borderWidth={selectedJob === job.ID ? 3 : 0.5}
          onClick={jobClickHandler}
        >
          <CardBody p={0}>
            <HStack
              justifyContent={"space-between"}
              align={"start"}
              marginTop={4}
              marginBottom={2}
            >
              <HStack align={"start"}>
                <Image src={job["Logo"]} boxSize="50px" borderRadius={5} />
                <VStack align={"start"} gap={0}>
                  <HStack gap={0}>
                    <Text fontSize="sm" mr={3} noOfLines={1}>
                      {job["Company Name"]}
                    </Text>
                    {job["Rating"] && (
                      <>
                        <Text fontSize="sm" mr={1}>
                          {job["Rating"]}
                        </Text>
                        <StarIcon />
                      </>
                    )}
                  </HStack>
                  <Text as="b" noOfLines={2}>
                    {job["Job Title"]}
                  </Text>
                  <HStack justify={"start"} gap={0}>
                    <Text
                      mr={2}
                      as="b"
                      fontSize="sm"
                      color={theme.colors.green[500]}
                    >
                      {formatTimeAgo(job["Created Date"])}
                    </Text>
                    <Icon as={MdLocationOn} />
                    <Text noOfLines={1} minW={5} fontSize="sm">
                      {job["Location"]}
                    </Text>
                  </HStack>
                  {job["Pay Range"] && (
                    <HStack>
                      <Text as="b" fontSize="sm">
                        {job["Pay Range"]}
                      </Text>
                      <Card
                        px={2}
                        py={1}
                        boxShadow="0"
                        backgroundColor={theme.colors.gray[100]}
                      >
                        <Text color={theme.colors.gray[700]} fontSize="sm">
                          EST
                        </Text>
                      </Card>
                    </HStack>
                  )}
                </VStack>
              </HStack>
              <Stack>
                <TypeCard type={job["Type"]} />
              </Stack>
            </HStack>
          </CardBody>
          <Divider />
          <CardFooter m={0} py={2} px={0}>
            <HStack gap={1} minH={8}>
              {job["Tech Stacks"] &&
                job["Tech Stacks"]
                  .slice(0, displayNo[0])
                  .map((tech: any) => <TechCard key={tech} skill={tech} />)}
              {displayNo[1] && <Icon as={MdMoreHoriz} />}
            </HStack>
          </CardFooter>
        </Card>
      </Skeleton>
    </animated.div>
  );
};

export default JobCard;
