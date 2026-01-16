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

    if (!productId) {
      alert('Seleccioná un producto');
      return;
    }

    await createMovement({
      productId,
      type,
      quantity: Number(quantity)
    });

    onSuccess(); // ✅ refresca stock
    setQuantity(1);
  };

  return (
    <form onSubmit={submit}>
      <h2>Registrar movimiento</h2>

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
        onChange={e => setQuantity(e.target.value)}
      />

      <button type="submit">Guardar</button>
    </form>
  );
}
