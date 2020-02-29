import RestClient from './rest-client';

import AuthServices from './auth.service';
import ProductServices from './product.service';

const restClient = new RestClient();

export const authServices = new AuthServices(restClient);
export const productServices = new ProductServices(restClient);
