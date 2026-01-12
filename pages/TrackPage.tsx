
import React from 'react';

const TrackPage: React.FC = () => {
    const steps = [
        { icon: 'shopping_cart', label: 'รับออเดอร์', active: true },
        { icon: 'inventory_2', label: 'จัดเตรียม', active: true },
        { icon: 'local_shipping', label: 'กำลังส่ง', active: true },
        { icon: 'check_circle', label: 'สำเร็จ', active: false }
    ];

    return (
        <div className="layout-container">
            <main className="flex-1 flex justify-center py-10 px-4 md:px-10">
                <div className="max-w-4xl w-full flex flex-col gap-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">ติดตามสถานะการจัดส่ง</h1>
                        <p className="text-slate-500 mb-8">ค้นหาว่าผักสลัดของคุณอยู่ที่ไหนในขณะนี้</p>
                        <div className="max-w-xl mx-auto flex shadow-sm rounded-2xl overflow-hidden border border-emerald-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-1">
                            <input 
                                className="w-full py-4 px-6 bg-transparent focus:outline-none dark:text-white" 
                                defaultValue="HDP-88291"
                                placeholder="หมายเลขคำสั่งซื้อ"
                            />
                            <button className="bg-primary text-background-dark px-8 font-bold rounded-xl">ติดตาม</button>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                        <div className="relative flex justify-between mb-12 mt-4">
                            <div className="absolute top-6 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800"></div>
                            <div className="absolute top-6 left-0 h-1 bg-primary" style={{ width: '70%' }}></div>
                            
                            {steps.map((s, i) => (
                                <div key={i} className="relative z-10 flex flex-col items-center gap-3 w-1/4">
                                    <div className={`size-12 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-sm transition-all duration-500 ${s.active ? 'bg-primary text-background-dark scale-110' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>
                                        <span className="material-symbols-outlined font-bold">{s.icon}</span>
                                    </div>
                                    {/* Fix: Removed the redundant paragraph with non-existent 'l' property */}
                                    <p className={`text-sm font-bold ${s.active ? 'text-primary' : 'text-slate-400'}`}>{s.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h4 className="font-bold flex items-center gap-2 text-lg text-slate-900 dark:text-white">
                                    <span className="material-symbols-outlined text-primary">history</span> 
                                    ประวัติสถานะ
                                </h4>
                                <div className="space-y-8 relative pl-6 border-l-2 border-emerald-100 dark:border-slate-800 ml-2">
                                    <div className="relative">
                                        <span className="absolute -left-[31px] top-1 size-3 rounded-full bg-primary ring-4 ring-emerald-50 dark:ring-primary/20 animate-pulse"></span>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">พัสดุออกจากคลังสินค้า (กรุงเทพฯ)</p>
                                        <p className="text-xs text-slate-500">วันนี้, 10:45 น.</p>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute -left-[31px] top-1 size-3 rounded-full bg-primary/40"></span>
                                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">จัดเตรียมสินค้าและแพ็กเกจเรียบร้อย</p>
                                        <p className="text-xs text-slate-500">วันนี้, 09:30 น.</p>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute -left-[31px] top-1 size-3 rounded-full bg-primary/40"></span>
                                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">คำสั่งซื้อถูกยืนยัน</p>
                                        <p className="text-xs text-slate-500">เมื่อวานนี้, 22:15 น.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl overflow-hidden h-64 bg-slate-200 dark:bg-slate-800 relative shadow-inner">
                                <img 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDavCX5a-N9Mjj-Wv5EBks7K-sLiZiDXm5tc_aiXQSIGxQ-nUrRDtoulsaNpIX-XAMw4fGSVO74hKSfhB8V-6DV50DIM-joyRuZvi3OQLBK_zEfk5Joaoa3kEJcPbUL03ZYIzpCY_OyR0BNeK5fxZz7Zrhy1NfbbWJbiV77JaMdJdpaSLvmO56PQxh2pRBoLtpT9cYjk-jjsZerSJRzWMartVZpRVCvL-e8gqI4KgWXv27UtHmCVp7teklUV6y2Xc3e_vgvJGgiZopG" 
                                    className="w-full h-full object-cover opacity-80"
                                    alt="Map track"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        <span className="absolute -top-1 -left-1 size-6 bg-primary/30 rounded-full animate-ping"></span>
                                        <span className="material-symbols-outlined text-red-500 text-4xl animate-bounce drop-shadow-lg">location_on</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                                    <div className="size-8 bg-primary rounded-full flex items-center justify-center text-background-dark">
                                        <span className="material-symbols-outlined text-sm">delivery_dining</span>
                                    </div>
                                    <div className="text-xs">
                                        <p className="font-bold text-slate-900 dark:text-white">กำลังนำส่งโดย คุณมานะ</p>
                                        <p className="text-slate-500">คาดว่าจะถึงใน 20 นาที</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TrackPage;
