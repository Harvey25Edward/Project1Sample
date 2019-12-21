import { connect } from "react-redux"
import { ReimbursementsByStatusDisplayComponent } from "./ReimbursementByStatusDisplayComponent"
import { IState } from "../../reducers"
import {reimbursementID} from "../../action-mappers/reimbursement-action-mapper"
const mapStateToProps = (state:IState) => {
    return {
        
        reimbursement:state.reimb.reimbursement
       
    }
}
    const mapDispatchtoProps = {
    reimbursementID
    }


export default connect(mapStateToProps,mapDispatchtoProps)(ReimbursementsByStatusDisplayComponent)