"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'tanu',
    age: 21,
    hobbies: ['developing', 'surfing'],
    role: Role.ADMIN
};
// person.role.push("admin");
// person.role[1]=10;
// person.role=[0,'admin'];
let favouritetActivity;
favouritetActivity = ['developing'];
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
