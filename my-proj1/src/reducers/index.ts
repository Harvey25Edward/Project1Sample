import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";

export interface IState{
    login:ILoginState

}


export interface ILoginState {
    user:User
}


export const state = combineReducers<IState>({
    login:loginReducer
})
