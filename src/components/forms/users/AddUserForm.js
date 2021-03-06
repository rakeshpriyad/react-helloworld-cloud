//import { Field, reduxForm, SubmissionError} from 'redux-form';
import { reduxForm} from 'redux-form';
import { addUser } from '../../../actions/userActions';
import { connect } from 'react-redux';
import AddUserFormGenerator from './AddUserFormGenerator'

const AddUserForm = reduxForm({
    form: 'AddUserForm',
})(AddUserFormGenerator);


export const mapDispatchToProps = (dispatch) => {
    return {
        save: (user) => dispatch(addUser(user))
    }
}

export default connect(null, mapDispatchToProps)(AddUserForm);