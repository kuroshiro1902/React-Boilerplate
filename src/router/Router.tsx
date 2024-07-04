import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import { lazy, Suspense } from 'react';
import { Layout } from '../pages/Layout';
import { AuthPage } from '../pages/Auth';
import { HomePage } from '../pages/Home';

// const ProjectDetailPage = lazy(() => import('../pages/ProjectDetail'));

const LazyPage = ({ children }: any) => (
  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
);

export default function AppRouter() {
  return (
    <Routes>
      <Route path='login' element={<AuthPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} index />q
          {/* <Route key="project" path="/project" element={<Project />} /> */}
          <Route
            key='project-detail'
            path='/project/:id'
            element={<LazyPage>{/* <ProjectDetailPage /> */}</LazyPage>}
          />
        </Route>
      </Route>
    </Routes>
  );
}
