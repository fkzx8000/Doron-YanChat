import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "@/components/ui/provider"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


import App from './App'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider>
      <StrictMode>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </StrictMode>
    </Provider>

  </QueryClientProvider>
)
