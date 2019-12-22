import { reimbursementUserClient } from "./reimbursements-clients-users/reimbursement-user-client";
import { Role } from "../../models/role";

export const reimbursementUpdateUser = async (userId:number,username:string, password:string, firstname:string, lastname:string, email:string, roles:Role[]) => {
    try{
        let response = await reimbursementUserClient.patch('/users/')
        if(response.status === 200){
            return{
                status:response.status,
                body:response.data
            }
        }else{
            return {
                status:response.status,
                body:undefined
            }
        }
    }catch(e){
        console.log(e);
        throw new Error('Something Went Wrong 1')
    }
}
