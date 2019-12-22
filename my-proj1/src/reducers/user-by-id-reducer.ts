import { IUserState } from "."
import { Role } from "../models/role"
import { User } from "../models/user"
import { fUserByIdType } from "../action-mappers/user-by-id-acton-mapper"

const initialState: IUserState = {
    user: new User(0, '', '', '', '', '',[ new Role(0, '')])
}

export const userByIdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case fUserByIdType.USER_BY_ID_SUCCESSFUL: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default:
            return state
    }
}