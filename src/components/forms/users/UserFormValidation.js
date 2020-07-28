import { SubmissionError} from 'redux-form';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const validateAndSubmit = ({id='', firstName='', lastName='', email='', phoneNo='' }, save, reset) => {
    return sleep(1000).then(() => {
      // simulate server latency
      let error = {};
      let isError = false;
      
      if(firstName.trim() === '') {
          error.firstName = 'First Name is mandatory field';
          isError = true;
      }
      if(lastName.trim() === '') {
          error.lastName = 'Last Name is mandatory field';
          isError = true;
      }
  
      
  
      if (email.trim() === '') {
          error.email = 'Email is mandatory field';
          isError = true;
      } 

      if (phoneNo.trim() === '') {
        error.email = 'Mobile# is mandatory field';
        isError = true;
    } 
      if (isError) {
          console.log(isError, 'Error '+error);
          throw new SubmissionError(error);
  
      } else {
          console.log(' isError', isError);
          save({id,firstName, lastName, email, phoneNo});
          console.log(`submiting Data:\n\n${JSON.stringify({id,firstName, lastName, email, phoneNo}, null, 2)}`)
         // reset();
      }
    })
  }

  export default validateAndSubmit