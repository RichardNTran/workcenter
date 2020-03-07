import React from 'react';
import { withFormik, Field, FormikProps } from 'formik';
import { DatePicker } from 'antd';

import { InputField, SelectField } from '../../components/Fields';
import { Text } from '../../components/styles';

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

interface IProfilePageProps {};

const ProfileForm = (props: IProfilePageProps & FormikProps<ProfileFormValue>) => {
  const {
    handleSubmit,
  } = props;
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
            <form onSubmit={handleSubmit}>
              <div className="mb-4 pb-4">
                <Field
                  isInLine
                  label="Profile Photo"
                  type="file"
                  name="photo"
                  placeholder="No file selected"
                  component={InputField}
                  isRequire
                />
                <Field
                  isInLine
                  label="Resume"
                  type="file"
                  name="resume"
                  placeholder="No file selected"
                  component={InputField}
                  isRequire
                />
                <div className="row">
                  <div className="d-flex align-items-center col-sm-4 mb-3">
                    <Text className="col-form-label">Location</Text>
                    <Text className="ml-1" error w6>*</Text>
                  </div>
                  <div className="col-sm-8">
                    <div className="form-row">
                      <div className="col-md-6">
                        <Field
                          type="select"
                          name="country"
                          options={[{
                            value: 'vietnam',
                            title: 'Viet Nam'
                          }]}
                          placeholder="Current country"
                          component={SelectField}
                        />
                      </div>
                      <div className="col-md-6">
                        <Field
                          type="text"
                          name="city"
                          placeholder="Please select country first"
                          component={InputField}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex align-items-center col-sm-4 mb-3">
                    <Text className="col-form-label">Citizenship</Text>
                    <Text className="ml-1" error w6>*</Text>
                  </div>
                  <div className="col-sm-8">
                    <div className="form-row">
                      <div className="col-md-6">
                        <Field
                          type="select"
                          name="citizenship"
                          options={[{
                            value: 'vietnam',
                            title: 'Viet Nam'
                          }]}
                          placeholder="Citizenship"
                          component={SelectField}
                        />
                      </div>
                      <div className="col-md-6">
                        <Field
                          type="text"
                          name="legalName"
                          placeholder="Full Legal Name"
                          component={InputField}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Field
                  isInLine
                  label="Skype"
                  type="text"
                  name="skype"
                  placeholder="Provide your Skype username"
                  component={InputField}
                />
              </div>
              <div className="mb-4 pb-4">
                <Field
                  isInLine
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
                />
                <div className="row">
                  <div className="d-flex align-items-center col-sm-4 mb-3">
                    <Text className="col-form-label">Primary Interest</Text>
                    <Text className="ml-1" error w6>*</Text>
                  </div>
                  <div className="col-sm-8">
                    <div className="form-row">
                      <div className="col-md-6">
                        <Field
                          type="select"
                          name="primaryInterest"
                          options={[{
                            value: 'vietnam',
                            title: 'Viet Nam'
                          }]}
                          placeholder="Please select from the list"
                          component={SelectField}
                        />
                      </div>
                      <div className="col-md-6">
                        <Field
                          type="number"
                          name="primaryYearsOfExperience"
                          placeholder="Years of Experience"
                          component={InputField}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Field
                  isInLine
                  label="Primary Skills"
                  type="text"
                  name="primarySkills"
                  placeholder="Type a skill, then select from the list below."
                  component={InputField}
                  isRequire
                />
                <div className="row">
                  <div className="d-flex align-items-center col-sm-4 mb-3">
                    <Text className="col-form-label">Secondary Interest</Text>
                  </div>
                  <div className="col-sm-8">
                    <div className="form-row">
                      <div className="col-md-6">
                        <Field
                          type="select"
                          name="secondaryInterest"
                          options={[{
                            value: 'vietnam',
                            title: 'Viet Nam'
                          }]}
                          placeholder="Please select from the list"
                          component={SelectField}
                        />
                      </div>
                      <div className="col-md-6">
                        <Field
                          type="number"
                          name="secondaryYearsOfExperience"
                          placeholder="Years of Experience"
                          component={InputField}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Field
                  isInLine
                  label="Secondary Skills"
                  type="text"
                  name="secondarySkills"
                  placeholder="Type a skill, then select from the list below."
                  component={InputField}
                />
                <Field
                  isInLine
                  label="LinkedIn"
                  type="text"
                  name="urlLinkedIn"
                  placeholder="Provide your LinkedIn profile URL"
                  component={InputField}
                />
                <Field
                  isInLine
                  label="GitHub"
                  type="text"
                  name="urlGitHub"
                  placeholder="Provide your GitHub profile URL"
                  component={InputField}
                />
                <Field
                  isInLine
                  label="Personal Website"
                  type="text"
                  name="urlWebsite"
                  placeholder="Provide your GitHub profile URL"
                  component={InputField}
                />
              </div>
              <div>
                <Field
                  isInLine
                  label="How many years of work experience do you have as Developer?"
                  type="select"
                  name="yearsOfWorkExperience"
                  options={[{
                    value: 1,
                    title: 'Less than 2 years'
                  }]}
                  placeholder="Provide number of years."
                  component={SelectField}
                />
                <Field
                  isInLine
                  label="What do you look for in a company (e.g., culture)?"
                  type="text"
                  name="lookCompany"
                  component={InputField}
                />
                <Field
                  isInLine
                  label="What types of projects would you love to work on?"
                  type="text"
                  name="typesOfProjects"
                  component={InputField}
                />
                <Field
                  isInLine
                  label="What's the most amazing application you've built?"
                  type="text"
                  name="amazingApplication"
                  component={InputField}
                />
              </div>
              
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Next
                </button>
              </div>
            </form>
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
    alert(JSON.stringify(values));
  },
})(ProfileForm);

export default ProfilePage;
