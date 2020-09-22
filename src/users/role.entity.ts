import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './user.entity';

@Entity()
class Role {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToOne(() => User, (user: User) => user.role)
  public user?: User;
}

export default Role;