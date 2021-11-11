import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  static async loginUser(uname, pwd) {
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

  static async getUser(uname) {
    try {
      let user;
      await AsyncStorage.getItem("users").then((data) => {
        let array = JSON.parse(data);
        for (let i = 0; i < array.length; i++) {
          const dbUser = array[i];
          if (dbUser.username == uname) {
            user = dbUser;
          }
        }
      });

      return user;
    } catch (e) {
      // read error
    }
  }

  static async registerUser(username, email, password, address, phone) {
    // Check if the username is taken
    const taken = await this.getUser(username);

    // Handle a taken username
    // Maybe use email in the future instead?
    if (taken) return alert("Error", "That username is already in use.");

    // Construct a new user object
    // We should encrupt the user's password
    const user = {
      username,
      email,
      password,
      phone,
      location: address,
      saved: [],
    };

    // Push the new user object
    users.push(user);

    try {
      // Use AsyncStorage to update the user data stored in the users array
      await AsyncStorage.setItem("users", JSON.stringify(users));

      // Check if the user was added
      const exists = await this.getUser(username);

      // Unknown error
      if (typeof exists !== "object")
        Alert.alert("Error", "Unable to register your PetHub account.");

      // Registered, false is handled by the alerts
      // Not optimal
      return true;
    } catch (error) {
      // Alert the error message caught
      alert(error.message);
    }
  }

  static async setSaved(id, username) {
    try {
      const users = await this.getItem("users");
      users.forEach((element) => {
        if (element.username == username) {
          element.saved = [...element.saved, id];
          this.setItem(users, "users");
        }
      });
    } catch (e) {
      // error
    }
  }

  static async removeSaved(id, username) {
    console.log("removing " + id + " : " + username);
    try {
      const users = await this.getItem("users");
      users.forEach((element) => {
        if (element.username == username) {
          const index = element.saved.indexOf(id);
          element.saved.splice(index, 1);
          this.setItem(users, "users");
        }
      });
    } catch (e) {
      // error
    }
  }

  static async getSaved(username) {
    let saved = [];
    try {
      await this.getItem("users").then((data) => {
        data.forEach((element) => {
          if (element.username == username) {
            saved = element.saved;
          }
        });
      });
    } catch (e) {
      // error
    }
    return saved;
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

  static async getID() {
    try {
      const data = await this.getItem("data");
      return data.length;
    } catch (e) {
      // error
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
