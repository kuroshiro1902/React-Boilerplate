import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer autoClose={1500} />
        <>
          <AuthProvider>
            {/* <HeaderProvider> */}
            <Router />
            {/* </HeaderProvider> */}
          </AuthProvider>
        </>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
