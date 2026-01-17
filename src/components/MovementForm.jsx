import { useEffect, useState } from 'react';
import { getProducts, createMovement } from '../api/api';

export default function MovementForm({ onSuccess }) {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [type, setType] = useState('entrada');
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const res = await createMovement({
      productId,
      type,
      quantity
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || 'Error al registrar movimiento');
      setMessageType('error');
      return;
    }

    setMessage('Movimiento registrado correctamente');
    setMessageType('success');

    setProductId('');
    setQuantity(1);

    onSuccess && onSuccess();
  };

  return (
    <div className="container">
      <h1>Registrar movimiento</h1>

      {message && (
        <p style={{ color: messageType === 'success' ? 'green' : 'red' }}>
          {message}
        </p>
      )}

      <form onSubmit={submit}>
        <select value={productId} onChange={e => setProductId(e.target.value)}>
          <option value="">Seleccionar producto</option>
          {products.map(p => (
            <option key={p._id} value={p._id}>
              {p.name}
            </option>
          ))}
        </select>

        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="entrada">Entrada</option>
          <option value="salida">Salida</option>
        </select>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
        />

        <button type="submit" className="primary">
          Guardar
        </button>
      </form>
    </div>
  );
}