import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { EnableSwagger } from '../Decorators/EnableSwagger.decorator';
import { ApiCreatedResponse, ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { BookingResponse } from '../DTO/Bookings/BookingResponse';
import { GetAllBookings } from 'src/Domain/UseCases/Bookings/GetAllBookings';
import { CreateBookingRequest } from '../DTO/Bookings/CreateBookingRequest';
import { CreateBooking } from 'src/Domain/UseCases/Bookings/CreateBooking';
import { GetBooking } from 'src/Domain/UseCases/Bookings/GetBooking';

@EnableSwagger('Bookings')
@Controller('booking')
export class BookingController {
  constructor(
    private readonly _getAllBookings: GetAllBookings,
    private readonly _createBooking: CreateBooking,
    private readonly _getBooking: GetBooking,
  ) {}

  @Get()
  @ApiOkResponse({ type: BookingResponse }) // does this type need to be changed
  public async getBookings(): Promise<BookingResponse[]> {
    return await this._getAllBookings.getAllBookings();
  }

  @Get(':id')
  @ApiOkResponse({ type: BookingResponse })
  @ApiParam({ name: 'id', type: String })
  public async getBooking(@Param('id') id: string): Promise<BookingResponse> {
    return await this._getBooking.getBooking(id);
  }

  @Post()
  @ApiCreatedResponse({ type: BookingResponse })
  public async createBooking(
    @Body(new ValidationPipe())
    createBookingRequest: CreateBookingRequest,
  ): Promise<BookingResponse> {
    return await this._createBooking.createBooking(createBookingRequest);
  }
}
