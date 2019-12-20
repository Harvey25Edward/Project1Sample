import { connect } from "react-redux"
import { ReimbursementsByStatusDisplayComponent } from "./ReimbursementByStatusDisplayComponent"
import { IState } from "../../reducers"
import {reimbursementID} from "../../action-mappers/reimbursement-action-mapper"
const mapStateToProps = (state:IState, ownProps:any) => {
    return {
        user:state.login.user,
        history:ownProps.history,
        match:ownProps.match,
        location:ownProps.location
    }
}
    const mapDispatchtoProps = {
    reimbursementID
    }


export default connect(mapStateToProps,mapDispatchtoProps)(ReimbursementsByStatusDisplayComponent)