import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { Reimbursement } from "../models/reimbursement";
import { reimbursementReducer } from "./reimbursement-reducer";

export interface IState{
    login:ILoginState,
    reimb:IReimbursment
}


export interface ILoginState {
    user:User
}


export const state = combineReducers<IState>({
    login:loginReducer,
    reimb:reimbursementReducer
})

export interface IState{
    reimb:IReimbursment

}


export interface IReimbursment {
    reimbursement:Reimbursement[]
}


// export const rstate = combineReducers<IRState>({
//     reimb:reimbursementReducer
// })


