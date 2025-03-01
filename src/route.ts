export const route = [{
    path: '/',
    name: 'Home',
},{
    path: '/admin',
    name: 'Admin',
},
{
    path: '/movie',
    name: 'Movie',
    children: [{
        path: '/movie/add',
        name: 'Add Movies',
        meta: {
            title: 'Add Movies',
            icon: 'movie'
        }
    },
    {
        path: '/movie/movies-list',
        name: 'Movies List',
        meta: {
            title: 'Movies list',
            icon: 'movieList'
        }
    }]
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