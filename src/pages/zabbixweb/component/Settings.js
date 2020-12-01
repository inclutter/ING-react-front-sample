import { Button, Dropdown, Menu, message } from 'antd'
import React from 'react'
import { SettingOutlined, UserOutlined } from '@ant-design/icons';

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

const menu = (
<Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
    1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
    2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
    3rd menu item
    </Menu.Item>
</Menu>
);

export default function Settings() {    
  return (
    <Dropdown overlay={menu}>
        <Button shape="circle" icon={<SettingOutlined />}/>
     </Dropdown>
  );
}
