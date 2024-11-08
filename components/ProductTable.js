import React, { useState, useEffect } from 'react';
export default function ProductTable() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json(); 
            setProducts(data); 
            setFilteredProducts(data); 
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        fetchProducts();
    }, []);
     // Handle the search query change and filter products
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query) // Case insensitive filtering
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
        <h2>Product List</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products by title"
        value={searchQuery}
        onChange={handleSearch}
        style={{ padding: '8px', margin: '10px 0', width: '100%' }}
      />

      {/* Table to display products */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.slice(0, 20).map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '50px', height: '50px' }}
                />
              </td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}