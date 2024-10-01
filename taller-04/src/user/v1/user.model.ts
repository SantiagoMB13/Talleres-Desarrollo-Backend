import { model, Schema } from "mongoose";

// DECLARE MODEL TYPE
type UserType = {
  id: number;
  name: string;
  carrera?: string;
  hobbies?: string[];
  faction?: string;
  years?: number;
  team?: string;
};

// DECLARE MONGOOSE SCHEMA
const UserSchema = new Schema<UserType>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  carrera: { type: String },
  hobbies: { type: [String] },
  faction: { type: String },
  years: { type: Number },
  team: { type: String }
});

// DECLARE MONGO MODEL
const UserModel = model<UserType>("User", UserSchema);

// EXPORT ALL
export { UserModel, UserSchema, UserType };