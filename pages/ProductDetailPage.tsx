
import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../App';
import { PRODUCTS } from '../constants';

const ProductDetailPage: React.FC = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const product = useMemo(() => PRODUCTS.find(p => p.slug === slug), [slug]);

    if (!product) return <div className="py-20 text-center font-bold text-xl">ไม่พบสินค้า</div>;

    const thumbnails = [
        product.img,
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD2nEKOSSK3yf1P3empY06ir009IVjveK93SYg8avlFVQFgUdbq4GhkS44uQUw1IutdirAToWBbvVEIKVULzSQR8dqxpPAdUQaYE8SpB-SwV-5nKKaHUtIETq6FItU9sM-M4zJheeLY59VbBxNsStOT9NVS4EIxPcRVX4hd96kj34qB90f7nHtfJDB4O0Xjz4T20R0sgftvPln3QExxgGruGfiXdTqfzWGUlQtEMuENct-WoPUdSKnHfUtWdjVweBejgtbMCeiK4-Yd',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAvjQqmTtptxCMnlkWP6LJ1Y-VWq25O7Hc1oHYLyQRafDsprayE7_in_U-grOBl3tuAFWp1029jEXhYUURqvEz-0C3wU4qsdD_95hlPan9HZSgWN9MXS4Yqo5pzVw4lmCyZk1IPG5z7CdFR96gxIVpBI6R2Nw4U4HFJc3W6ZIWvoOeHCl0iCTdh9ye7zuFEnLfJ3O5EeCq2MmW4UKtqKHUkQOJrjcRzlsmDoi1k-Qgdd-QK4h3-hkds5LKremk8dR1PWshL9F9lMA9-',
    ];

    const [activeImg, setActiveImg] = useState(thumbnails[0]);

    const handleAddToCart = () => {
        for(let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        navigate('/cart');
    };

    return (
        <div className="layout-container">
            <main className="flex flex-1 justify-center py-8">
                <div className="layout-content-container flex flex-col max-w-[1200px] w-full px-6 md:px-10">
                    <nav className="flex flex-wrap gap-2 py-4 mb-4 text-sm font-medium">
                        <Link className="text-sage-600 hover:text-primary transition-colors" to="/">หน้าแรก</Link>
                        <span className="text-sage-600">/</span>
                        <Link className="text-sage-600 hover:text-primary transition-colors" to="/products">ผักสลัด</Link>
                        <span className="text-sage-600">/</span>
                        <span className="text-[#111811] dark:text-white">{product.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div className="flex flex-col gap-4">
                            <div className="aspect-square w-full rounded-xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                                <div className="w-full h-full bg-cover bg-center transition-all duration-500" style={{backgroundImage: `url("${activeImg}")`}}></div>
                            </div>
                            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                {thumbnails.map((url, i) => (
                                    <div 
                                        key={i} 
                                        onClick={() => setActiveImg(url)}
                                        className={`size-20 flex-shrink-0 rounded-lg border overflow-hidden cursor-pointer transition-all ${activeImg === url ? 'border-primary border-2 scale-105' : 'border-slate-200 dark:border-slate-800'}`}
                                    >
                                        <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url("${url}")`}}></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20">ปลอดสารพิษ</span>
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20">สดจากฟาร์ม</span>
                                </div>
                                <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">{product.name}</h1>
                                <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                                    {product.description}
                                </p>
                                <div className="flex items-end gap-2 mb-8">
                                    <span className="text-3xl font-bold text-primary">฿{product.price.toFixed(2)}</span>
                                    <span className="text-slate-500 dark:text-slate-400 text-sm mb-1">/ {product.unit}</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">จำนวนที่ต้องการ</p>
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 w-full sm:w-auto">
                                        <button 
                                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                            className="p-3 hover:text-primary transition-colors text-slate-500"
                                        >
                                            <span className="material-symbols-outlined">remove</span>
                                        </button>
                                        <span className="w-12 text-center font-bold text-slate-900 dark:text-white">{quantity}</span>
                                        <button 
                                            onClick={() => setQuantity(q => q + 1)}
                                            className="p-3 hover:text-primary transition-colors text-slate-500"
                                        >
                                            <span className="material-symbols-outlined">add</span>
                                        </button>
                                    </div>
                                    <button 
                                        onClick={handleAddToCart}
                                        className="w-full sm:flex-1 bg-primary text-background-dark font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#11d611] transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/20"
                                    >
                                        <span className="material-symbols-outlined">shopping_basket</span> เพิ่มลงตะกร้า
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-8">
                                <h3 className="font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                                    <span className="material-symbols-outlined text-primary">verified_user</span> 
                                    การันตีความสดใหม่
                                </h3>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check</span> เก็บเกี่ยวในวันที่จัดส่ง</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check</span> ปลอดสารพิษและแมลง 100%</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check</span> บรรจุภัณฑ์เป็นมิตรต่อสิ่งแวดล้อม</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900 dark:text-white">
                            <span className="material-symbols-outlined text-primary">nutrition</span> 
                            ข้อมูลทางโภชนาการ (ต่อ 100 กรัม)
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                {icon:'local_fire_department', label:'แคลอรี่', value: product.nutrition?.calories || '15 kcal', color:'orange'},
                                {icon:'grass', label:'กากใย', value: product.nutrition?.fiber || '1.1 g', color:'green'},
                                {icon:'visibility', label:'วิตามิน เอ', value: product.nutrition?.vitaminA || '120%', color:'yellow'},
                                {icon:'health_and_safety', label:'วิตามิน ซี', value: product.nutrition?.vitaminC || '20%', color:'blue'}
                            ].map((n, i) => (
                                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center gap-3 shadow-sm">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-${n.color}-500`}>
                                        <span className="material-symbols-outlined">{n.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium uppercase">{n.label}</p>
                                        <p className="text-xl font-bold text-slate-900 dark:text-white">{n.value}</p>
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

export default ProductDetailPage;
