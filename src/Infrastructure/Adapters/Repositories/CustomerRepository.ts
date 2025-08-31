import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Customer } from 'src/Domain/Models/Aggregates/Customer';
import { CreateCustomerData } from 'src/Domain/Models/Values/CustomerData';
import { ICustomerRepository } from 'src/Domain/Ports/Repositories/ICustomerRepository';
import { CustomerEntity } from 'src/Infrastructure/Database/Entities/CustomerEntity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerRepository implements ICustomerRepository {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly _customerEntity: Repository<CustomerEntity>,
  ) {}

  async getCustomerById(id: string): Promise<Customer> {
    const customer = await this._customerEntity.findOne({ where: { id } });
    return plainToInstance(Customer, customer);
  }

  async getCustomerByEmail(email: string): Promise<CustomerEntity | null> {
    if (!email) return null;
    return await this._customerEntity.findOne({
      where: { emailAddress: email },
    });
  }

  async getCustomerByPhone(
    phoneNumber: string,
  ): Promise<CustomerEntity | null> {
    if (!phoneNumber) return null;
    return await this._customerEntity.findOne({ where: { phoneNumber } });
  }

  async getCustomerByName(
    firstName: string,
    lastName: string,
  ): Promise<CustomerEntity | null> {
    if (!firstName || !lastName) return null;
    return await this._customerEntity.findOne({
      where: { firstName, lastName },
    });
  }

  async findExistingCustomer(
    data: CreateCustomerData,
  ): Promise<Customer | null> {
    let customer =
      (data.phoneNumber && (await this.getCustomerByPhone(data.phoneNumber))) ||
      (data.firstName &&
        data.lastName &&
        (await this.getCustomerByName(data.firstName, data.lastName))) ||
      (data.emailAddress &&
        (await this.getCustomerByEmail(data.emailAddress))) ||
      null;

    return customer ? plainToInstance(Customer, customer) : null;
  }

  async createCustomer(
    createCustomerData: CreateCustomerData,
  ): Promise<Customer> {
    const newCustomer = this._customerEntity.create(createCustomerData);
    await this._customerEntity.save(newCustomer);
    return plainToInstance(Customer, newCustomer);
  }

  async updateCustomer(customerToUpdate: Customer): Promise<Customer> {
    const updatedCustomer = await this._customerEntity.save(customerToUpdate);
    return plainToInstance(Customer, updatedCustomer);
  }

  async deleteCustomer(customerToDelete: Customer): Promise<void> {
    const customerEntity = plainToInstance(CustomerEntity, customerToDelete);
    await this._customerEntity.remove(customerEntity);
  }
}
