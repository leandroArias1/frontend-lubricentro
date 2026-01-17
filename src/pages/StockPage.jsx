import { Link } from 'react-router-dom';

export default function StockPage() {
  return (
    <div className="container">
      <h1>Stock</h1>

      {/* acá va la tabla de productos */}

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
