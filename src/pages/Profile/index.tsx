import React from 'react';
import { withFormik, Field, FormikProps } from 'formik';
import { Form, Button, Typography } from 'antd';

import history from 'src/config/history';

import {
  InputField,
  SelectField,
  TextAriaField,
  NumberField,
  ImageField,
  FileField,
} from '../../components/Fields';
import { Text } from '../../components/styles';

import { HomePath } from 'src/constants/routerConstants';

interface ProfileFormValue {
  photo: String,
  file: String,
  country: String,
  city: String,
  citizenship: String,
  legalName: String,
  skype: String,
  proficiency: String,
  primaryInterest: String,
  primaryYearsOfExperience: String,
  primarySkills: String,
  secondaryInterest: String,
  secondaryYearsOfExperience: String,
  secondarySkills: String,
  urlLinkedIn: String,
  urlGitHub: String,
  urlWebsite: String,
  yearsOfWorkExperience: String,
  lookCompany: String,
  typesOfProjects: String,
  amazingApplication: String,
};

interface IProfilePageProps { };

const ProfileForm = (props: IProfilePageProps & FormikProps<ProfileFormValue>) => {
  const {
    handleSubmit,
  } = props;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="m-4">
            <div className="mb-4">
              <Text hearderText xxxl>Hi — Tell Us About Yourself</Text>
              <Text>
                Toptal's screening team will evaluate your application based on the information you provide here. Note that once submitted, this information cannot be edited.
              </Text>
            </div>
            <Form {...formItemLayout}>
              <div className="mb-4 pb-4">
                <Field
                  label="Profile Photo"
                  type="file"
                  name="photo"
                  placeholder="No file selected"
                  component={ImageField}
                  isRequire
                  size="large"
                />
                <Field
                  label="Resume"
                  type="file"
                  name="resume"
                  placeholder="No file selected"
                  component={FileField}
                  isRequire
                  size="large"
                />
                <Form.Item className="m-0" label={
                  <>
                    <Typography.Text type="danger">*</Typography.Text>&nbsp;
                    Location
                  </>
                }>
                  <Field
                    type="select"
                    name="country"
                    options={[{
                      value: 'vietnam',
                      title: 'Viet Nam'
                    }]}
                    placeholder="Current country"
                    component={SelectField}
                    size="large"
                    style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                  />
                  <Field
                    type="text"
                    name="city"
                    placeholder="Please select country first"
                    component={InputField}
                    size="large"
                    style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}
                  />
                </Form.Item>
                <Form.Item className="m-0" label={
                  <>
                    <Typography.Text type="danger">*</Typography.Text>&nbsp;
                    Citizenship
                  </>
                }>
                  <Field
                    type="select"
                    name="citizenship"
                    options={[{
                      value: 'vietnam',
                      title: 'Viet Nam'
                    }]}
                    placeholder="Citizenship"
                    component={SelectField}
                    size="large"
                    style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                  />
                  <Field
                    type="text"
                    name="legalName"
                    placeholder="Full Legal Name"
                    component={InputField}
                    size="large"
                    style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}
                  />
                </Form.Item>
                <Field
                  label="Skype"
                  type="text"
                  name="skype"
                  placeholder="Provide your Skype username"
                  component={InputField}
                  size="large"
                />
              </div>
              <div className="mb-4 pb-4">
                <Field
                  label="English Proficiency"
                  type="select"
                  name="proficiency"
                  options={[{
                    value: 'native',
                    title: 'Native/Fluent'
                  }]}
                  placeholder="Select your English Proficiency."
                  component={SelectField}
                  isRequire
                  size="large"
                />
                <Form.Item className="m-0" label={
                  <>
                    <Typography.Text type="danger">*</Typography.Text>&nbsp;
                    Primary Interest
                  </>
                }>
                  <Field
                    type="select"
                    name="primaryInterest"
                    options={[{
                      value: 'vietnam',
                      title: 'Viet Nam'
                    }]}
                    placeholder="Please select from the list"
                    component={SelectField}
                    size="large"
                    style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                  />
                  <Field
                    type="number"
                    name="primaryYearsOfExperience"
                    placeholder="Years of Experience"
                    component={NumberField}
                    size="large"
                    style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}
                  />
                </Form.Item>
                <Field
                  label="Primary Skills"
                  type="text"
                  name="primarySkills"
                  placeholder="Type a skill, then select from the list below."
                  component={InputField}
                  isRequire
                  size="large"
                />
                <Form.Item className="m-0" label="Secondary Interest">
                  <Field
                    type="select"
                    name="secondaryInterest"
                    options={[{
                      value: 'vietnam',
                      title: 'Viet Nam'
                    }]}
                    placeholder="Please select from the list"
                    component={SelectField}
                    size="large"
                    style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                  />
                  <Field
                    type="number"
                    name="secondaryYearsOfExperience"
                    placeholder="Years of Experience"
                    component={NumberField}
                    size="large"
                    style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}
                  />
                </Form.Item>
                <Field
                  label="Secondary Skills"
                  type="text"
                  name="secondarySkills"
                  placeholder="Type a skill, then select from the list below."
                  component={InputField}
                  size="large"
                />
                <Field
                  label="LinkedIn"
                  type="text"
                  name="urlLinkedIn"
                  placeholder="Provide your LinkedIn profile URL"
                  component={InputField}
                  size="large"
                />
                <Field
                  label="GitHub"
                  type="text"
                  name="urlGitHub"
                  placeholder="Provide your GitHub profile URL"
                  component={InputField}
                  size="large"
                />
                <Field
                  label="Personal Website"
                  type="text"
                  name="urlWebsite"
                  placeholder="Provide your GitHub profile URL"
                  component={InputField}
                  size="large"
                />
              </div>
              <div>
                <Field
                  label={`How many years of work \n experience do you have as \n Developer?`}
                  type="select"
                  name="yearsOfWorkExperience"
                  options={[{
                    value: 1,
                    title: 'Less than 2 years'
                  }]}
                  placeholder="Provide number of years."
                  component={SelectField}
                  size="large"
                />
                <Field
                  label="What do you look for in a company (e.g., culture)?"
                  type="text"
                  name="lookCompany"
                  component={TextAriaField}
                  size="large"
                />
                <Field
                  label="What types of projects would you love to work on?"
                  type="text"
                  name="typesOfProjects"
                  component={TextAriaField}
                  size="large"
                />
                <Field
                  label="What's the most amazing application you've built?"
                  type="text"
                  name="amazingApplication"
                  component={TextAriaField}
                  size="large"
                />
              </div>

              <div className="d-flex justify-content-end">
                <Button
                  htmlType="button"
                  type="primary"
                  size="large"
                  onClick={() => handleSubmit()}
                >
                  Next
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <div className="col-md-4 bg-light">
          {/* <DatePicker/> */}
        </div>
      </div>
    </div>
  );
};

const ProfilePage = withFormik<IProfilePageProps, ProfileFormValue>({
  // validationSchema: profileFormValidation,
  mapPropsToValues: () => ({
    photo: '',
    file: '',
    country: '',
    city: '',
    citizenship: '',
    legalName: '',
    skype: '',
    proficiency: '',
    primaryInterest: '',
    primaryYearsOfExperience: '',
    primarySkills: '',
    secondaryInterest: '',
    secondaryYearsOfExperience: '',
    secondarySkills: '',
    urlLinkedIn: '',
    urlGitHub: '',
    urlWebsite: '',
    yearsOfWorkExperience: '',
    lookCompany: '',
    typesOfProjects: '',
    amazingApplication: '',
  }),
  handleSubmit: (values: ProfileFormValue) => {
    console.log('Log: values', values);
    history.push(HomePath);
  },
})(ProfileForm);

export default ProfilePage;
