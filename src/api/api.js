const API_URL = 'https://backend-lubricentro.onrender.com/api';

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

export const getLowStock = async () => {
  const res = await fetch(`${API_URL}/products/low-stock`);
  return res.json();
};

export const createMovement = async (data) => {
  const res = await fetch(`${API_URL}/movements`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return res.json();
};
