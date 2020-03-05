import RestClient from './rest-client';
import axios from 'axios';

const urlAPI = 'http://localhost:3001';

export default class ProductServices {
  restClient: RestClient;
  constructor(restClient = new RestClient()) {
    this.restClient = restClient;
  }

  async getProductDetail(params) {
    try{
      const { id } = params;
      const response = await axios.get(`${urlAPI}/products/${id}`);
      const data = await response.data;
      return {
        data: data,
        metadata: {
          message: "Successful operation",
          errors: [],
          status: 200,
          token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9rd2FkbWluLWFwaS5ha3QtcWEuZXN0LXJvdWdlLXRlY2guY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTcwOTQ3NTU2LCJleHAiOjE1NzIxNTcxNTYsIm5iZiI6MTU3MDk0NzU1NiwianRpIjoiWmNMcUpCVG92NmFWTEExNyIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsInVzZXIiOnsiaWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6bnVsbCwicGhvbmUiOm51bGwsInJvbGUiOjEsInN0YXR1cyI6MSwiY3JlYXRlZF9hdCI6IjIwMTktMDMtMjIgMDY6Mzg6MTMiLCJ1cGRhdGVkX2F0IjoiMjAxOS0wMy0yMiAwNjozODoxMyJ9fQ.JfwoKlJqV9hoQSann3W-g3SbVcRPhCYaTvKf25MVTTFo5YSjD5NTERK_d1bQ9voEiMOuu--tp-H4BcWZUAc9CtEoh-4F0sTgHKI7oTKTcNKFSMDrmb1wc7SK_YpdmAeCgcfPitdU_lwC_feNYZ2WE13kF7cbAKp7U2v62kkAlTnlLcV-yU8TzvdHuHHWy1wB7vXc3_OpIMFVIyqtaF_GmPKMNR2kA-pJVDzphhjv6SEamGUyrff2sgPDBrkI9SdL6RTzaOqJoTzJwREheui30NAE6DRjBeUTgtdmRu8aRH8nmQJcFEfsyEAgEZLHDCpF_o_oHHOggRUnT_IY75tuBA"
        }
      };
    } catch (error) {
        console.log(error);
    }
  }
}
