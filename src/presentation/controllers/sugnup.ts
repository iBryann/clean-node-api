import { MissinParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helpers';
import { HttpRequest, HttpResponse } from '../protocols/http';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissinParamError('name'));
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissinParamError('email'));
    }

    return {
      statusCode: 201,
      body: httpRequest.body,
    };
  }
}