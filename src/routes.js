import React from 'react';
import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdForest,
  MdPublic,
} from 'react-icons/md';

// Use folder names—these will use the index.jsx in each folder
import MainDashboard from 'views/admin/default';

import DataTables from 'views/admin/dataTables';
import Profile from 'views/admin/profile';
import RTL from 'views/admin/rtl';


const routes = [
  {
    name: 'Carbon Dashboard',
    layout: '/admin',
    path: '/dashboard',
    icon: <Icon as={MdForest} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Emissions Data',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/emissions-data',
    component: <DataTables />,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'Wallet',
    layout: '/rtl',
    path: '/rtl-dashboard',
    icon: <Icon as={MdPublic} width="20px" height="20px" color="inherit" />,
    component: <RTL />,
  },
];

export default routes;
