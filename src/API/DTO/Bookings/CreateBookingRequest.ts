import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

import { API_EXAMPLES } from '../ApiExamples';
import { BookingStatusEnum } from 'src/Domain/Models/Enums';
import { CreateCustomerRequest } from '../Customers/CreateCustomerRequest';

export class CreateBookingRequest {
  @ApiProperty({ example: API_EXAMPLES.date })
  @IsDate()
  @Transform(({ value }) => new Date(value))
  bookingDate: Date;

  @ApiProperty({ example: API_EXAMPLES.number })
  @IsNumber()
  estimatedDuration: number;

  @ApiProperty({ example: API_EXAMPLES.service })
  @IsString()
  service: string;

  @ApiProperty({ example: API_EXAMPLES.bookingStatus })
  @IsString()
  bookingStatus: BookingStatusEnum;

  @ApiProperty({ example: API_EXAMPLES.boolean })
  @IsBoolean()
  isMOT: boolean;

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
