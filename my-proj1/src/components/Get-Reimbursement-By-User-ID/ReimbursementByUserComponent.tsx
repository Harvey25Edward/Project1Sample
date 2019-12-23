import { RouteComponentProps } from "react-router"
import { Reimbursement } from "../../models/reimbursement"
import React, { SyntheticEvent } from "react"
import { Form, FormGroup, Label, Input, Button, Table } from "reactstrap"
import { ReimbursementByUserDisplayRow } from "./Reimbursement-By-User-Row-Component/ReimbursementByUserRowComponent"





interface IRembursementByUserDisplayProps extends RouteComponentProps {
    reimbursement: Reimbursement[]
    reimbursementID: (id: number) => void

}


export class RembursementByUserDisplayComponent extends React.Component<IRembursementByUserDisplayProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            id: undefined
        }
    }
    
    updateId = (e: any) => {
        this.setState({
            ...this.state,
            id: e.target.value
        })
    }
    //submt button 
    submitId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.reimbursementID(this.state.id)
    }
    
    render() {
        let rows = this.props.reimbursement.map((e) => {
            return <ReimbursementByUserDisplayRow reimbursement={e} key={'reimbursement' + e.reimbursementId} />//mapping  through keys and value ,Reimbursement is the key and + e.reimbursementId is the value
        })
        return (

            <div className ="form">
                <Form onSubmit={this.submitId}>
                    <FormGroup>
                        <Label for="exampleID">ID</Label>
                        <Input value={this.state.id} onChange={this.updateId} type="number" name="ID" id="exampleID" placeholder="with a placeholder" />
                    </FormGroup>
                    <Button color='primary'>Submit</Button>
                </Form>
                <Table bordered color='danger'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Author</td>
                            <td>Amount</td>
                            <td>Date Submitted</td>
                            <td>Date Resolved</td>
                            <td>Description</td>
                            <td>Status</td>
                            <td>Resolver</td>
                            <td>Type</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </div>



        )
    }

}