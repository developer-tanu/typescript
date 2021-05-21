enum Role {ADMIN ="ADMIN",READ_ONLY=2,AUTHOR="AUTHOR"};
const person=
{
    name:'tanu',
    age:21,
    hobbies:['developing','surfing'],
    role:Role.ADMIN
};
// person.role.push("admin");
// person.role[1]=10;
// person.role=[0,'admin'];
let favouritetActivity :string[];
favouritetActivity = ['developing'];

console.log(person); 
for(const hobby of person.hobbies)
{
    console.log(hobby.toUpperCase());
}
if(person.role === Role.ADMIN)
{
    console.log('is admin');
}