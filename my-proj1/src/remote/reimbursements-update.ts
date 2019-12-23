import { reimbursementUserClient } from "./reimbursements-clients/reimbursements-clients-users/reimbursement-user-client";




export async function updateReimbursement(reimbursementId: number, author: number,amount:number, dateSubmitted: number, dateResolved: number, description: string, status: number) {
    const updateFields = {
        reimbursementId,
            author,
            amount,
            dateSubmitted, 
            dateResolved, 
            description,
            status
    }
    try {
        let response = await reimbursementUserClient.patch('/reimbursements', updateFields)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}