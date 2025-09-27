import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ICustomerRepository } from '../Ports/Repositories/ICustomerRepository';
import { Customer } from '../Models/Aggregates/Customer';
import {
  CreateCustomerData,
  UpdateCustomerData,
} from '../Models/Values/CustomerData';

@Injectable()
export class Customers {
  constructor(
    @Inject(ICustomerRepository)
    private readonly _customerRepository: ICustomerRepository,
  ) {}

  private customerNotFoundException(id: string) {
    throw new NotFoundException(
      'CUSTOMER_NOT_FOUND',
      `Customer with id: ${id} not found`,
    );
  }

  public async createCustomer(
    createCustomerData: CreateCustomerData,
  ): Promise<Customer> {
    return await this._customerRepository.createCustomer(createCustomerData);
  }

  public async getCustomer(id: string): Promise<Customer> {
    return await this._customerRepository.getCustomerById(id);
  }

  public async getAllCustomers(): Promise<Customer[]> {
    return await this._customerRepository.getAllCustomers();
  }

  public async updateCustomer(
    id: string,
    updateCustomerData: UpdateCustomerData,
  ): Promise<Customer> {
    const customerToUpdate = await this._customerRepository.getCustomerById(id);

    if (!customerToUpdate) {
      this.customerNotFoundException(id);
    }

    customerToUpdate.firstName = updateCustomerData.firstName;
    customerToUpdate.lastName = updateCustomerData.lastName;
    customerToUpdate.phoneNumber = updateCustomerData.phoneNumber;
    customerToUpdate.emailAddress = updateCustomerData.emailAddress;
    customerToUpdate.notes = updateCustomerData.notes;

    return await this._customerRepository.updateCustomer(customerToUpdate);
  }

  public async deleteCustomer(id: string): Promise<void> {
    const customerToDelete = await this._customerRepository.getCustomerById(id);
    if (!customerToDelete) {
      this.customerNotFoundException(id);
    }
    return await this._customerRepository.deleteCustomer(customerToDelete);
  }
}
