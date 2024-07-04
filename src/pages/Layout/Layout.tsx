import { Flex, Layout as BaseLayout, Divider, Breadcrumb } from 'antd';
import s from './Layout.module.scss';
import { Content } from 'antd/es/layout/layout';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import { memo, useEffect } from 'react';

function Layout() {
  useEffect(() => {
    console.log('Mount Layout.');
    return () => console.log('Unmount Layout.');
  }, []);
  return (
    <div className={s.Layout}>
      <Flex gap='middle' wrap='wrap' className={s.container}>
        <BaseLayout>
          <Header />
          <br />
          <Breadcrumb />
          <Divider style={{ margin: '16px 0' }} />
          <BaseLayout style={{ background: '#fff' }}>
            <Content>
              <Outlet />
            </Content>
          </BaseLayout>
          <Footer />
        </BaseLayout>
      </Flex>
    </div>
  );
}

export default memo(Layout);
