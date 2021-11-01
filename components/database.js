import AsyncStorage from "@react-native-async-storage/async-storage";
import { breeds, conditions, homeData } from "./dummy-data";

export default class Database {
  static setup() {
    this.setItem(conditions, "conditions");
    this.setItem(breeds, "breeds");
    this.setItem(homeData, "home");
  }

  static async getItem(key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // read error
    }
  }

  static async setItem(value, key) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // save error
    }
  }
}
