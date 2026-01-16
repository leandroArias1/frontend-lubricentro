import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../api/api';

export default function DeleteProductPage() {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const deleteProduct = async () => {
    setMessage(null);

    if (!productId) {
      setMessage('Seleccioná un producto');
      setMessageType('error');
      return;
    }

    const res = await fetch(
      `http://localhost:3000/api/products/${productId}`,
      { method: 'DELETE' }
    );

    const data = await res.json();

    if (!res.ok) {
      // ❌ Error real del backend
      setMessage(data.message);
      setMessageType('error');
      return;
    }

    // ✅ Éxito real
    setMessage(data.message);
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

      <select value={productId} onChange={e => setProductId(e.target.value)}>
        <option value="">Seleccionar producto</option>
        {products.map(p => (
          <option key={p._id} value={p._id}>
            {p.name}
          </option>
        ))}
      </select>

      <button className="danger" onClick={deleteProduct}>Eliminar</button>

      <br /><br />

      <Link to="/">
        <button className="secondary">Volver</button>
      </Link>
    </div>
  );
}
