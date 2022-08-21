import { SliderMark } from "@chakra-ui/react";
import { FC } from "react";

interface LengthSliderMarksProps {
  sliderMarks: number[];
  passwordLength: number;
}

const LengthSliderMarks: FC<LengthSliderMarksProps> = ({
  sliderMarks,
  passwordLength,
}) => {
  return (
    <>
      {sliderMarks.map((num) => (
        <SliderMark
          key={"m" + num}
          value={num}
          color="orange.500"
          ml="-20px"
          mt="2"
          w="10"
          textAlign="center"
        >
          {num}
        </SliderMark>
      ))}
      <SliderMark
        value={passwordLength}
        bg="orange.400"
        mt="-10"
        ml="-14px"
        w="7"
        rounded="md"
        textAlign="center"
        color="orange.100"
      >
        {passwordLength}
      </SliderMark>
    </>
  );
};

export default LengthSliderMarks;
