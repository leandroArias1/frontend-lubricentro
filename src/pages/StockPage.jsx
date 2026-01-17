import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../api/api';

export default function StockPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="container">
      <h1>Stock</h1>

      {products.length === 0 ? (
        <p>No hay productos cargados</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Marca</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.brand}</td>
                <td>{p.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br />

      <Link to="/movement">
        <button className="primary">Registrar movimiento</button>
      </Link>

      <Link to="/create-product">
        <button className="secondary">Crear producto</button>
      </Link>

      <Link to="/delete-product">
        <button className="danger">Eliminar producto</button>
      </Link>
    </div>
  );
}
