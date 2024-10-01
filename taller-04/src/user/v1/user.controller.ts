import readUserAction from "./read.user.action";
import { UserType } from "./user.model";

// DECLARE CONTROLLER FUNCTIONS
async function readUsers(): Promise<UserType[]> {
  const users = await readUserAction();
  return users;
}

async function getUsersByHobby(hobby: string): Promise<UserType[]> {
  const users = await readUserAction();
  return users.filter(user => user.hobbies?.includes(hobby));
}

async function checkUserExists(id: number): Promise<boolean> {
  const users = await readUserAction();
  return users.some(user => user.id === id);
}

async function getTeamExperience(team: string): Promise<number> {
  const users = await readUserAction();
  return users
    .filter(user => user.team === team)
    .reduce((total, user) => total + (user.years || 0), 0);
}

async function getUsersByFaction(faction: string): Promise<UserType[]> {
  const users = await readUserAction();
  return users.filter(user => user.faction === faction);
}

async function createUser(newUser: UserType): Promise<UserType> {
  const users = await readUserAction();
  const maxId = Math.max(...users.map(u => u.id));
  newUser.id = newUser.id? newUser.id : maxId + 1;
  users.push(newUser);
  return newUser;
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsers, getUsersByHobby, checkUserExists, getTeamExperience, getUsersByFaction, createUser };
