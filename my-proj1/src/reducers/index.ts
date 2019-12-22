import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { Reimbursement } from "../models/reimbursement";
import { reimbursementReducer } from "./reimbursement-reducer";
import { userByIdReducer } from "./user-by-id-reducer";
// import { Role } from "../models/role";
// import { updateuserReducer } from "./update-user-reducer";
export interface ILoginState {
    user:User
}
export interface IUserState {
    user: User
}
export interface IReimbursment {
    reimbursement:Reimbursement[]
}



export interface IState{
    login:ILoginState,
    reimb:IReimbursment,
    userById: IUserState,
    // update:IUpdateUserState,
    
}



// export interface IUpdateUserState{
//     user:User,
//     userId:number
//     username:string,
//     password:string,
//     firstname:string,
//     lastname:string,
//     email:string,
//     roles:Role[]




// }


export const state = combineReducers<IState>({
    login:loginReducer,
    reimb:reimbursementReducer,
    // update:updateuserReducer,
    userById: userByIdReducer,
    
})











