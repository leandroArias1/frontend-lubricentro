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
        <Route path="/movements" element={<MovementsPage />} />
        <Route path="/products/new" element={<CreateProductPage />} />
        <Route path="/products/delete" element={<DeleteProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
