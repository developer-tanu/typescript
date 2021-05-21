"use strict";
// let userType:unknown;
// let userType:any;
// let userName:string;
// userType="Max";
// userType=5;
// userName=userType
function passError(message, errorcode) {
    throw { message: message, error: errorcode };
}
passError("An error occured", 500);
