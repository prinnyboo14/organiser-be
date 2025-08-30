import { ApiResponseProperty } from '@nestjs/swagger';

export class BookingResponse {
  @ApiResponseProperty({ example: '' })
  id: string;
  @ApiResponseProperty({ example: '' })
  service: string;
  @ApiResponseProperty({ example: '' })
  bookingStatus: string;
  //bookingDate: Date;
  @ApiResponseProperty({ example: '' })
  notes: string;
}
