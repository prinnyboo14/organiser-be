import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  IsPhoneNumber,
} from 'class-validator';
import { API_EXAMPLES } from '../ApiExamples';

export class CreateCustomerRequest {
  @ApiProperty({ example: API_EXAMPLES.firstName })
  @IsString()
  firstName: string;

  @ApiProperty({ example: API_EXAMPLES.lastName })
  @IsString()
  lastName: string;

  @ApiProperty({ example: API_EXAMPLES.phoneNumber })
  //@IsPhoneNumber('GB')
  phoneNumber: string;

  @ApiProperty({ example: API_EXAMPLES.emailAddress })
  @IsEmail()
  emailAddress: string;

  @ApiPropertyOptional({ example: API_EXAMPLES.notes })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  notes?: string;
}
