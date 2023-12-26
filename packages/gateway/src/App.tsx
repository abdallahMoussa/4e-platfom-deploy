
import './App.css';
import Gateway from './app/routes/GatewayRoutes';
import React from 'react'
import ReactDOM from 'react-dom'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'

// Apps
import { MetronicI18nProvider } from './app/i18n/Metronici18n'

import './app/assets/sass/style.scss'
import './app/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'
import ToolbarProvider from "./app/layout/core/ToolbarProvider";
import GatewayRoutes from './app/routes/GatewayRoutes';



setupAxios(axios)

Chart.register(...registerables)

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <MetronicI18nProvider>
      <AuthProvider>
      <ToolbarProvider>
        <div className="App">
              <AppRoutes />
              {/* <GatewayRoutes /> */}
        </div>
          </ToolbarProvider>
      </AuthProvider>
    </MetronicI18nProvider>
  </QueryClientProvider>
    
  );
}

export default App;


