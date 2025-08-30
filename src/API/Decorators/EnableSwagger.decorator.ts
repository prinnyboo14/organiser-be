import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiInternalServerErrorResponse,
  ApiMethodNotAllowedResponse,
  ApiNotFoundResponse,
  ApiNotAcceptableResponse,
  ApiServiceUnavailableResponse,
} from '@nestjs/swagger';
import { ErrorResponse } from '../DTO/ErrorResponse';

// Enable Swagger decorator to standardise common responses and tags
export function EnableSwagger(tag: string): ReturnType<typeof applyDecorators> {
  return applyDecorators(
    ApiTags(tag),
    ApiBadRequestResponse({ description: 'Bad Request', type: ErrorResponse }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized',
      type: ErrorResponse,
    }),
    ApiInternalServerErrorResponse({
      description: 'Internal Server Error',
      type: ErrorResponse,
    }),
    ApiMethodNotAllowedResponse({
      description: 'Method Not Allowed',
      type: ErrorResponse,
    }),
    ApiNotFoundResponse({ description: 'Not Found', type: ErrorResponse }),
    ApiNotAcceptableResponse({
      description: 'Not Acceptable',
      type: ErrorResponse,
    }),
    ApiServiceUnavailableResponse({
      description: 'Service Unavailable',
      type: ErrorResponse,
    }),
  );
}
