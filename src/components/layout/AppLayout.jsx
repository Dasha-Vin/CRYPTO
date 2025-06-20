import { Layout, Spin } from 'antd';
import AppSider from './AppSider';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import CryptoContext from '../../context/crypto-context';
import { useContext } from 'react';

export default function AppLayout() {
    const { loading } = useContext(CryptoContext)

    if (loading) {
    return <Spin fullscreen />
  }

    return (
    <Layout>
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </Layout>
    )
}