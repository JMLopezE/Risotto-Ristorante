import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Conexion exitosa");
  } catch (e) {
    console.log(e);
  }
};
export default connectDatabase;
