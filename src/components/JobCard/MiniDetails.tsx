import React from "react";
import {
    Card,
    HStack,
    Icon,
    Image,
    Stack,
    Text,
    VStack,
    theme,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";

import { formatTimeAgo } from "../../helpers/utils";
import { TypeCard } from "./Cards";

const MiniDetails = ({ job }: any) => {
  return (
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
            <Text mr={2} as="b" fontSize="sm" color={theme.colors.green[500]}>
              {formatTimeAgo(job["Created Date"])}
            </Text>
            <Icon as={MdLocationOn} color={theme.colors.gray[600]} />
            <Text
              noOfLines={1}
              minW={5}
              fontSize="sm"
              color={theme.colors.gray[600]}
            >
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
  );
};

export default MiniDetails;
