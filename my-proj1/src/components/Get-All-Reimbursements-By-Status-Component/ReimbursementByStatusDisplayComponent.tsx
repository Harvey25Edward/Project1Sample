import { Table } from "reactstrap";
import React from "react";
import { Reimbursement } from "../../models/reimbursement";
import { RouteComponentProps, Redirect } from "react-router";
import { ReimbursementByStatusDisplayRowComponent } from "./reimbursement-by-status-display-row/ReimbursementByStatusDisplayRowComponent";
import { getReimbursementByStatus } from "../../remote/reimbursements-clients/reimbursements-by-status";

interface IReimbursementDisplayProps extends RouteComponentProps{
    reimbursement:Reimbursement
}

interface IReimbursementsDisplayState{
    allReimbursements: Reimbursement[]
}

export class ReimbursementsByStatusDisplayComponent extends React.Component<any, IReimbursementsDisplayState>{
    //is in charge of holding all the gardens
    //it thens creates a gardendisplayrow component for each of those gardens
    //and renders them inside a table
    constructor(props: any) {
        super(props)
        this.state = {
            allReimbursements: []
        }
    }

    async componentDidMount() {
        try {
            let r = await getReimbursementByStatus(this.props.user.userId)
            if (r.status === 200) {
                this.setState({
                    ...this.state,
                    allReimbursements: r.body
                })
            }
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        let rows = this.state.allReimbursements.map((e) => {
            return <ReimbursementByStatusDisplayRowComponent reimbursement={e} key={'reimbursement' + e.reimbursementId } />
        })
        return (
            
                <div>
                    <Table bordered color='danger'>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Author</td>
                                <td>Amount</td>
                                <td>Date Submitted</td>
                                <td>Description</td>
                                <td>Status</td>
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