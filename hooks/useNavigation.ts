import { useNavigation as useOriginalNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useNavigation = useOriginalNavigation<
  NativeStackNavigationProp<{
    index: undefined;
    "qrcode-scanner": undefined;
    entidades: undefined;
    entidade: undefined;
    confirmacao: undefined;
  }>
>;
