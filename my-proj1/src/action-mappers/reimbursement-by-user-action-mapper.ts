import { getReimbursementById } from "../remote/reimbursements-clients/reimbursements-clients-users/reimbursement-by-user"

export const ReimbUserTypes = {
    INVALID_CREDENTIALS: 'TOKEN_HAS_EXPIRED',
    SUCCESSFUL_REIMBURSEMENT: 'REIMBURSEMENT_FOUND',
    UNSUCCESSFUL_FAILED: 'REIMBURSEMENT_NOT_FOUND'
}
export const reimbursementID = (id:number) => async (dispatch:any) => {

    try{
        let res = await getReimbursementById(id)
        //a successful login
        if(res.status === 200){
            //this is how do it when we have async operations
            dispatch({
                type:ReimbUserTypes.SUCCESSFUL_REIMBURSEMENT,
                payload:{
                    reimbursement:res.body//payload is data which is comimg fron server (database)
                }
            })
        }else{
            dispatch({
                type:ReimbUserTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e){
        dispatch({
            type:ReimbUserTypes.UNSUCCESSFUL_FAILED
        })
    }
    
}