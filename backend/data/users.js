import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'adminuser',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'john',
        email: 'johnd@example.com',
        password: bcrypt.hashSync('123456',10)
    },
    {
        name: 'jane',
        email: 'janed@example.com',
        password: bcrypt.hashSync('123456',10)
    },
]

export default users