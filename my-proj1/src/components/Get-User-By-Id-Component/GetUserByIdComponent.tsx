import { User } from "../../models/user"
import React, { SyntheticEvent } from "react"
import { Form, FormGroup, Label, Input, Button, Table } from "reactstrap"

interface IUserByIdComponentProps {
    user: User
    fUserById: (userId: number) => void
}

export class UserByIdComponent extends React.Component<IUserByIdComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            userId: 0
        }
    }
    updateId = (e: any) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }
    submitUserId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.fUserById(this.state.userId)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitUserId} className='{classes.form}' noValidate>
                    <FormGroup>
                        <Label for="userId">User ID</Label>
                        <Input type="text" name="userId" id="userId" value={this.state.userId} onChange={this.updateId} autoFocus />
                    </FormGroup>
                    <Button type="submit" variant="contained" color="primary" className='{classes.submit}'>
                        Get User
                    </Button>
                </Form>

                <Table hover>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.user.userId}</td>
                            <td>{this.props.user.username}</td>
                            <td>{this.props.user.firstName}</td>
                            <td>{this.props.user.lastName}</td>
                            <td>{this.props.user.email}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}