import { Card, Text } from "@chakra-ui/react";
import { nodeColors } from "../../helpers/nodeColors";

const TypeCard = ({ type }: any) => {
  return (
    <Card
      px={2}
      py={1}
      boxShadow="0"
      backgroundColor={nodeColors.backgroundGreen}
    >
      <Text as="b" color={nodeColors.green}>
        {type}
      </Text>
    </Card>
  );
};

const TechCard = ({ skill }: any) => {
  return (
    <Card
      px={2}
      py={1}
      boxShadow="0"
      backgroundColor={nodeColors.backgroundGrey}
    >
      <Text as="b" color={nodeColors.grey} w={"100%"}>
        {skill}
      </Text>
    </Card>
  );
};

export { TypeCard, TechCard };
