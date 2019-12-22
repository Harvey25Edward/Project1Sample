import React from "react"
import { Role } from "../../models/role"

interface IUserUpdateStateState {
    username:string
    password:string
    firstname:string
    lastname:string
    email:string
    roles:Role[]
}


export class UserLoginStateComponent extends React.Component<any, IUserUpdateStateState>{
    constructor(props: any) {
        super(props)
        this.state = {
            username:'',
            password:'',
            firstname:'',
            lastname:'',
            email:'',
            roles:[]

        }
    }

    updateUpdatedUser = (username: string,password:string,firstname:string,lastname:string,email:string,roles:Role[]) => {
        this.setState({
            ...this.state,
           username,
           password,
           firstname,
           lastname,
           email,
           roles
        })
    }

    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}