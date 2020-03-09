import React from 'react';
import { withFormik, Field, FormikProps } from 'formik';
import { Form, Button } from 'antd';

import history from 'src/config/history';

import { InputField, SelectField, CheckboxField } from '../../components/Fields';
import { Text } from '../../components/styles';

import { ProfilePath } from 'src/constants/routerConstants';
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
            className="mt-4 text-primary"
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
            <Form className="p-4">
              <Field
                type="select"
                name="job"
                options={JOB_OPTIONS}
                placeholder="I am a freelance..."
                component={SelectField}
                size="large"
              />
              <Field
                type="text"
                name="email"
                placeholder="Email"
                component={InputField}
                size="large"
              />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                component={InputField}
                size="large"
              />
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Password confirmation"
                component={InputField}
                size="large"
              />
              <Field
                type="text"
                name="name"
                placeholder="Your full name"
                component={InputField}
                size="large"
              />
              <Field
                label="I acknowledge that the Toptal screening process is confidential and that I will not publicly disclose details about this process. By submitting you acknowledge that you have read and agree to our Terms and Conditions, Privacy Policy, and Cookie Policy."
                name="policy"
                value="policy"
                component={CheckboxField}
                size="large"
              />
              <div className="d-flex justify-content-end">
                <Button
                  htmlType="button"
                  type="primary"
                  size="large"
                  onClick={() => handleSubmit()}
                >
                  Join Toptal
                </Button>
              </div>
            </Form>
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
    console.log('Log: values', values);
    history.push(ProfilePath);
  },
})(RegisterForm);

export default RegisterPage;
