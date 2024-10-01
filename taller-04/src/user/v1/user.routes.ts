import { Router, Request, Response } from "express";
import { readUsers, getUsersByHobby, checkUserExists, getTeamExperience, getUsersByFaction, createUser } from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
  const users = await readUsers();
  response.status(200).json({
    //message: "Success.",
    users: users,
  });
}

async function GetUsersByHobby(request: Request, response: Response) {
  const hobby = request.query.hobby as string;
  const users = await getUsersByHobby(hobby);
  response.status(200).json({
    //message: "Success.",
    users: users,
  });
}

async function CheckUserExists(request: Request, response: Response) {
  const id = parseInt(request.query.id as string);
  const exists = await checkUserExists(id);
  response.status(200).json({
    //message: "Success.",
    exists: exists,
  });
}

async function GetTeamExperience(request: Request, response: Response) {
  const team = (request.query.team as string);
  const experience = await getTeamExperience(team);
  response.status(200).json({
    //message: "Success.",
    totalExperience: experience,
  });
}

async function GetUsersByFaction(request: Request, response: Response) {
  const faction = request.query.faction as string;
  const users = await getUsersByFaction(faction);
  response.status(200).json({
    //message: "Success.",
    users: users,
  });
}

async function CreateUser(request: Request, response: Response) {
  const newUser = request.body;
  const createdUser = await createUser(newUser);
  response.status(201).json({
    message: "User created successfully.",
    user: createdUser,
  });
}

// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
userRoutes.get("/hobby", GetUsersByHobby);
userRoutes.get("/exists", CheckUserExists);
userRoutes.get("/team-experience", GetTeamExperience);
userRoutes.get("/by-faction", GetUsersByFaction);
userRoutes.post("/", CreateUser);

// EXPORT ROUTES
export default userRoutes;