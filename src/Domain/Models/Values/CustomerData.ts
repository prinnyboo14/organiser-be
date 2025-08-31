export class CreateCustomerData {
  firstName: string;
  lastName?: string;
  phoneNumber: string;
  emailAddress?: string;
  notes?: string;
}

export class UpdateCustomerData {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  notes?: string;
}
