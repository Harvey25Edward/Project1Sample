import { Role } from "../models/role"
import { reimbursementUpdateUser } from "../remote/reimbursements-clients/reimbursements-user-update"

export const userupdateTypes = {
    INVALID_UPDATE: 'INVALID_CREDENTIALS',
    SUCCESSFUL_UPDATE: 'USER_UPDATE_SUCCESSFUL',
    UNSUCCESSFUL_LOGIN: 'USER_UPDATE_FAILED'
}
export const userUpdate = (userId:number, username:string, password:string, firstname:string, lastname:string, email:string, roles:Role[]) => async (dispatch:any) => {

    try{
        let res = await reimbursementUpdateUser(userId,username, password, firstname, lastname, email, roles)
        //a successful login
        if(res.status === 200){
            //this is how do it when we have async operations
            dispatch({
                type:userupdateTypes.SUCCESSFUL_UPDATE,
                payload:{
                    user:res.body
                }
            })
        }else{
            dispatch({
                type:userupdateTypes.INVALID_UPDATE
            })
        }
    }catch(e){
        dispatch({
            type:userupdateTypes.UNSUCCESSFUL_LOGIN
        })
    }
    
}