import React from "react";
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
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";

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
      <Text as="b" color={theme.colors.gray[600]}>
        {skill}
      </Text>
    </Card>
  );
};

const JobCard = ({ job }: any) => {
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
      <Card
        w={425}
        px={5}
        key={job["Job Title"]}
        borderRadius={"lg"}
        borderColor={theme.colors.gray["300"]}
        borderWidth={0.5}
      >
        <CardBody p={0}>
          <HStack justifyContent={"space-between"} align={"start"} my={5}>
            <HStack align={"start"}>
              <Image src={job["Logo"]} boxSize="50px" borderRadius={5} />
              <VStack align={"start"} gap={0}>
                <HStack gap={0}>
                  <Text fontSize="sm" mr={3}>
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
                <Text as="b">{job["Job Title"]}</Text>
                <HStack justify={"start"} gap={0}>
                  <Text
                    mr={3}
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
                <Text as="b" fontSize="sm">
                  {job["Pay Range"]}
                </Text>
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
              job["Tech Stacks"].map((tech: any) => (
                <TechCard key={tech} skill={tech} />
              ))}
          </HStack>
        </CardFooter>
      </Card>
    </animated.div>
  );
};

export default JobCard;
