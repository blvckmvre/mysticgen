import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import SwitchBlock from "./SwitchBlock";

interface CharSettingsProps {
  allowLetters: boolean;
  setAllowLetters: Dispatch<SetStateAction<boolean>>;
  allowSymbols: boolean;
  setAllowSymbols: Dispatch<SetStateAction<boolean>>;
}

const CharSettings: FC<CharSettingsProps> = (props) => {
  return (
    <Flex direction="column" gap="10">
      <Heading color="orange.300">Preferences</Heading>
      <SimpleGrid columns={2} spacing={10} alignItems="center">
        <SwitchBlock
          switchId="letters"
          title="Allow letters"
          value={props.allowLetters}
          changeHandler={props.setAllowLetters}
        />
        <SwitchBlock
          switchId="symbols"
          title="Allow special symbols"
          value={props.allowSymbols}
          changeHandler={props.setAllowSymbols}
        />
      </SimpleGrid>
    </Flex>
  );
};

export default CharSettings;
