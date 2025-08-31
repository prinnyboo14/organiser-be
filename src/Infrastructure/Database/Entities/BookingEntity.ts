import { BookingStatusEnum } from 'src/Domain/Models/Enums';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CustomerEntity } from './CustomerEntity';

@Entity({ name: 'booking' })
export class BookingEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column()
  // bookingType: add booking type enum

  @Column()
  service: string;

  @Column({ name: 'booking_date', type: 'timestamp' })
  bookingDate: Date;

  @Column({ name: 'booking_status' })
  bookingStatus: BookingStatusEnum;

  @Column({ nullable: true })
  notes: string;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp', nullable: true })
  updatedAt: Date;

  @ManyToOne(() => CustomerEntity, (customer) => customer.bookings, {
    eager: true,
  })
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = new Date();
  }
}
