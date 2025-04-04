import React, { useState, Fragment } from 'react';
import { Menu, ShoppingCart, Package, BarChart3, Settings, Search, Plus, Minus, Trash2, CreditCard, History, Users, ChevronRight, X, Upload } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';

// Mock data for demonstration
const products = [
  { id: 1, name: 'Espresso', price: 3500, category: 'Beverages', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400' },
  { id: 2, name: 'Cappuccino', price: 4500, category: 'Beverages', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400' },
  { id: 3, name: 'Croissant', price: 3000, category: 'Pastries', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400' },
  { id: 4, name: 'Latte', price: 4000, category: 'Beverages', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400' },
  { id: 5, name: 'Muffin', price: 2500, category: 'Pastries', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400' },
  { id: 6, name: 'Green Tea', price: 3000, category: 'Beverages', image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400' },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface SalesMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

const salesMetrics: SalesMetric[] = [
  { label: 'Today\'s Sales', value: 'Rp.1,240.500', change: '+12.5%', trend: 'up' },
  { label: 'Total Orders', value: '48', change: '+8.2%', trend: 'up' },
  { label: 'Average Order', value: 'Rp.25.840', change: '-2.1%', trend: 'down' },
];

type ViewType = 'pos' | 'dashboard' | 'inventory' | 'history' | 'users' | 'settings';

interface AddStaffModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddStaffModal: React.FC<AddStaffModalProps> = ({ isOpen, onClose }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                >
                  Add New Staff Member
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </Dialog.Title>

                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                      <option>Cashier</option>
                      <option>Manager</option>
                      <option>Admin</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Permissions</label>
                    <div className="mt-2 space-y-2">
                      {['POS Access', 'Inventory Management', 'Reports Access', 'Staff Management'].map((permission) => (
                        <label key={permission} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{permission}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Add Staff Member
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onClose }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                >
                  Add New Product
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </Dialog.Title>

                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter product name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                      <option>Beverages</option>
                      <option>Pastries</option>
                      <option>Snacks</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">Rp.</span>
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-7 pr-12 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Initial Stock</label>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter initial stock quantity"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Product Image</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Add Product
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeView, setActiveView] = useState<ViewType>('pos');
  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  const addToCart = (product: typeof products[0]) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id);
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeCategory === 'All' || product.category === activeCategory)
  );

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const renderMetricCard = (metric: SalesMetric) => (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-gray-500 text-sm">{metric.label}</h3>
      <div className="flex items-end gap-2 mt-2">
        <span className="text-2xl font-bold">{metric.value}</span>
        <span className={`text-sm Rp.{metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {metric.change}
        </span>
      </div>
    </div>
  );

  const renderInventory = () => (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Inventory Management</h1>
        <p className="text-gray-600">Track and manage your product inventory</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search inventory..."
              className="w-full pl-12 pr-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => setIsAddProductModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4">Product</th>
              <th className="text-left py-4">Category</th>
              <th className="text-left py-4">Price</th>
              <th className="text-left py-4">Stock</th>
              <th className="text-left py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                    <span className="font-medium">{product.name}</span>
                  </div>
                </td>
                <td className="py-4">{product.category}</td>
                <td className="py-4">Rp.{product.price.toLocaleString('id-ID')}</td>
                <td className="py-4">124</td>
                <td className="py-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">In Stock</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Order History</h1>
        <p className="text-gray-600">View and manage past transactions</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">Order #{2023 + index}</h3>
                  <p className="text-sm text-gray-500">March {15 + index}, 2024 • 2:30 PM</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">Completed</span>
              </div>
              <div className="flex gap-4 mb-4">
                {products.slice(0, 2).map(product => (
                  <img key={product.id} src={product.image} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
                ))}
              </div>
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-gray-600">3 items</span>
                <span className="font-semibold">Rp.24.500</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Staff Management</h1>
        <p className="text-gray-600">Manage your team and permissions</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search staff..."
              className="w-full pl-12 pr-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => setIsAddStaffModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Add Staff
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Staff Member {index + 1}</h3>
                  <p className="text-sm text-gray-500">Cashier</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600">Last active: 2 hours ago</p>
                <div className="mt-2 flex gap-2">
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">POS Access</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">Inventory</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Settings</h1>
        <p className="text-gray-600">Configure your POS system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter store name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
              <select className="w-full px-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Rupiah (Rp.)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
              <select className="w-full px-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Eastern Time (ET)</option>
                <option>Pacific Time (PT)</option>
                <option>UTC</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Receipt Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="text-sm text-gray-700">Print receipt automatically</span>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="text-sm text-gray-700">Include store logo</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Footer Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Enter receipt footer message"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
          <div className="space-y-4">
            {['Credit Card', 'Cash', 'Mobile Payment', 'Gift Cards'].map((method, index) => (
              <label key={index} className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="text-sm text-gray-700">{method}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            {[
              'Low inventory alerts',
              'Daily sales summary',
              'New order notifications',
              'Staff login alerts'
            ].map((notification, index) => (
              <label key={index} className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="text-sm text-gray-700">{notification}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600">Overview of your business performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {salesMetrics.map((metric, index) => (
          <div key={index}>{renderMetricCard(metric)}</div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">Order #{2023 + index}</p>
                  <p className="text-sm text-gray-500">2 items • Rp.24.500</p>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Popular Items</h2>
          <div className="space-y-4">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="flex items-center gap-4 py-2 border-b">
                <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">Rp.{product.price.toLocaleString('id-ID')}</p>
                </div>
                <span className="text-sm text-gray-500">142 sold</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPOS = () => (
    <div className="flex-1 flex">
      {/* Products Section */}
      <div className="flex-1 p-8">
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6 flex gap-4">
          {['All', 'Beverages', 'Pastries'].map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg Rp.{
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => addToCart(product)}
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-blue-600 font-medium">Rp.{product.price.toLocaleString('id-ID')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="w-96 bg-white shadow-lg p-6 flex flex-col">
        <h2 className="text-2xl font-semibold mb-6">Current Order</h2>
        
        <div className="flex-1 overflow-auto">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between py-3 border-b">
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">Rp.{item.price.toLocaleString('id-ID')}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => updateQuantity(item.id, -item.quantity)}
                  className="p-1 hover:bg-gray-100 rounded text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-2xl font-bold text-blue-600">Rp.{total.toFixed(2)}</span>
          </div>
          <div className="space-y-4">
            <button
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              onClick={() => setCart([])}
            >
              <CreditCard className="w-5 h-5" />
              Complete Payment
            </button>
            <button
              className="w-full bg-gray-100 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              onClick={() => setCart([])}
            >
              Clear Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-20 bg-white shadow-lg flex flex-col items-center py-6 gap-8">
        <Menu className="w-8 h-8 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
        <div className="flex flex-col gap-6">
          <button
            onClick={() => setActiveView('pos')}
            className={`p-2 rounded-lg transition-colors Rp.{
              activeView === 'pos' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <ShoppingCart className="w-8 h-8" />
          </button>
          <button
            onClick={() => setActiveView('dashboard')}
            className={`p-2 rounded-lg transition-colors Rp.{
              activeView === 'dashboard' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <BarChart3 className="w-8 h-8" />
          </button>
          <button
            onClick={() => setActiveView('inventory')}
            className={`p-2 rounded-lg transition-colors Rp.{
              activeView === 'inventory' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Package className="w-8 h-8" />
          </button>
          <button
            onClick={() => setActiveView('history')}
            className={`p-2 rounded-lg transition-colors Rp.{
              activeView === 'history' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <History className="w-8 h-8" />
          </button>
          <button
            onClick={() => setActiveView('users')}
            className={`p-2 rounded-lg transition-colors Rp.{
              activeView === 'users' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Users className="w-8 h-8" />
          </button>
          <button
            onClick={() => setActiveView('settings')}
            className={`p-2 rounded-lg transition-colors Rp.{
              activeView === 'settings' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Settings className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      {activeView === 'pos' && renderPOS()}
      {activeView === 'dashboard' && renderDashboard()}
      {activeView === 'inventory' && renderInventory()}
      {activeView === 'history' && renderHistory()}
      {activeView === 'users' && renderUsers()}
      {activeView === 'settings' && renderSettings()}

      {/* Modals */}
      <AddStaffModal
        isOpen={isAddStaffModalOpen}
        onClose={() => setIsAddStaffModalOpen(false)}
      />
      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
      />
    </div>
  );
}

export default App;