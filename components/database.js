import AsyncStorage from "@react-native-async-storage/async-storage";
import { breeds, conditions, data } from "./dummy-data";

export default class Database {
  static async setup() {
    const init = await this.getItem("dataInit");
    if (!init) {
      this.setItem(conditions, "conditions");
      this.setItem(breeds, "breeds");
      this.setItem(data, "data");
      this.setItem(true, "dataInit");
    }
  }

  static async getItem(key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // read error
    }
  }

  static async getMultiple(keys) {
    try {
      const values = await AsyncStorage.multiGet(keys);
      return values != null ? JSON.parse(values) : null;
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

  static async multiSet(keyValuePairs) {
    try {
      const pairs = [[]];
      await keyValuePairs.array.forEach((element) => {
        const jsonValue = JSON.parse(element[1]);
        pairs.push([element[0], jsonValue]);
      });
      console.log(pairs);
      await AsyncStorage.multiSet(pairs);
    } catch (e) {
      //save error
    }
  }
}
