import { CreateCustomerData } from 'src/Domain/Models/Values/CustomerData';
import { Customer } from 'src/Domain/Models/Aggregates/Customer';

export interface ICustomerRepository {
  getAllCustomers(): Promise<Customer[]>;
  getCustomerById(id: string): Promise<Customer>;
  // findExistingCustomer(data: CreateCustomerData): Promise<Customer | null>;
  createCustomer(createCustomerData: CreateCustomerData): Promise<Customer>;
  updateCustomer(customerToUpdate: Customer): Promise<Customer>;
  deleteCustomer(customerToDelete: Customer): Promise<void>;
}

export const ICustomerRepository = Symbol('ICustomerRepository');
