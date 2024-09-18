import React, { useState, useRef } from 'react';
import { Save, X, Camera, Plus, Minus } from 'lucide-react';

const InputField = ({ label, name, value, type = "text", onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="hide-spinner w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 bg-white"
    />
  </div>
);

const QuickAddOptions = ({ options, unit, onChange }) => (
  <div className="mt-6">
    <h2 className="text-xl font-semibold mb-3 text-gray-900">Quick Add Options</h2>
    <div className="grid grid-cols-2 gap-4">
      {options.map((option, index) => (
        <div key={index} className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md">
          <input
            type="number"
            value={option.quantity}
            onChange={(e) => onChange(index, e.target.value)}
            className="hide-spinner w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 bg-white"
          />
          <span className="text-gray-600">{unit}</span>
        </div>
      ))}
    </div>
  </div>
);

const AddProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "/api/placeholder/400/400",
    unit: "kg",
    piecesPerPack: null,
    minOrderQuantity: 1,
    actualPrice: 0,
    discountedPrice: 0,
    discountPercentage: 0,
    pricePerUnit: 0,
    quickAddOptions: [
      { quantity: 5 },
      { quantity: 10 },
    ],
  });
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleQuickAddOptionChange = (index, value) => {
    const newOptions = [...product.quickAddOptions];
    newOptions[index].quantity = value;
    setProduct(prev => ({ ...prev, quickAddOptions: newOptions }));
  };

  const handleSave = () => {
    console.log("Saving new product:", product);
    // Here you would typically send the product data to your backend
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addQuickAddOption = () => {
    setProduct(prev => ({
      ...prev,
      quickAddOptions: [...prev.quickAddOptions, { quantity: 0 }]
    }));
  };

  const removeQuickAddOption = (index) => {
    setProduct(prev => ({
      ...prev,
      quickAddOptions: prev.quickAddOptions.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className='min-h-screen bg-slate-100 flex items-center'>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
          <div className="space-x-2">
            <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
              <Save size={20} className="inline mr-2" />
              Add
            </button>
            <button onClick={() => window.history.back()} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300">
              <X size={20} className="inline mr-2" />
              Cancel
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="relative">
              <img src={product.image} alt="" className="w-full h-auto rounded-lg shadow-md object-cover aspect-square" />
              <button
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-4 right-4 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
              > 
                <Camera size={24} />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
              />
            </div>
            <QuickAddOptions
              options={product.quickAddOptions}
              unit={product.unit}
              onChange={handleQuickAddOptionChange}
            />
            <div className="mt-4 flex justify-between">
              <button onClick={addQuickAddOption} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300">
                <Plus size={20} className="inline mr-2" />
                Add Option
              </button>
              <button onClick={() => removeQuickAddOption(product.quickAddOptions.length - 1)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300">
                <Minus size={20} className="inline mr-2" />
                Remove Option
              </button>
            </div>
          </div>
          <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <InputField label="Product Name" name="name" value={product.name} onChange={handleInputChange} />
            <InputField label="Description" name="description" value={product.description} onChange={handleInputChange} />
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Measuring Unit" name="unit" value={product.unit} onChange={handleInputChange} />
              {product.unit === "pac" && (
                <InputField label="Pieces per Pack" name="piecesPerPack" value={product.piecesPerPack} type="number" onChange={handleInputChange} />
              )}
              <InputField label="Min Order Quantity" name="minOrderQuantity" value={product.minOrderQuantity} type="number" onChange={handleInputChange} />
              <InputField label="Actual Price" name="actualPrice" value={product.actualPrice} type="number" onChange={handleInputChange} />
              <InputField label="Discounted Price" name="discountedPrice" value={product.discountedPrice} type="number" onChange={handleInputChange} />
              <InputField label="Discount %" name="discountPercentage" value={product.discountPercentage} type="number" onChange={handleInputChange} />
              <InputField label="Price per Unit" name="pricePerUnit" value={product.pricePerUnit} type="number" onChange={handleInputChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;