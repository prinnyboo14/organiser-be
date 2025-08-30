import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsOptional, IsString, MaxLength } from 'class-validator';
import { BookingStatusEnum } from 'src/Domain/Models/Enums';

export class CreateBookingRequest {
  @ApiPropertyOptional({ example: '2025-08-30T17:42:31.069Z' })
  @IsDate()
  @Transform(({ value }) => new Date(value))
  bookingDate: Date;

  @ApiProperty({ example: 'MOT' })
  @IsString()
  service: string;

  @ApiProperty({ example: BookingStatusEnum.CONFIRMED })
  @IsString()
  bookingStatus: BookingStatusEnum;

  @ApiPropertyOptional({ example: 'Needs further investigation' })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  notes?: string;
}
