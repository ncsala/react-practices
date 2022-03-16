export function createUser(userInformation) {
  return { type: "CREATE_USER", payload: userInformation };
}
