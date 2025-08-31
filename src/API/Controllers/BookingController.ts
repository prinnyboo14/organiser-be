import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { EnableSwagger } from '../Decorators/EnableSwagger.decorator';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import { BookingResponse } from '../DTO/Bookings/BookingResponse';
import { Bookings } from 'src/Domain/UseCases/Bookings';
import { CreateBookingRequest } from '../DTO/Bookings/CreateBookingRequest';
import { UpdateBookingRequest } from '../DTO/Bookings/UpdateBookingRequest';

@EnableSwagger('Bookings')
@Controller('booking')
export class BookingController {
  constructor(private readonly _bookings: Bookings) {}

  @Get()
  @ApiOkResponse({ type: BookingResponse, isArray: true })
  public async getBookings(): Promise<BookingResponse[]> {
    return await this._bookings.getAllBookings();
  }

  @Get(':id')
  @ApiOkResponse({ type: BookingResponse })
  @ApiParam({ name: 'id', type: String })
  public async getBooking(@Param('id') id: string): Promise<BookingResponse> {
    return await this._bookings.getBooking(id);
  }

  @Post()
  @ApiCreatedResponse({ type: BookingResponse })
  public async createBooking(
    @Body(new ValidationPipe())
    createBookingRequest: CreateBookingRequest,
  ): Promise<BookingResponse> {
    return await this._bookings.createBooking(createBookingRequest);
  }

  @Put(':id')
  @ApiOkResponse({ type: BookingResponse })
  @ApiParam({ name: 'id', type: String })
  public async updatebooking(
    @Param('id') id: string,
    @Body(new ValidationPipe())
    updateBookingRequest: UpdateBookingRequest,
  ): Promise<BookingResponse> {
    return await this._bookings.updateBooking(id, updateBookingRequest);
  }

  @Delete(':id')
  @ApiNoContentResponse({ description: 'Deleted successfully' })
  @HttpCode(204)
  @ApiNotFoundResponse({ description: `Booking not found` })
  @ApiParam({ name: 'id', type: String })
  public async deleteBooking(@Param('id') id: string): Promise<void> {
    return await this._bookings.deleteBooking(id);
  }
}
