import { Flex, FormLabel, Switch } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";

interface SwitchBlockProps {
  switchId: string;
  title: string;
  changeHandler: Dispatch<SetStateAction<boolean>>;
  value: boolean;
}

const SwitchBlock: FC<SwitchBlockProps> = (props) => {
  return (
    <Flex direction="column">
      <FormLabel htmlFor={props.switchId} color="orange.400">
        {props.title}
      </FormLabel>
      <Switch
        colorScheme="orange"
        id={props.switchId}
        isChecked={props.value}
        onChange={() => props.changeHandler((p) => !p)}
      />
    </Flex>
  );
};

export default SwitchBlock;
