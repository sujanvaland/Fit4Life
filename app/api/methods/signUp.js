import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export function signup(userdetail) {
  return Api(
      ApiConstants.SIGNUPPATH,
      {
        firstname: userdetail.firstname,
        lastname:userdetail.lastname,
        email: userdetail.email,
        login: userdetail.email,
        password: userdetail.password,
      },
      'post',
      null
  );
}