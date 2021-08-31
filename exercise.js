/* ------------- findUserByUsername ------ */
// Write a function called findUserByUsername which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

function findUserByUserName(arrObj, username) {
  return arrObj.find(function (user) {
    return user.username === username;
  });
}

/* ------------- findUserByUsername ------ */
// Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array and return this object. If the object is not found, return undefined.

function removeUser(usersArr, username) {
  let foundIndex = usersArr.findIndex(function (user) {
    return user.username;
  });
  if (foundIndex === -1) return {};
  return usersArr.splice(foundIndex, 1)[0];
}
