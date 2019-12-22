import { connect } from "react-redux"
import { UserByIdComponent } from "./GetUserByIdComponent"
import { IState } from "../../reducers"
import { fUserById } from "../../action-mappers/user-by-id-acton-mapper"

const mapStateToProps = (state: IState) => {
    return {
        user: state.userById.user
    }
}

const mapDispatchtoProps = {
    fUserById
}

export default connect(mapStateToProps, mapDispatchtoProps)(UserByIdComponent)