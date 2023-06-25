import sidebar1 from '../assets/icons/sidebar-icon-1.svg';
import sidebar2 from '../assets/icons/sidebar-icon-2.svg';
import sidebar3 from '../assets/icons/sidebar-icon-3.svg';
import sidebar4 from '../assets/icons/sidebar-icon-4.svg';
import sidebar5 from '../assets/icons/sidebar-icon-5.svg';
import sidebar6 from '../assets/icons/sidebar-icon-6.svg';
import sidebar7 from '../assets/icons/sidebar-icon-7.svg';
import logoutIcon from '../assets/icons/logout-icon.svg';
import { IUser } from '../types/types';

type TSidebarLink = {
  label: string;
  path: string;
  logo: string;
};

export const sidebarLinks: TSidebarLink[] = [
  { label: 'Аналитика', path: '/', logo: sidebar1 },
  { label: 'Курс валют', path: '/', logo: sidebar2 },
  { label: 'Блог', path: '/', logo: sidebar3 },
  { label: 'Монетизация', path: '/', logo: sidebar4 },
  { label: 'Баннеры', path: '/', logo: sidebar5 },
  { label: 'Команда', path: '/', logo: sidebar6 },
  { label: 'Модерация', path: '/', logo: sidebar7 },
  { label: 'Выйти', path: '/', logo: logoutIcon },
];

export const USERS: IUser[] = [
  {
    name: 'Артем Иванов',
    email: 'artem@gmail.com',
    permissions: ['Блог', 'Аналитика'],
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Лена Новикова',
    email: 'lenkan@gmail.com',
    permissions: ['Администратор'],
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    name: 'Максим Иванов',
    email: 'maksiim@gmail.com',
    permissions: ['Акции', 'Модерация объявлений', 'Тех. поддержка'],
    image:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
  },
  {
    name: 'Айжулдыз Кошкинбай',
    email: 'aizhzk@gmail.com',
    permissions: ['Обращение клиентов'],
    image: 'https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg',
  },
];

export const permissionOptions = [
  'Все',
  'Модерация объявлений',
  'Блог',
  'Тех. поддержка',
  'Обращения клиентов',
  'Аналитика',
  'Акции',
];
