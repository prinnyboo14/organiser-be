import { ApiResponseProperty } from '@nestjs/swagger';
import { API_EXAMPLES } from '../ApiExamples';

export class CustomerResponse {
  @ApiResponseProperty({ example: API_EXAMPLES.uuid })
  id: string;
  @ApiResponseProperty({ example: API_EXAMPLES.firstName })
  firstName: string;
  @ApiResponseProperty({ example: API_EXAMPLES.lastName })
  lastName?: string;
  @ApiResponseProperty({ example: API_EXAMPLES.phoneNumber })
  phoneNumber: string;
  @ApiResponseProperty({ example: API_EXAMPLES.emailAddress })
  emailAddress?: string;
  @ApiResponseProperty({ example: API_EXAMPLES.notes })
  notes?: string;
}
