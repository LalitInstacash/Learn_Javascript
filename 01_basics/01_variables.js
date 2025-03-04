const accountId = 233445;
var accountEmail = "lalit@gmail.com";
var accountPassword = "123456";
accountCity = "Jaipur";

//accountId = 2323; // Not allowed

accountEmail = "lg@gmail.com";
accountPassword = "232323";
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.group(accountId, accountEmail, accountPassword, accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity]);