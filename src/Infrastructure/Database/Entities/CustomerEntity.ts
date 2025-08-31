import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BookingEntity } from './BookingEntity';

@Entity({ name: 'customer' })
export class CustomerEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column()
  emailAddress: string;

  @Column()
  notes?: string;

  @OneToMany(() => BookingEntity, (booking) => booking.customer)
  bookings: BookingEntity[];
}
