import React, { useState } from 'react';
import { BookOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
const items = [
  {
    label: <NavLink to={"/"}>Students</NavLink>,
    key: 'users',
    icon: <UserOutlined />,
  },
  { 
    label: <NavLink to={"teachers"}>Teachers</NavLink>,
    key: 'teachers',
    icon: <BookOutlined />,
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu className='p-2' theme='dark' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navbar;