import { reduxForm } from 'redux-form';
import '../../../App.css';
import { updateUser } from '../../../actions/userActions';
import { connect } from 'react-redux';
import EditUserFormGenerator from './EditUserFormGenerator'

const EditUserForm = reduxForm({
    form: 'EditUserForm',
    enableReinitialize: true
})(EditUserFormGenerator);

function mapStateToProps(state) {
    return {
        initialValues: {
            id: state.editUser.id,
            firstName: state.editUser.firstName,
            lastName: state.editUser.lastName,
            email: state.editUser.email,
            phoneNo: state.editUser.phoneNo
        }
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {
        edit: (user) => dispatch(updateUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);