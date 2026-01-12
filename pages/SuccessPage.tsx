
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="layout-container">
            <main className="flex flex-col items-center justify-center py-20 px-4 text-center max-w-[640px] mx-auto min-h-[70vh]">
                <div className="mb-8 h-24 w-24 flex items-center justify-center rounded-full bg-primary/10 text-primary animate-bounce">
                    <span className="material-symbols-outlined !text-6xl font-bold">check_circle</span>
                </div>
                <h1 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">ยืนยันการสั่งซื้อสำเร็จ!</h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
                    ขอบคุณสำหรับการสั่งซื้อ หมายเลขคำสั่งซื้อของคุณคือ <span className="text-primary font-bold">#HYD-88990</span> เราได้ส่งรายละเอียดไปที่อีเมลของคุณแล้ว
                </p>

                <div className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-8 shadow-sm text-left mb-10">
                    <h3 className="font-bold text-lg mb-6 text-slate-900 dark:text-white border-b pb-4">รายละเอียดการจัดส่ง</h3>
                    <div className="space-y-4 text-slate-600 dark:text-slate-400">
                        <div className="flex justify-between items-center">
                            <span>วันที่คาดว่าจะได้รับ:</span>
                            <span className="font-bold text-primary">24 พฤษภาคม 2567</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <span>จัดส่งที่:</span>
                            <span className="text-right max-w-[200px]">123/45 ถนนพหลโยธิน แขวงจตุจักร กรุงเทพฯ 10900</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>ขนส่งโดย:</span>
                            <span className="font-bold">HydroFarm Express</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <button 
                        onClick={() => navigate('/track')} 
                        className="flex-1 h-14 bg-primary text-background-dark font-bold rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:scale-[1.05] transition-all"
                    >
                        <span className="material-symbols-outlined">track_changes</span> ติดตามสถานะ
                    </button>
                    <button 
                        onClick={() => navigate('/')} 
                        className="flex-1 h-14 bg-white dark:bg-slate-800 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all"
                    >
                        กลับหน้าหลัก
                    </button>
                </div>
            </main>
        </div>
    );
};

export default SuccessPage;
