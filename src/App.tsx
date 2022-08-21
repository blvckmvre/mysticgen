import { Button, Flex, useClipboard } from "@chakra-ui/react";
import { FC, useState } from "react";
import CharSettings from "./comps/CharSettings";
import LengthSlider from "./comps/LengthSlider";
import Output from "./comps/Output";

const letters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 65)
);
letters.push(...letters.map((letter) => letter.toLowerCase()));
const numbers = Array.from({ length: 10 }, (_, i) => "" + i);
const symbols = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

const App: FC = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [allowLetters, setAllowLetters] = useState(false);
  const [allowSymbols, setAllowSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const { hasCopied, onCopy } = useClipboard(generatedPassword);

  function generatePassword() {
    if (generatedPassword) setGeneratedPassword("");
    const characters = [...numbers];
    if (allowLetters) characters.push(...letters);
    if (allowSymbols) characters.push(...symbols);
    for (let i = 0; i < passwordLength; i++) {
      let character = characters[Math.floor(Math.random() * characters.length)];
      setGeneratedPassword((p) => p + character);
    }
  }
  return (
    <Flex
      direction="column"
      gap="20"
      p="10"
      rounded="lg"
      border="1px"
      borderColor="orange.400"
      userSelect="none"
      bg="white"
    >
      <LengthSlider
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
      />
      <CharSettings
        allowLetters={allowLetters}
        setAllowLetters={setAllowLetters}
        allowSymbols={allowSymbols}
        setAllowSymbols={setAllowSymbols}
      />
      <Button colorScheme="orange" variant="solid" onClick={generatePassword}>
        Generate!
      </Button>
      <Output
        generatePassword={generatePassword}
        generatedPassword={generatedPassword}
        hasCopied={hasCopied}
        onCopy={onCopy}
      />
    </Flex>
  );
};

export default App;
