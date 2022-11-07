import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function MenuBar() {
  const items = [
    {
      key: 'recherche',
      name: 'Recherche',
      as: NavLink,
      to: '/',
      color: 'teal',
    },
    {
      key: 'faq',
      name: 'Faq',
      as: NavLink,
      to: '/faq',
      color: 'teal',
    },
  ];

  return (
    <Menu items={items} />
  );
}

export default MenuBar;
