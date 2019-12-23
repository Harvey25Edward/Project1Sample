import { IState } from "../../reducers"
import { connect } from "react-redux"
import {reimbursementID} from "../../action-mappers/reimbursement-by-user-action-mapper"
import { RembursementByUserDisplayComponent } from "./ReimbursementByUserComponent"

const mapStateToProps = (state:IState) => {
    return {
        reimbursement:state.Reimbs.reimbursement
    }
}
const mapDispatchToProps ={
    reimbursementID
}

export default connect(mapStateToProps,mapDispatchToProps)(RembursementByUserDisplayComponent)
