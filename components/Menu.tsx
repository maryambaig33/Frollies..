import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Berry Blast Off',
    description: 'A strawberry and blueberry swirl with fresh raspberry topping.',
    price: 6.99,
    category: 'froyo',
    image: 'https://picsum.photos/400/300?random=1',
    calories: 280
  },
  {
    id: '2',
    name: 'Mango Tango',
    description: 'Fresh mango chunks layered with vanilla bean yogurt.',
    price: 7.49,
    category: 'froyo',
    image: 'https://picsum.photos/400/300?random=2',
    calories: 310
  },
  {
    id: '3',
    name: 'Matcha Zen',
    description: 'Earth matcha green tea blend with mochi bites.',
    price: 8.99,
    category: 'smoothie',
    image: 'https://picsum.photos/400/300?random=3',
    calories: 190
  },
  {
    id: '4',
    name: 'Choco-Lot',
    description: 'Dark chocolate yogurt with brownie crumbles and fudge.',
    price: 7.99,
    category: 'froyo',
    image: 'https://picsum.photos/400/300?random=4',
    calories: 450
  },
  {
    id: '5',
    name: 'Acai Dream',
    description: 'Organic Acai bowl base with granola and honey.',
    price: 9.99,
    category: 'smoothie',
    image: 'https://picsum.photos/400/300?random=5',
    calories: 340
  },
  {
    id: '6',
    name: 'Unicorn Swirl',
    description: 'Cotton candy flavor with rainbow sprinkles.',
    price: 6.49,
    category: 'froyo',
    image: 'https://picsum.photos/400/300?random=6',
    calories: 300
  },
];

const Menu: React.FC = () => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Signature Swirls</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Handcrafted daily using only the freshest ingredients. From classic comforts to daring new tastes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-gray-600">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="text-frollie-pink font-bold">${product.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4 flex-grow">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-gray-400">{product.calories} cal</span>
                  <button className="bg-gray-50 hover:bg-frollie-pink hover:text-white text-gray-900 p-2 rounded-full transition-colors">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;