import { BaseEntity, Column, Entity, PrimaryColumn, Timestamp } from 'typeorm';

@Entity({ name: 'booking' })
export class BookingEntity extends BaseEntity {
  @PrimaryColumn()
  id: string;

  // @Column()
  // bookingType: add booking type enum

  @Column()
  service: string;

  // @Column({ name: 'booking_date', type: 'timestamp' })
  // bookingDate: Timestamp;

  @Column({ name: 'booking_status' })
  bookingStatus: string; // add booking status enum

  @Column({ nullable: true })
  notes: string;

  // @Column({ name: 'created_at', type: 'timestamp' })
  // createdAt: Timestamp;

  // @Column({ name: 'updated_at', type: 'timestamp' })
  // updatedAt: Timestamp;
}
