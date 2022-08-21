import {
  Flex,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import LengthSliderMarks from "./LengthSliderMarks";

interface LengthSliderProps {
  passwordLength: number;
  setPasswordLength: Dispatch<SetStateAction<number>>;
}

const LengthSlider: FC<LengthSliderProps> = ({
  passwordLength,
  setPasswordLength,
}) => {
  return (
    <Flex w={400} direction="column" gap="10" color="orange.300">
      <Heading>Length</Heading>
      <Slider
        defaultValue={passwordLength}
        min={4}
        max={32}
        onChange={(value) => setPasswordLength(value)}
        colorScheme="orange"
      >
        <LengthSliderMarks
          passwordLength={passwordLength}
          sliderMarks={[8, 12, 16, 20, 24, 28]}
        />
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb bg="orange.400" />
      </Slider>
    </Flex>
  );
};

export default LengthSlider;
