import { useState, useEffect } from "react";
import axios from "axios";

function Products() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const timestamp = localStorage.getItem("timestamp");

  const headers = {
    Authorization: token,
    "Token-Timestamp": timestamp,
    "User-Email": email,
  };

  const fetchProducts = async () => {
    
  }

  const handleAddProduct = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/products",
        { name, details },
        { headers }
      );

      setName("");
      setDetails("");
    } catch (error) {
      console.error(error.response?.data || "Failed to add product");
    }
  };

  const handleUpdateProduct = async (id) => {

  }

  const handleDeleteProduct = async (id) => {

  }

  return (
    <div className="min-h-screen flex justify-center text-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Products</h2>

        {/* Product Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddProduct}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add Product
          </button>
        </div>

        {/* Products Table (No Data Displayed) */}
        <div className="mt-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
