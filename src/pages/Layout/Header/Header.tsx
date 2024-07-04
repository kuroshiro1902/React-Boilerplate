import { Avatar, Dropdown, Flex, Menu, Space } from 'antd';
import s from './Header.module.scss';
import { Header as AntdHeader } from 'antd/es/layout/layout';

import { useMemo } from 'react';
import { FaCaretDown, FaUser } from 'react-icons/fa';
import { MenuItemType } from 'antd/es/menu/interface';
import useHeaderStore from '@/stores/headerStore';
import useAuthStore from '@/stores/authStore';
import { useNavigate } from 'react-router-dom';
interface props {}

function Header({}: props) {
  // const location = useLocation();
  const navigate = useNavigate();
  const { headerItems, currentItemIndex, handleSelectedKey } = useHeaderStore();
  const { user, setAuth } = useAuthStore();

  const userItems = useMemo<MenuItemType[]>(
    () => [
      {
        key: 'logout',
        label: 'Đăng xuất',
        onClick: () => setAuth({ user: undefined, token: null }),
      },
    ],
    []
  );

  return (
    <AntdHeader className={s.Header}>
      <Menu
        theme='dark'
        mode='horizontal'
        selectedKeys={[`${headerItems[currentItemIndex].key}`]}
        onSelect={(e) => {
          handleSelectedKey(e.key);
        }}
        items={headerItems.map((item) => ({
          ...item,
          onClick: () => {
            navigate(item.href ?? '/');
          },
        }))}
        className={s.menu}
      />
      <Flex>
        <Dropdown
          // trigger={['click']}
          menu={{ items: userItems }}
          className='hover:bg-blue-600'
          // onClick={() => enterLoading(1)}
        >
          <Space className='text-white cursor-pointer transition'>
            <Avatar
              icon={!user?.avatarUrl ? <FaUser size={18} /> : undefined}
              src={user?.avatarUrl}
            />
            <span>{user?.name}</span>
            <FaCaretDown size={18} />
          </Space>
        </Dropdown>
      </Flex>
    </AntdHeader>
  );
}

export default Header;
