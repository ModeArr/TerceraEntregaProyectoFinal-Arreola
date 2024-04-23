import mongoose from "mongoose";
import { PERSISTENCE, MONGO_URL, DB_NAME } from "../config/config.js";

export let Products
export let Carts
export let Messages
export let Users
const MONGO_URL = MONGO_URL;
switch (PERSISTENCE) {
  case "MONGO":
    mongoose
      .connect(MONGO_URL, {
        dbName: DB_NAME,
      })
      .then((conn) => {
        console.log("CONNECTED TO MONGODB")
      })
      .catch((err) => {
        console.log("ERROR CONNECTING TO DB", err);
      });
    const { default: ProductServiceDao } = await import(
      "./mongo/product.service.js"
    );
    Products = ProductServiceDao;
    break;
  case "MEMORY":
    // TODO: Cargar el dao en memoria con await dynamic import
    console.log("LOAD MEMORY SERVICE***");
    const { default: ProductMemServiceDao } = await import(
      "./memory/product.service.js"
    );
    Products = ProductMemServiceDao;
    break;
}