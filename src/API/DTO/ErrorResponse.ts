import { ApiResponseProperty } from '@nestjs/swagger';

export class ErrorResponse {
  @ApiResponseProperty({ example: 400 })
  statusCode: number;

  @ApiResponseProperty({ example: 'Bad Request' })
  message: string;
}
