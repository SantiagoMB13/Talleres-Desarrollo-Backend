import { UserType } from "./user.model";

// Mock database
let users: UserType[] = [
  { id: 1, name: "Robin Restrepo", carrera: "Psicologia" }
];

// DECLARE ACTION FUNCTION
async function readUserAction(): Promise<UserType[]> {
  return users;
}

// Export function to add a user (for createUser functionality)
export function addUser(user: UserType): void {
  users.push(user);
}

// EXPORT ACTION FUNCTION
export default readUserAction;