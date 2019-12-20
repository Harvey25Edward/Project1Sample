import { reimbursementUserClient } from "./reimbursements-clients-users/reimbursement-user-client";

export async function reimbursementLogin(username:string, password:string){
    //another example of the enhanced object literal
    //this object has a field called username with a value of the passed in username
    //and the same for password
    const credentials = {
        username,
        password
    }
    try{
        const response = await reimbursementUserClient.post('/login', credentials)
        if(response.status===200){
            return{
                status:response.status,
                body: response.data
            }
        }else{
            return{
                status:response.status,
                body:undefined
            }
        }
    }catch(e){
        console.log(e);
        throw new Error('Something Went Wrong')
    }
    
}
// hits get on /gardens to recieve all gardens
export const getAllUsers = async () => {
    try{
        let response = await reimbursementUserClient.get('/users')
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
        throw new Error('Something Went Wrong')
    }
}












// export async function userLogin(username: string, password: string) {
//     const credentials = {
//         username,
//         password
//     }
//     try {
//         const response = await fetch('http://localhost:7000/login', {
//             //this object is the config for our request
//             //we use it, to set headers and method and such
//             method: 'POST',
//             credentials: 'include',
//             body: JSON.stringify(credentials),
//             headers: {
//                 'content-type': 'application/json'
//             }
//         })
//         let test = await response.json()
//         localStorage.setItem('session',test)
//         console.log(test);
//         return response
//     } catch (e) {
//         console.log(e);

//     }
// }