import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsOptional, IsString, MaxLength } from 'class-validator';
import { BookingStatusEnum } from 'src/Domain/Models/Enums';

export class UpdateBookingRequest {
  @ApiPropertyOptional({ example: '2025-08-30T17:42:31.069Z' })
  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  bookingDate: Date;

  @ApiPropertyOptional({ example: 'MOT' })
  @IsString()
  @IsOptional()
  service: string;

  @ApiPropertyOptional({ example: BookingStatusEnum.CONFIRMED })
  @IsString()
  @IsOptional()
  bookingStatus: BookingStatusEnum;

  @ApiPropertyOptional({ example: 'Needs further investigation' })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  notes?: string;
}
