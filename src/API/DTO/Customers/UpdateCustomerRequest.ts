import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  IsPhoneNumber,
} from 'class-validator';
import { API_EXAMPLES } from '../ApiExamples';

export class UpdateCustomerRequest {
  @ApiPropertyOptional({ example: API_EXAMPLES.firstName })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiPropertyOptional({ example: API_EXAMPLES.lastName })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiPropertyOptional({ example: API_EXAMPLES.phoneNumber })
  //@IsPhoneNumber('GB')
  @IsOptional()
  phoneNumber?: string;

  @ApiPropertyOptional({ example: API_EXAMPLES.emailAddress })
  @IsEmail()
  @IsOptional()
  emailAddress?: string;

  @ApiPropertyOptional({ example: API_EXAMPLES.notes })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  notes?: string;
}
