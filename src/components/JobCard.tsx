import React from "react";

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
import { formatTimeAgo } from "../helpers/utils";
import { StarIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";

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
  return (
    <Card
      w={425}
      m={2}
      px={5}
      key={job["Job Title"]}
      boxShadow="xs"
      borderColor={theme.colors.gray["300"]}
      borderWidth={1}
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
              <HStack gap={0}>
                <Text
                  mr={3}
                  as="b"
                  fontSize="sm"
                  color={theme.colors.green[500]}
                >
                  {formatTimeAgo(job["Created Date"])}
                </Text>
                <Icon mr={0.5} as={MdLocationOn} />
                <Text fontSize="sm">{job["Location"]}</Text>
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
        <HStack gap={1}>
          {job["Tech Stacks"] &&
            job["Tech Stacks"].map((tech: any) => (
              <TechCard key={tech} skill={tech} />
            ))}
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
