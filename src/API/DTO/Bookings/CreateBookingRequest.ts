import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { BookingStatusEnum } from 'src/Domain/Models/Enums';
import { API_EXAMPLES } from '../ApiExamples';
import { CreateCustomerRequest } from '../Customers/CreateCustomerRequest';

export class CreateBookingRequest {
  @ApiProperty({ example: API_EXAMPLES.date })
  @IsDate()
  @Transform(({ value }) => new Date(value))
  bookingDate: Date;

  @ApiProperty({ example: API_EXAMPLES.service })
  @IsString()
  service: string;

  @ApiProperty({ example: API_EXAMPLES.bookingStatus })
  @IsString()
  bookingStatus: BookingStatusEnum;

  @ApiPropertyOptional({ example: API_EXAMPLES.notes })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  notes?: string;

  @ApiPropertyOptional({
    type: CreateCustomerRequest,
    example: {
      firstName: API_EXAMPLES.firstName,
      lastName: API_EXAMPLES.lastName,
      phoneNumber: API_EXAMPLES.phoneNumber,
      emailAddress: API_EXAMPLES.emailAddress,
      notes: API_EXAMPLES.notes,
    },
  })
  @ValidateNested()
  @Type(() => CreateCustomerRequest)
  customer: CreateCustomerRequest;
}
