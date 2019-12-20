import React from 'react'
import { Table } from 'reactstrap'
import { RouteComponentProps, Redirect } from 'react-router'
import { User } from '../../models/user'
import { UserDisplayRowComponent } from './user-display-row/UserDisplayRowComponent'
import { getAllUsers } from '../../remote/reimbursements-clients/reimbursements-user'


interface IUserDisplayProps extends RouteComponentProps{
    user:User
}

interface IUsersDisplayState{
    allUsers: User[]
}

export class UsersDisplayComponent extends React.Component<any, IUsersDisplayState>{
    //is in charge of holding all the gardens
    //it thens creates a gardendisplayrow component for each of those gardens
    //and renders them inside a table
    constructor(props: any) {
        super(props)
        this.state = {
            allUsers: []
        }
    }

    async componentDidMount() {
        try {
            let u = await getAllUsers()
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    allUsers: u.body
                })
            }
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        let rows = this.state.allUsers.map((e) => {
            return <UserDisplayRowComponent user={e} key={'user' + e.userId} />
        })
        return (
            this.props.user.userId?
                <div>
                    <Table bordered color='danger'>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Username</td>
                                <td>FirstName</td>
                                <td>LastName</td>
                                <td>Email</td>
                                <td>Roles</td>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </div>
                :
                //history object is from react router
                //it keeps track of everywhere you have been
                //you can use push to go to a new location or pop to go backwards one
                //this.props.history.push('/login')
                
                // when this component is rendered, it takes you back to the path
                 <Redirect to='/login/'/>
        )
    }
}