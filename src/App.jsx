import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StockPage from './pages/StockPage';
import MovementsPage from './pages/MovementsPage';
import CreateProductPage from './pages/CreateProductPage';
import DeleteProductPage from './pages/DeleteProductPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StockPage />} />
        <Route path="/movement" element={<MovementsPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="/delete-product" element={<DeleteProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
