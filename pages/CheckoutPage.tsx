
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../App';

const CheckoutPage: React.FC = () => {
    const navigate = useNavigate();
    const { cart, total, clearCart } = useCart();

    const handleConfirm = () => {
        // Logic for order processing would go here
        clearCart();
        navigate('/success');
    };

    return (
        <div className="layout-container">
            <main className="max-w-[1200px] mx-auto px-4 py-8 w-full">
                <h1 className="text-4xl font-black mb-8 text-slate-900 dark:text-white">ชำระเงิน</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 space-y-8">
                        {/* Shipping Info */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden p-6 shadow-sm">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                                <span className="material-symbols-outlined text-primary">local_shipping</span> 
                                ที่อยู่จัดส่ง
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">ชื่อ-นามสกุล</span>
                                    <input className="rounded-lg border-slate-200 dark:border-slate-700 bg-transparent h-12 px-4 focus:ring-primary focus:border-primary dark:text-white transition-all outline-none" placeholder="สมชาย มุ่งมั่น"/>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">เบอร์โทรศัพท์</span>
                                    <input className="rounded-lg border-slate-200 dark:border-slate-700 bg-transparent h-12 px-4 focus:ring-primary focus:border-primary dark:text-white transition-all outline-none" placeholder="08x-xxx-xxxx"/>
                                </label>
                                <label className="flex flex-col gap-2 md:col-span-2">
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">ที่อยู่จัดส่งโดยละเอียด</span>
                                    <textarea className="rounded-lg border-slate-200 dark:border-slate-700 bg-transparent h-24 p-4 resize-none focus:ring-primary focus:border-primary dark:text-white transition-all outline-none" placeholder="เลขที่บ้าน, ถนน, แขวง, เขต..."></textarea>
                                </label>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden p-6 shadow-sm">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                                <span className="material-symbols-outlined text-primary">payments</span> 
                                วิธีชำระเงิน
                            </h2>
                            <div className="space-y-4">
                                <label className="flex items-center gap-4 p-4 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer">
                                    <input type="radio" defaultChecked name="payment" className="text-primary focus:ring-primary h-5 w-5"/>
                                    <div className="flex-1">
                                        <p className="font-bold text-slate-900 dark:text-white">PromptPay (QR Code)</p>
                                        <p className="text-xs text-slate-500">สแกนจ่ายทันที ปลอดภัย รวดเร็ว</p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary">qr_code_2</span>
                                </label>
                                <label className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                                    <input type="radio" name="payment" className="text-primary focus:ring-primary h-5 w-5"/>
                                    <div className="flex-1">
                                        <p className="font-bold text-slate-900 dark:text-white">บัตรเครดิต / เดบิต</p>
                                        <p className="text-xs text-slate-500">รับชำระผ่าน VISA, Mastercard, JCB</p>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-400">credit_card</span>
                                </label>
                                <label className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                                    <input type="radio" name="payment" className="text-primary focus:ring-primary h-5 w-5"/>
                                    <div className="flex-1">
                                        <p className="font-bold text-slate-900 dark:text-white">เก็บเงินปลายทาง</p>
                                        <p className="text-xs text-slate-500">จ่ายเงินสดเมื่อได้รับสินค้า</p>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-400">home_delivery</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Order Sidebar */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm sticky top-24">
                            <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">สรุปการสั่งซื้อ</h3>
                            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <img src={item.img} className="size-16 rounded-lg object-cover bg-slate-50" alt={item.name}/>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</p>
                                            <div className="flex justify-between mt-1">
                                                <p className="text-xs text-slate-500">x{item.quantity}</p>
                                                <p className="text-sm font-bold text-primary">฿{(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mb-6 flex justify-between items-center">
                                <span className="text-lg font-bold text-slate-900 dark:text-white">ยอดสุทธิ</span>
                                <span className="text-2xl font-black text-primary">฿{total.toFixed(2)}</span>
                            </div>
                            <button 
                                onClick={handleConfirm} 
                                className="w-full py-4 bg-primary text-background-dark text-lg font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined">verified_user</span> ยืนยันการสั่งซื้อ
                            </button>
                            <p className="text-center text-xs text-slate-500 mt-4">
                                โดยการสั่งซื้อ คุณยอมรับ <a href="#" className="underline">ข้อตกลงและเงื่อนไข</a> ของเรา
                            </p>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default CheckoutPage;
