import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createProduct } from '../api/api';

export default function CreateProductPage() {
  const [form, setForm] = useState({
    name: '',
    category: '',
    brand: '',
    type: '',
    minStock: 1
  });

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const res = await createProduct(form);
    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || 'Error al crear producto');
      setMessageType('error');
      return;
    }

    setMessage('Producto creado correctamente');
    setMessageType('success');

    setForm({
      name: '',
      category: '',
      brand: '',
      type: '',
      minStock: 1
    });
  };

  return (
    <div className="container">
      <h1>Crear producto</h1>

      {message && (
        <p style={{ color: messageType === 'success' ? 'green' : 'red' }}>
          {message}
        </p>
      )}

      <form onSubmit={submit}>
        <input
          placeholder="Nombre"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <select
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        >
          <option value="">Seleccionar categoría</option>
          <option value="Aceite">Aceite</option>
          <option value="Filtro">Filtro</option>
          <option value="Otro">Otro</option>
        </select>

        <input
          placeholder="Marca"
          value={form.brand}
          onChange={e => setForm({ ...form, brand: e.target.value })}
        />

        <input
          placeholder="Tipo"
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
        />

        <input
          type="number"
          min="0"
          value={form.minStock}
          onChange={e => setForm({ ...form, minStock: Number(e.target.value) })}
        />

        <button type="submit" className="primary">
          Crear
        </button>
      </form>

      <br />

      <Link to="/">
        <button className="secondary">Volver</button>
      </Link>
    </div>
  );
}