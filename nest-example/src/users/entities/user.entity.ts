import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
export enum LANG {
  fr = 'FR',
  en = 'EN',
  ar = 'AR',
}
export enum ROLES {
  TEACHER = 'teacher',
  STUDENT = 'student',
  ADMIN = 'admin',
  ORG_ADMIN = 'org-admin',
}

export enum STATUS {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED',
}
export enum USER_STATUS {
  CONFIRMED = 'CONFIRMED',
  FORCE_CHANGE_PASSWORD = 'FORCE_CHANGE_PASSWORD',
}
@Entity()
export class User {
  @PrimaryColumn({ type: 'text' })
  id: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
  @Column()
  @Generated('uuid')
  uuid: string;
  @Column({ nullable: true })
  username: string;
  @Column()
  last_name: string;
  @Column({ nullable: true })
  phone: string;
  @Column()
  first_name: string;
  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;
  @Column({ default: false })
  archived: false;
  @Column({ unique: true })
  email: string;

  @Column({ type: 'enum', enum: STATUS, default: STATUS.ENABLED })
  status: STATUS;
  @Column({ type: 'enum', enum: LANG, default: LANG.en })
  preferred_lang: LANG;
  @Column({
    type: 'enum',
    enum: USER_STATUS,
    default: USER_STATUS.FORCE_CHANGE_PASSWORD,
  })
  confirmation_status: USER_STATUS;
}
