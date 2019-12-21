import { Reimbursement } from "../../models/reimbursement"
import React from "react"

interface IReimbursementStateState {
    reimbursement: Reimbursement
}


export class ReimbursementStateComponent extends React.Component<any, IReimbursementStateState>{
    constructor(props: any) {
        super(props)
        this.state = {
            reimbursement: new Reimbursement(0, 0,0, 0, 0,"", 0,0,0)
        }
    }

    updateRequestedReimbursement = (reimbursement: Reimbursement) => {
        this.setState({
            ...this.state,
            reimbursement
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