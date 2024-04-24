import AsyncStorage from "@react-native-async-storage/async-storage";
import { THEME } from "./keys";

const StorageValue = async () => {
  let asyncData = await AsyncStorage.getItem(THEME);
  const themeColor = JSON.parse(asyncData[0][1]);
  return themeColor;
};

export { StorageValue };
