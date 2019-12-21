import { connect } from "react-redux"
import { ReimbursementsByStatusDisplayComponent } from "./ReimbursementByStatusDisplayComponent"
import { IRState } from "../../reducers"
import {reimbursementID} from "../../action-mappers/reimbursement-action-mapper"
const mapStateToProps = (state:IRState, ownProps:any) => {
    return {
        reimbursement:state.reimb,
        history:ownProps.history,
        match:ownProps.match,
        location:ownProps.location
    }
}
    const mapDispatchtoProps = {
    reimbursementID
    }


export default connect(mapStateToProps,mapDispatchtoProps)(ReimbursementsByStatusDisplayComponent)