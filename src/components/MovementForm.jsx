import { useEffect, useState } from 'react';
import { getProducts, createMovement } from '../api/api';

export default function MovementForm({ onSuccess }) {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [type, setType] = useState('entrada');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    const res = await createMovement({
      productId,
      type,
      quantity
    });

    const data = await res.json();

    if (!res.ok) {
      // En V1 mostramos error simple
      alert(data.message || 'Error al registrar movimiento');
      return;
    }

    setProductId('');
    setQuantity(1);

    // 👉 El mensaje de éxito lo maneja el componente padre
    onSuccess && onSuccess();
  };

  return (
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
  );
}