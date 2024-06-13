import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Nombre: {
    type: String,
    required: [true, "El nombre es necesario"],
    unique: true,
  },
  Apellido: {
    type: String,
    required: [true, "El apellido es necesario"],
    unique: true,
  },
  Telefono: {
    type: String,
    required: [true, "El número es necesario"],
  },
  Cuidad: {
    type: String,
    required: [true, "la cuidad es requerida"],
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
