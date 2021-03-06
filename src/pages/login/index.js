import Login from './view'
import { connect } from 'react-redux'
import { loginUser, logOut } from '../../actions/login'

const mapStateToProps = state => ({
    user: state.login.user,
    loading: state.login.loading,
    error: state.login.error
})

const mapDistapatchToProps = dispatch => ({
    login: (user) => { dispatch(loginUser(user)) },
    logout: () => { dispatch(logOut()) }
})

export default connect(mapStateToProps, mapDistapatchToProps)(Login)
