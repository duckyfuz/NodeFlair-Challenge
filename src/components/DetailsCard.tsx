import React from "react";
import { Box, Card, Skeleton, Text, theme } from "@chakra-ui/react";

export const DetailsCard = ({ isLoading, data, selectedJob }: any) => {
  return (
    <Box>
      <Card w={675} />
      <Skeleton
        isLoaded={!isLoading}
        position={"fixed"}
        top={0}
        right={(window.innerWidth - 425 - 675 - 40) / 2}
        w={675}
        h={window.innerHeight}
        borderRadius={"lg"}
        m={2}
      />
      {!isLoading && (
        <Card
          position={"fixed"}
          top={0}
          right={(window.innerWidth - 425 - 675 - 40) / 2}
          w={675}
          h={window.innerHeight}
          borderRadius={"lg"}
          borderWidth={1}
          borderColor={theme.colors.gray["300"]}
          boxShadow="0"
          m={2}
          p={4}
        >
          <Text align={"start"} as="b" fontSize="4xl">
            {data.find((job: any) => job.ID === selectedJob)["Job Title"]}
          </Text>
        </Card>
      )}
    </Box>
  );
};
