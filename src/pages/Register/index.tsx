import React, { FunctionComponent } from 'react';

import { Text } from '../../components/styles';

interface IRegisterPageProps {}

const RegisterPage:FunctionComponent<IRegisterPageProps> = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4">
        <Text fontSize="48px">Apply to Join our Network of Top Freelancers</Text>
        <Text className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vel cupiditate quibusdam ullam exercitationem sunt, voluptas a voluptatem veritatis soluta explicabo cumque provident ut enim quisquam nam molestiae. Esse, dolorem.</Text>
      </div>
      <div className="row">
        <div className="col-md-8">
          <form>
            <div className="form-group">
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos placeat repudiandae natus dolorum in perferendis neque accusamus. Similique saepe aliquid doloribus ut impedit suscipit ducimus tempore animi earum accusantium.</label>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-info">Join Toptal</button>
            </div>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default RegisterPage;
