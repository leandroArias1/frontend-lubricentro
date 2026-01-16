export default function ProductTable({ products }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ background: '#f1f5f9' }}>
          <th align="left">Producto</th>
          <th align="left">Marca</th>
          <th align="left">Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p._id} style={{ borderBottom: '1px solid #e5e7eb' }}>
            <td>{p.name}</td>
            <td>{p.brand}</td>
            <td>
              <strong
                style={{
                  color:
                    p.stock === 0
                      ? '#dc2626'
                      : p.stock <= p.minStock
                      ? '#f59e0b'
                      : '#16a34a'
                }}
              >
                {p.stock}
              </strong>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
