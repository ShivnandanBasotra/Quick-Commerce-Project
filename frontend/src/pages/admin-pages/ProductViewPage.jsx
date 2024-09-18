import React, { useState, useRef } from 'react';
import { Edit2, Save, X, Camera } from 'lucide-react';

const EditableField = ({ label, name, value, type = "text", isEditing, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {isEditing ? (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 hide-spinner bg-white"
      />
    ) : (
      <p className="text-gray-900 bg-gray-100 px-3 py-2 rounded-md">{value}</p>
    )}
  </div>
);

const QuickAddOptions = ({ options, unit, isEditing, onChange }) => (
  <div className="mt-6">
    <h2 className="text-xl font-semibold mb-3 text-gray-900">Quick Add Options</h2>
    <div className="grid grid-cols-2 gap-4">
      {options.map((option, index) => (
        <div key={index} className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md">
          {isEditing ? (
            <input
              type="number"
              value={option.quantity}
              onChange={(e) => onChange(index, e.target.value)}
              className="hide-spinner w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 bg-white"
            />
          ) : (
            <span className="font-medium text-gray-900">{option.quantity}</span>
          )}
          <span className="text-gray-600">{unit}</span>
        </div>
      ))}
    </div>
  </div>
);

const ProductView = ({ initialProduct }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState(initialProduct);
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
    setIsEditing(false);
    console.log("Saving product:", product);
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

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Product Details</h1>
        {isEditing ? (
          <div className="space-x-2">
            <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
              <Save size={20} className="inline mr-2" />
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300">
              <X size={20} className="inline mr-2" />
              Cancel
            </button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 font-medium">
            <Edit2 size={20} className="inline mr-2" />
            Edit
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative">
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md object-cover aspect-square" />
            {isEditing && (
              <button 
                onClick={() => fileInputRef.current.click()} 
                className="absolute bottom-4 right-4 p-4 bg-black bg-opacity-50 hover:bg-opacity-100 text-white rounded-full  transition duration-300"
              >
                <Camera size={24} strokeWidth={2} />
              </button>
            )}
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
            isEditing={isEditing}
            onChange={handleQuickAddOptionChange}
          />
        </div>
        <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <EditableField label="Product Name" name="name" value={product.name} isEditing={isEditing} onChange={handleInputChange} />
          <EditableField label="Description" name="description" value={product.description} isEditing={isEditing} onChange={handleInputChange} />
          <div className="grid grid-cols-2 gap-4">
            <EditableField label="Measuring Unit" name="unit" value={product.unit} isEditing={isEditing} onChange={handleInputChange} />
            {product.unit === "pac" && (
              <EditableField label="Pieces per Pack" name="piecesPerPack" value={product.piecesPerPack} type="number" isEditing={isEditing} onChange={handleInputChange} />
            )}
            <EditableField label="Min Order Quantity" name="minOrderQuantity" value={product.minOrderQuantity} type="number" isEditing={isEditing} onChange={handleInputChange} />
            <EditableField label="Actual Price" name="actualPrice" value={product.actualPrice} type="number" isEditing={isEditing} onChange={handleInputChange} />
            <EditableField label="Discounted Price" name="discountedPrice" value={product.discountedPrice} type="number" isEditing={isEditing} onChange={handleInputChange} />
            <EditableField label="Discount %" name="discountPercentage" value={product.discountPercentage} type="number" isEditing={isEditing} onChange={handleInputChange} />
            <EditableField label="Price per Unit" name="pricePerUnit" value={product.pricePerUnit} type="number" isEditing={isEditing} onChange={handleInputChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage
export default function ProductViewPage() {
  const exampleProduct = {
    name: "Onion Red (New Crop, Premium, 55 mm+)",
    description: "Fresh, premium quality red onions. Grown with care and harvested at peak ripeness for the best flavor and texture.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=640&h=640&q=80",
    unit: "kg",
    piecesPerPack: null,
    minOrderQuantity: 2,
    actualPrice: 242,
    discountedPrice: 238.37,
    discountPercentage: 5,
    pricePerUnit: 47.67,
    quickAddOptions: [
      { quantity: 5 },
      { quantity: 10 },
    ],
  };

  return (
    <div className='min-h-screen bg-slate-100 flex items-center'>
      <ProductView initialProduct={exampleProduct} />;
    </div>
  ) 
}