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
    name: 'Users',
    url: '/dashboard/users',
    icon: 'icon-star',
    children: [
      {
        name: 'Users List',
        url: '/dashboard/users',
        icon: 'icon-drop'
      },
      {
        name: 'Add User',
        url: '/dashboard/users/add',
        icon: 'icon-pencil'
      }
    ]
  },
  {
    name: 'Contact Register',
    url: '/dashboard/enquiry',
    icon: 'icon-star',
    children: [
      {
        name: 'Enquiry Register',
        url: '/dashboard/enquiry',
        icon: 'icon-pencil'
      },
      {
        name: 'Suggestion Register',
        url: '/dashboard/suggestion',
        icon: 'icon-drop'
      }      
    ]
  },
  {
    name: 'Account',
    url: '/dashboard/enquiry',
    icon: 'icon-star',
    children: [
      {
        name: 'Payment',
        url: '/dashboard/enquiry',
        icon: 'icon-pencil'
      },
      {
        name: 'Advance/Payment',
        url: '/dashboard/suggestion',
        icon: 'icon-drop'
      },
      {
        name: 'Payment Register',
        url: '/dashboard/suggestion',
        icon: 'icon-drop'
      } ,
      {
        name: 'Advance Entry',
        url: '/dashboard/suggestion',
        icon: 'icon-drop'
      } ,
      {
        name: 'Payment Request',
        url: '/dashboard/suggestion',
        icon: 'icon-drop'
      }       
    ]
  }

];