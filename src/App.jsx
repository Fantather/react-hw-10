import './App.css'

import WeatherPage from './components/WeatherPage/WeatherPage';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherPage />
    </QueryClientProvider>
  )
}

export default App;
