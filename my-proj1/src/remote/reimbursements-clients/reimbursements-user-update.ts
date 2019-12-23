import { reimbursementUserClient } from "./reimbursements-clients-users/reimbursement-user-client";


export async function updateUser(userId: number, username: string, password: string, firstName: string, lastName: string, email: string) {
    const updateFields = {
        userId,
        username,
        password,
        firstName,
        lastName,
        email,
    }
    try {
        let response = await reimbursementUserClient.patch('/users', updateFields)
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