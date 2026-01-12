
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../App';
import { PRODUCTS } from '../constants';

const ProductsPage: React.FC = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    return (
        <div className="layout-container">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 space-y-8 sticky top-24">
                            <div>
                                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-4">หมวดหมู่สินค้า</h3>
                                <div className="space-y-1">
                                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-bold text-left transition-all">
                                        <span className="material-symbols-outlined">energy_savings_leaf</span>
                                        <span className="text-sm">ผักใบเขียว</span>
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left">
                                        <span className="material-symbols-outlined">restaurant</span>
                                        <span className="text-sm">ชุดสลัดพร้อมทาน</span>
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left">
                                        <span className="material-symbols-outlined">potted_plant</span>
                                        <span className="text-sm">ชุดปลูกเอง (DIY)</span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-4">ช่วงราคา</h3>
                                <div className="px-2">
                                    <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full relative">
                                        <div className="absolute left-0 right-1/4 h-full bg-primary rounded-full"></div>
                                        <div className="absolute left-0 -top-2 w-5 h-5 bg-white border-2 border-primary rounded-full cursor-pointer shadow-sm"></div>
                                        <div className="absolute right-1/4 -top-2 w-5 h-5 bg-white border-2 border-primary rounded-full cursor-pointer shadow-sm"></div>
                                    </div>
                                    <div className="flex justify-between mt-4">
                                        <span className="text-xs font-medium text-slate-500">฿0</span>
                                        <span className="text-xs font-bold text-slate-900 dark:text-white">฿350</span>
                                        <span className="text-xs font-medium text-slate-500">฿500+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product List */}
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">ผักใบเขียว</h1>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">แสดงสินค้า 1-{PRODUCTS.length} จาก {PRODUCTS.length} รายการ</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm px-4 py-2 focus:ring-primary focus:border-primary dark:text-white transition-all outline-none">
                                    <option>ยอดนิยม</option>
                                    <option>ราคา: น้อยไปมาก</option>
                                    <option>ราคา: มากไปน้อย</option>
                                    <option>สินค้าใหม่</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {PRODUCTS.map((product) => (
                                <div 
                                    key={product.id} 
                                    onClick={() => navigate(`/product/${product.slug}`)} 
                                    className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                                >
                                    <div className="relative aspect-square overflow-hidden bg-slate-50 dark:bg-slate-800">
                                        <img 
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                            src={product.img} 
                                            alt={product.name}
                                        />
                                        {product.tag && (
                                            <span className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${product.tag === 'ลดราคา' ? 'bg-red-500' : 'bg-primary text-background-dark'}`}>
                                                {product.tag}
                                            </span>
                                        )}
                                        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors">
                                            <span className="material-symbols-outlined text-xl">favorite</span>
                                        </button>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <p className="text-xs text-primary font-bold mb-1">Organic Hydroponic</p>
                                        <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                                        <div className="mt-auto flex items-end justify-between">
                                            <div>
                                                <span className="text-2xl font-black text-slate-900 dark:text-white">฿{product.price}</span>
                                                {product.oldPrice && <span className="text-xs text-slate-400 line-through ml-2">฿{product.oldPrice}</span>}
                                                <span className="text-xs text-slate-500 ml-1">/ {product.unit}</span>
                                            </div>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    addToCart(product);
                                                }} 
                                                className="flex items-center justify-center w-10 h-10 bg-primary text-background-dark rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-110"
                                            >
                                                <span className="material-symbols-outlined">add_shopping_cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductsPage;
