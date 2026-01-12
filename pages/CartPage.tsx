
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../App';

const CartPage: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, subtotal, shipping, total } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="layout-container py-20 px-6 flex flex-col items-center justify-center text-center">
                <div className="size-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mb-6">
                    <span className="material-symbols-outlined !text-5xl">shopping_cart_off</span>
                </div>
                <h1 className="text-3xl font-bold mb-4">ตะกร้าของคุณว่างเปล่า</h1>
                <p className="text-slate-500 mb-8 max-w-md">ไปที่หน้าสินค้าเพื่อเลือกผักสลัดสดใหม่จากฟาร์มของเรากันเถอะ</p>
                <Link to="/products" className="bg-primary text-background-dark font-bold px-10 py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                    เลือกซื้อสินค้า
                </Link>
            </div>
        );
    }

    return (
        <div className="layout-container">
            <main className="max-w-[1200px] mx-auto px-4 py-8 lg:px-10 w-full">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">ตะกร้าสินค้าของฉัน</h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        คุณมีสินค้า <span className="font-bold text-primary">{cart.length} รายการ</span> ในตะกร้า
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Cart Items */}
                    <div className="w-full lg:w-2/3 space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center shadow-sm">
                                <div className="md:col-span-6 flex items-center gap-4">
                                    <img src={item.img} className="size-20 rounded-lg object-cover bg-slate-100" alt={item.name}/>
                                    <div className="flex flex-col">
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">{item.name}</h3>
                                        <p className="text-slate-500 text-sm">{item.unit}</p>
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="mt-2 text-xs text-red-500 font-medium hover:underline flex items-center gap-1 w-fit"
                                        >
                                            <span className="material-symbols-outlined text-sm">delete</span> ลบสินค้า
                                        </button>
                                    </div>
                                </div>
                                <div className="md:col-span-2 text-center font-medium text-slate-600 dark:text-slate-400">
                                    ฿{item.price.toFixed(2)}
                                </div>
                                <div className="md:col-span-2 flex justify-center">
                                    <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1">
                                        <button 
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="h-6 w-6 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="font-bold w-6 text-center text-slate-900 dark:text-white">{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="h-6 w-6 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="md:col-span-2 text-right text-primary font-bold text-lg">
                                    ฿{(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                        <Link className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-medium transition-colors" to="/products">
                            <span className="material-symbols-outlined">arrow_back</span> กลับไปเลือกสินค้าเพิ่มเติม
                        </Link>
                    </div>

                    {/* Summary Card */}
                    <div className="w-full lg:w-1/3 space-y-4 sticky top-24">
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white">สรุปรายการสั่งซื้อ</h3>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-slate-500">
                                    <span>ยอดรวมสินค้า</span>
                                    <span>฿{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-500">
                                    <span>ค่าจัดส่ง</span>
                                    <span>฿{shipping.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mb-8">
                                <div className="flex justify-between items-end">
                                    <span className="text-lg font-bold text-slate-900 dark:text-white">ยอดรวมสุทธิ</span>
                                    <span className="text-2xl font-black text-primary">฿{total.toFixed(2)}</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => navigate('/checkout')} 
                                className="w-full bg-primary hover:bg-[#0fd60f] text-background-dark py-4 rounded-xl font-black text-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02]"
                            >
                                ไปที่หน้าชำระเงิน <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CartPage;
