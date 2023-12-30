import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

const DashboardLayout = React.lazy(() => import('./pages/Dashboard/Layout'));
const CreateAdSLayout = React.lazy(() => import('./pages/CreateAds/Layout'));
const CreateTextMediaAdLayout = React.lazy(() => import('./pages/CreateTextMediaAd/Layout'));

function App() {

  return (
    <BrowserRouter>
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<DashboardLayout />} />
          <Route path="/ad/new" element={<CreateAdSLayout />} />
          <Route path="/ad/new/:type" element={<CreateTextMediaAdLayout />} />
          <Route path="*" element={<DashboardLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
