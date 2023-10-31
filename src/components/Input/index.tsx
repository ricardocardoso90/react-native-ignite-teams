import { Container } from "./styles";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  playerValue: string;
  setUserValue: () => void;
}

export function Input({ setUserValue, playerValue, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container
      {...rest}
      value={playerValue}
      onChangeText={setUserValue}
      placeholderTextColor={COLORS.GRAY_300}
    />
  )
}