import { reimbursementUserClient } from "./reimbursement-user-client";



export const getReimbursementById= async (id:number) => {
    try{
        let response = await reimbursementUserClient.get('/reimbursements/author/userId/' + id)
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