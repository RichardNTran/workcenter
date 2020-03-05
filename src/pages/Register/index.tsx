import React from 'react';
import { withFormik, Field, FormikProps } from 'formik';

import { InputField, SelectField } from '../../components/Fields';
import { Text } from '../../components/styles';

import { JOB_OPTIONS } from './constants';
import registerFormValidation from './registerFormValidation';

import * as Style from './styles';

interface RegisterFormValue {
  job: String,
  email: String,
  password: String,
  confirmPassword: String,
  name: String,
};

interface IRegisterPageProps {};

const RegisterForm = (props: IRegisterPageProps & FormikProps<RegisterFormValue>) => {
  const {
    handleSubmit,
  } = props;
  return (
    <Style.RegisterContainer>
      <div className="container bg-white rounded-lg shadow pt-3">
        <div className="d-flex flex-column justify-content-center align-items-center mb-4">
          <Text
            className="mt-4 text-info"
            fontSize="42px"
            lineHeight="56px"
            width="550px"
            center
          >
            Apply to Join our Network of Top Freelancers
          </Text>
          <Text className="mt-4" width="900px" center>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vel cupiditate quibusdam ullam exercitationem sunt, voluptas a voluptatem veritatis soluta explicabo cumque provident ut enim quisquam nam molestiae. Esse, dolorem.
          </Text>
        </div>
        <div className="row border-top">
          <div className="col-md-8 border-right">
            <form className="p-4" onSubmit={handleSubmit}>
              <Field
                type="select"
                name="job"
                options={JOB_OPTIONS}
                placeholder="I am a freelance..."
                component={SelectField}
              />
              <Field
                type="text"
                name="email"
                placeholder="Email"
                component={InputField}
              />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                component={InputField}
              />
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Password confirmation"
                component={InputField}
              />
              <Field
                type="text"
                name="name"
                placeholder="Your full name"
                component={InputField}
              />
              <div className="form-group form-check">
                <input type="checkbox" name="policy" className="form-check-input" />
                <Text className="form-check-label">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos placeat repudiandae natus dolorum in perferendis neque accusamus. Similique saepe aliquid doloribus ut impedit suscipit ducimus tempore animi earum accusantium.</Text>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary"
                >
                  Join Toptal
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </Style.RegisterContainer>
  );
};

const RegisterPage = withFormik<IRegisterPageProps, RegisterFormValue>({
  validationSchema: registerFormValidation,
  mapPropsToValues: () => ({
    job: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  }),
  handleSubmit: (values: RegisterFormValue) => {
    alert(JSON.stringify(values));
  },
})(RegisterForm);

export default RegisterPage;
