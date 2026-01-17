const API_URL = import.meta.env.VITE_API_URL;

// PRODUCTOS
export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
}

export async function createProduct(data) {
  const res = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res;
}

export async function deleteProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE'
  });
  return res;
}

// MOVIMIENTOS
export async function createMovement(data) {
  const res = await fetch(`${API_URL}/movements`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res;
}