import { Controller, Get } from '@nestjs/common';
import { EnableSwagger } from '../Decorators/EnableSwagger.decorator';
import { ApiOkResponse } from '@nestjs/swagger';
import { BookingResponse } from '../DTO/Bookings/BookingResponse';
import { GetAllBookings } from 'src/Domain/UseCases/Bookings/GetAllBookings';

@EnableSwagger('Bookings')
@Controller('booking')
export class BookingController {
  constructor(private readonly _getAllBookings: GetAllBookings) {}

  @Get()
  @ApiOkResponse({ type: BookingResponse })
  public async getBookings(): Promise<BookingResponse[]> {
    return await this._getAllBookings.getAllBookings();
  }
}
