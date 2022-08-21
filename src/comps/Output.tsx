import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

interface OutputProps {
  generatedPassword: string;
  generatePassword: () => void;
  hasCopied: boolean;
  onCopy: () => void;
}

const Output: FC<OutputProps> = (props) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      rounded="md"
      border="1px solid gray"
      pl="1"
      overflow="hidden"
    >
      <Text
        color="orange.400"
        fontSize="md"
        fontWeight="bold"
        textAlign="center"
      >
        {props.generatedPassword || "* output *"}
      </Text>
      <Button
        rounded="none"
        size="sm"
        onClick={props.onCopy}
        colorScheme="yellow"
        disabled={!props.generatedPassword}
      >
        {props.hasCopied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </Flex>
  );
};

export default Output;
