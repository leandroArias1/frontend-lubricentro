import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts } from '../api/api';
import ProductTable from '../components/ProductTable';

export default function StockPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="container">
      <h1>Stock</h1>

      <ProductTable products={products} />

      <hr />

      <Link to="/movements">
        <button>Registrar movimiento</button>
      </Link>

      <Link to="/products/new">
        <button>Crear producto</button>
      </Link>

      <Link to="/products/delete">
        <button>Eliminar producto</button>
      </Link>
    </div>
  );
}
