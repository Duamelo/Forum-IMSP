import User from '../../users/user.entity';

const mockedUser: User = {
  id: 1,
  email: 'franckdosseh17@gmail.com',
  name: 'Duamel',
  password: '123456789',
  role: {
    id: 1,
   name: 'admin'
  }
}

export default mockedUser;