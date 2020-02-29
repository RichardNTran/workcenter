import React, { FunctionComponent } from 'react';

import { Text } from '../../components/styles';

interface IProfilePageProps {}

const ProfilePage: FunctionComponent<IProfilePageProps> = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4">
        <Text fontSize="48px">Tell Us About Yourself</Text>
        <Text className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vel cupiditate quibusdam ullam exercitationem sunt, voluptas a voluptatem veritatis soluta explicabo cumque provident ut enim quisquam nam molestiae. Esse, dolorem.</Text>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="d-flex align-items-center">
            <Text width="300px">Profile Photo</Text>
            <div className="form-group w-100 mt-2 mb-2">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Text width="300px">Resume</Text>
            <div className="form-group w-100 mt-2 mb-2">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-info">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
