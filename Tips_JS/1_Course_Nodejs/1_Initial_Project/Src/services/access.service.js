"use strict";

const shopModel = require("../models/shop.mode");

//Middleware : bcrypt => encrypt password ; crypto => generate the pair of key
const bcrypt = require("bcrypt");
const crypto = require("crypto");

//roles of shop : shop - writer - editor
const RoleShop = {
  SHOP: "SHOP", //HERE WILL BE A CODE => HIDE SENSITIVE INFO
  WRITER: "WRITER",
  EDITOR: "EDITOR",
  ADMIN: "ADMIN",
};

class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      const holderShop = await shopModel.findOne({ email }).lean();

      //Check exist
      if (holderShop) {
        return {
          code: "xxx",
          message: "Shop already registered!!",
        };
      }

      //Encrypt Password
      const passwordHash = await bcrypt.hash(password, 10);

      //
      const newShop = await shopModel.create({
        name,
        email,
        password: passwordHash,
        roles: [RoleShop.SHOP],
      });

      //if creating is success => generate pair of key
      if (newShop) {
        const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
          modulusLength: 4096,
        });

        console.log({ privateKey, publicKey });
      }
    } catch (error) {
      return {
        code: "xxx",
        message: error.message,
        status: "error",
      };
    }
  };
}

module.exports = AccessService();
