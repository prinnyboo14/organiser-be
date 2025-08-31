import { ApiResponseProperty } from '@nestjs/swagger';
import { API_EXAMPLES } from '../ApiExamples';
import { Customer } from 'src/Domain/Models/Aggregates/Customer';

export class BookingResponse {
  @ApiResponseProperty({ example: API_EXAMPLES.uuid })
  id: string;
  @ApiResponseProperty({ example: API_EXAMPLES.service })
  service: string;
  @ApiResponseProperty({ example: API_EXAMPLES.date })
  bookingDate: Date;
  @ApiResponseProperty({ example: API_EXAMPLES.bookingStatus })
  bookingStatus: string;
  @ApiResponseProperty({ example: API_EXAMPLES.notes })
  notes?: string;
  @ApiResponseProperty({ example: API_EXAMPLES.date })
  createdAt: Date;
  @ApiResponseProperty({ example: API_EXAMPLES.date })
  updatedAt?: Date;
  @ApiResponseProperty({ example: '' }) // add example
  customer: Customer;
}
