// let userType:unknown;
// let userType:any;
// let userName:string;

// userType="Max";
// userType=5;
// userName=userType

function passError(message:string,errorcode:number)
{
    throw { message:message,error:errorcode };
}
passError("An error occured",500);