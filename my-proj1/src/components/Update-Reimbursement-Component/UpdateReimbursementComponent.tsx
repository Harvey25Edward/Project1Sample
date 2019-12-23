import React, { SyntheticEvent } from "react"
import { Form, Button, FormGroup, Label, Input } from "reactstrap"
import { updateReimbursement } from "../../remote/reimbursements-update"



export class UpdateReimbursementComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            reimbursementId:0,
            author: 0,
            amount: 0,
            dateSubmitted: 0,
            dateResolved: 0,
            description: '',
            status: 0,
        }
    }

    updateReimbID = (e: any) => {
        this.setState({
            ...this.state,
            reimbursementId: e.target.value
        })
    }

    updateReimbAuthor = (e: any) => {
        this.setState({
            ...this.state,
            author: e.target.value
        })
    }

    updateReimbAmount = (e: any) => {
        this.setState({
            ...this.state,
            amount: e.target.value
        })
    }

    updateReimbDateSub = (e: any) => {
        this.setState({
            ...this.state,
            dateSubmitted: e.target.value
        })
    }

    updateReimbDateRes = (e: any) => {
        this.setState({
            ...this.state,
            dateResolved: e.target.value
        })
    }

    updateReimbDesc = (e: any) => {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }

    updateReimbResolver = (e: any) => {
        this.setState({
            ...this.state,
            resolver: e.target.value
        })
    }

    updateReimbStatus = (e: any) => {
        this.setState({
            ...this.state,
            status: e.target.value
        })
    }
    

    submitUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let u = await updateReimbursement(this.state.reimbursementId, this.state.author, this.state.amount, this.state.dateSubmitted, this.state.dateResolved, this.state.description,this.state.status)
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                })
            } else {
                this.setState({
                    ...this.state,
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                <h2>Update Reimbursement</h2>
                <br/>
                <Form onSubmit={this.submitUpdate} className="updateComponent">
                    <FormGroup>
                        <Label for="ReimbursementId">User ID</Label>
                        <Input type="text" name="reimbursementId" id="reimbursementId" value={this.state.reimbursementId} onChange={this.updateReimbID} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input type="text" name="author" id="author" value={this.state.author} onChange={this.updateReimbAuthor} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="amount">Amount</Label>
                        <Input type="text" name="amount" id="amount" value={this.state.amount} onChange={this.updateReimbAmount} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dateSubmitted">DateSubmitted</Label>
                        <Input type="text" name="dateSubmitted" id="dateSubmitted" value={this.state.dateSubmitted} onChange={this.updateReimbDateSub} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dateResolved">DateResolved</Label>
                        <Input type="text" name="dateResolved" id="dateResolved" value={this.state.dateResolved} onChange={this.updateReimbDateRes} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description" value={this.state.description} onChange={this.updateReimbDesc} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="status">Status</Label>
                        <Input type="text" name="status" id="status" value={this.state.status} onChange={this.updateReimbStatus} />
                    </FormGroup>
                    <br />
                    <Button type="submit"  variant="contained" color="primary" >
                        Update
                    </Button>
                </Form>
                <br />
            </div>
        )
    }
}