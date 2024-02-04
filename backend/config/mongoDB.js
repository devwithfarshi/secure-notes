import mongoose from "mongoose";

export const mongoDB_connect = (uri) => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log(`MongoDB connected successfully`.bgGreen.white.bold);
    })
    .catch((e) => console.log(`mongoDB connect error -> ${e}`.bgRed));
};
