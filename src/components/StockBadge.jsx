export default function StockBadge({ stock, minStock }) {
  let color = 'green';

  if (stock <= minStock) color = 'orange';
  if (stock === 0) color = 'red';

  return (
    <span style={{ color, fontWeight: 'bold' }}>
      {stock}
    </span>
  );
}
