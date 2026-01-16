import { useState } from 'react';
import { Link } from 'react-router-dom';
import MovementForm from '../components/MovementForm';

export default function MovementsPage() {
  const [message, setMessage] = useState(null);

  return (
    <div className="container">
      <h1>Registrar movimiento</h1>

      {message && <p style={{ color: 'green' }}>{message}</p>}

      <MovementForm
        onSuccess={() => setMessage('Movimiento registrado correctamente')}
      />

      <br />

      <Link to="/">
        <button className="secondary">Volver al stock</button>
      </Link>
    </div>
  );
}
