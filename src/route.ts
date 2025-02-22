export const route = [{
    path: '/',
    name: 'Home',
},{
    path: '/admin',
    name: 'Admin',
},{
    path: '/user',
    name: 'User',
    children: [{
        path: '/userList',
        name: 'Users List',
        meta: {
            title: 'Users List',
            icon: 'users'
        }
    },
    {
        path: '/test',
        name: 'Test',
        meta: {
            title: 'test',
            icon: 'test'
        }
    },],
},
{
    path: '/contact',
    name: 'Contact',
}]