import AsyncStorage from "@react-native-async-storage/async-storage";
import { array } from "prop-types";
import { SocialIcon } from "react-native-elements/dist/social/SocialIcon";
import { users, breeds, conditions, data } from "./dummy-data";

export default class Database {
  static async setup() {
    this.setItem(users, "users");
    this.setItem(conditions, "conditions");
    this.setItem(breeds, "breeds");
    this.initData();
  }

  static async initData() {
    const init = await this.getItem("dataInit");
    if (!init) {
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

  static async getUser(uname, pwd) {
    try {
      let success = false;
      await AsyncStorage.getItem("users").then((data) => {
        let array = JSON.parse(data);
        for (let i = 0; i < array.length; i++) {
          const user = array[i];
          if (user.username == uname && user.password == pwd) {
            success = true;
          }
        }
      });

      return success;
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

    if (await this.isDebug()) {
      console.log("Set key: " + key + " with value: " + value);
    }
  }

  static async isDebug() {
    return await this.getItem("debug");
  }

  static async removeItem(key) {
    const debug = await this.isDebug();

    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // remove error
      if (debug) {
        console.log("Error removing key: " + key);
      }
    }

    if (await this.isDebug()) {
      console.log("Removed key: " + key);
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

  static async clearData() {
    try {
      await this.removeItem("data");
      await this.removeItem("dataInit");
      await this.initData();
    } catch (e) {
      // clear error
      if (await this.isDebug()) {
        console.log("Error clearing data");
      }
    }
  }
}
