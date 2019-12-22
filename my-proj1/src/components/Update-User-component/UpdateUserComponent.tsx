import React, { SyntheticEvent } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { User } from "../../models/user";
import { getUserById } from "../../remote/reimbursements-clients/reimbursements-user";

interface IUpdateUserComponentProps{
     user:User
    userUpdate:(u:string,p:string,f:string,l:string,em:string)=>void
}
export class UpdateUserComponent extends React.Component<IUpdateUserComponentProps,any>{
    constructor(props:any) {
        super(props)
        this.state = {
            user: new User(0,'','','','','',[]),
            userId:0,
            username:'',
            password:'',
            firstname:'',
            lastname:'',
            email:'',
            roles:[]
        }
    }

    async componentDidMount() {
        try {
            let u = await getUserById(this.props.user.userId)
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    user: u.body
                })
                
            }
        } catch (e) {
            console.log(e);
        }
    }


        updateID=async (e:any)=>{
e.presist()
try{
    let u = await getUserById(e.target.value)
     if (u.status===200){
         this.setState({
             ...this.state,
             
         })
         
     }
}catch(e){
    console.log(e)
}
        }

   

    updateUsername = (e:any)=>{
        this.setState({
            ...this.state,
            username:e.target.value
        })
    }
    updatePassword = (e:any)=>{
        this.setState({
            ...this.state,
            password:e.target.value
        })
    }
    
    updateFirstname = (e:any)=>{
        this.setState({
            ...this.state,
            firstname:e.target.value
        })
    }
    updateLastname = (e:any)=>{
        this.setState({
            ...this.state,
            lastname:e.target.value
        })
    }
    updateEmail = (e:any)=>{
        this.setState({
            ...this.state,
            email:e.target.value
        })
    }
   
    submitUpdate = async (e:SyntheticEvent) => {
        e.preventDefault()
        this.props.userUpdate(this.state.username, this.state.password, this.state.updateFirstname, this.state.updateLastname, this.state.updateEmail)
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.submitUpdate}>
                
                     <FormGroup>
                        <Label for="exampleUsername">Username</Label>
                        <Input value={this.state.username} onChange={this.updateUsername} type="text" name="username" id="exampleUsername" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input value={this.state.password} onChange={this.updatePassword} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                   
                    <FormGroup>
                        <Label for="Firstname">Firstname</Label>
                        <Input value={this.state.firstname} onChange={this.updateFirstname} type="text" name="firstname" id="Firstname" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleUsername">Lastnsme</Label>
                        <Input value={this.state.lastname} onChange={this.updateLastname} type="text" name="lastname" id="Lastname" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleUsername">Email</Label>
                        <Input value={this.state.email} onChange={this.updateEmail} type="text" name="email" id="Email" placeholder="with a placeholder" />
                    </FormGroup>
                    <Button color='danger'>Submit</Button>
                </Form>
            </div>
        )
    }
}
