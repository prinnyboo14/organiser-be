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
import { Customers } from 'src/Domain/UseCases/Customers';
import { CustomerResponse } from '../DTO/Customers/CustomerResponse';
import { CreateCustomerRequest } from '../DTO/Customers/CreateCustomerRequest';
import { UpdateCustomerRequest } from '../DTO/Customers/UpdateCustomerRequest';

@EnableSwagger('Customers')
@Controller('customer')
export class CustomerController {
  constructor(private readonly _customers: Customers) {}

  @Get(':id')
  @ApiOkResponse({ type: CustomerResponse })
  @ApiParam({ name: 'id', type: String })
  public async getCustomer(@Param('id') id: string): Promise<CustomerResponse> {
    return await this._customers.getCustomer(id);
  }

  @Post()
  @ApiCreatedResponse({ type: CustomerResponse })
  public async createCustomer(
    @Body(new ValidationPipe())
    createCustomerRequest: CreateCustomerRequest,
  ): Promise<CustomerResponse> {
    return await this._customers.createCustomer(createCustomerRequest);
  }

  @Put(':id')
  @ApiOkResponse({ type: CustomerResponse })
  @ApiParam({ name: 'id', type: String })
  public async updateCustomer(
    @Param('id') id: string,
    @Body(new ValidationPipe())
    updateCustomerRequest: UpdateCustomerRequest,
  ): Promise<CustomerResponse> {
    return await this._customers.updateCustomer(id, updateCustomerRequest);
  }

  @Delete(':id')
  @ApiNoContentResponse({ description: 'Deleted successfully' })
  @ApiNotFoundResponse({ description: 'Customer not found' })
  @HttpCode(204)
  @ApiParam({ name: 'id', type: String })
  public async deleteCustomer(@Param('id') id: string) {
    return await this._customers.deleteCustomer(id);
  }
}
