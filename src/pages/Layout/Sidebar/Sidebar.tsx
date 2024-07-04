import Sider from 'antd/es/layout/Sider';
import s from './Sidebar.module.scss'
import { Layout, Menu } from 'antd';
interface props{
	
};

function Sidebar({}: props){
  const items = [
    { key: 'home', label: 'Home' },
    { key: 'messenger', label: 'Messenger' },
  ];

  return (
    <div className={s.Sidebar}>
       <Layout hasSider
         className='overflow-auto fixed left-0 top-1/2 translate-y--2/3'
       >
      <Sider
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      </Layout>
    </div>
  )
};

export default Sidebar;
