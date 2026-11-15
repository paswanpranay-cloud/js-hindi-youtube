const accountId = 989035
let accountEmail = "paswanpranay@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"  //This is also allowed
let accountState; // if only declared and no value inserted then js assumes it as (undefined)

// accountId = 2   // const cannot be changed

accountEmail = "pranay@gmail.com"
accountPassword = "82107"
accounCity = "Greater-Noida" 

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// const -> constant
// varibles -> let,var we don"t use var due to scope problem. initially days, javascript was not working on blockscope

/*
Prefer not to use var because in scope in block scope and functional scope
*/