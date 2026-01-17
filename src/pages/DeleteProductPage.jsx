import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from '../api/api';

export default function DeleteProductPage() {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!productId) {
      setMessage('Seleccioná un producto');
      setMessageType('error');
      return;
    }

    const res = await deleteProduct(productId);
    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || 'Error al eliminar producto');
      setMessageType('error');
      return;
    }

    setMessage('Producto eliminado correctamente');
    setMessageType('success');

    // refrescar lista
    const updated = await getProducts();
    setProducts(updated);
    setProductId('');
  };

  return (
    <div className="container">
      <h1>Eliminar producto</h1>

      {message && (
        <p style={{ color: messageType === 'success' ? 'green' : 'red' }}>
          {message}
        </p>
      )}

      <form onSubmit={submit}>
        <select
          value={productId}
          onChange={e => setProductId(e.target.value)}
        >
          <option value="">Seleccionar producto</option>
          {products.map(p => (
            <option key={p._id} value={p._id}>
              {p.name}
            </option>
          ))}
        </select>

        <button type="submit" className="danger">
          Eliminar producto
        </button>
      </form>

      <br />

      <Link to="/">
        <button className="secondary">Volver</button>
      </Link>
    </div>
  );
}
