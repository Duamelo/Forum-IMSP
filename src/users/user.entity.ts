import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import Post from '../posts/post.entity';
import PublicFile from '../files/publicFile.entity';
import Role from './role.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column()
  @Exclude()
  public password: string;

  @OneToOne(() => Role, {
    eager: true,
    cascade: true
  })
  @JoinColumn()
  public role: Role;

  @OneToMany(() => Post, (post: Post) => post.author)
  public posts?: Post[];

  @JoinColumn()
  @OneToOne(
    () => PublicFile,
    {
      eager: true,
      nullable: true
    }
  )
  public avatar?: PublicFile;
}

export default User;