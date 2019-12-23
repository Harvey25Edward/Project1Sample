import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { Reimbursement } from "../models/reimbursement";
import { reimbursementReducer } from "./reimbursement-reducer";
import { userByIdReducer } from "./user-by-id-reducer";
import { reimbursementUserReducer } from "./reimbursement-by-user";


export interface ILoginState {
    user:User
}
export interface IUserState {
    user: User
}
export interface IReimbursment {
    reimbursement:Reimbursement[]
}
export interface IReimbursementUser{
    reimbursement: Reimbursement[]
}


export interface IState{
    login:ILoginState,
    reimb:IReimbursment,
    userById: IUserState,
    Reimbs:IReimbursementUser
    
}



 


export const state = combineReducers<IState>({
    login:loginReducer,
    reimb:reimbursementReducer,
     
    userById: userByIdReducer,
    Reimbs:reimbursementUserReducer
})











