import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Nombre: {
    type: String,
    required: [true, "El nombre es necesario"],
  },
  Apellido: {
    type: String,
    required: [true, "El apellido es necesario"],
  },
  Telefono: {
    type: String,
    required: [true, "El número es necesario"],
    unique: true,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
