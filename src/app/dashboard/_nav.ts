export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Users'
  },
  {
    name: 'List',
    url: '/dashboard/users',
    icon: 'icon-drop'
  },
  {
    name: 'Add New',
    url: '/dashboard/users/add',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },  
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/dashboard/login',
        icon: 'icon-star'
      }
    ]
  }  
];
