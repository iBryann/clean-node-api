import { MissinParamError } from '../errors/missing-param-error';
import { HttpRequest, HttpResponse } from '../protocols/http';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissinParamError('name'),
      };
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissinParamError('email'),
      };
    }

    return {
      statusCode: 201,
      body: httpRequest.body,
    };
  }
}