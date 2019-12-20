import { connect } from "react-redux"
import { ReimbursementsByStatusDisplayComponent } from "./ReimbursementByStatusDisplayComponent"
import { IState } from "../../reducers"

const mapStateToProps = (state:IState, ownProps:any) => {
    return {
        user:state.login.user,
        history:ownProps.history,
        match:ownProps.match,
        location:ownProps.location
    }
}

export default connect(mapStateToProps)(ReimbursementsByStatusDisplayComponent)