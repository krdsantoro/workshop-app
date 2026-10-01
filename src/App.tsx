import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { DanyloFeaturePage } from './pages/danylo-feature/DanyloFeaturePage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/danylo-feature" element={<DanyloFeaturePage />} />
      </Routes>
    </BrowserRouter>
  );
};