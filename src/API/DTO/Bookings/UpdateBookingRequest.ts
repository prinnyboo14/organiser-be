import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsOptional, IsString, MaxLength } from 'class-validator';
import { BookingStatusEnum } from 'src/Domain/Models/Enums';
import { API_EXAMPLES } from '../ApiExamples';

export class UpdateBookingRequest {
  @ApiPropertyOptional({ example: API_EXAMPLES.date })
  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  bookingDate: Date;

  @ApiPropertyOptional({ example: API_EXAMPLES.service })
  @IsString()
  @IsOptional()
  service: string;

  @ApiPropertyOptional({ example: API_EXAMPLES.bookingStatus })
  @IsString()
  @IsOptional()
  bookingStatus: BookingStatusEnum;

  @ApiPropertyOptional({ example: API_EXAMPLES.notes })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  notes?: string;
}
