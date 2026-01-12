
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 space-y-4">
                        <div className="flex items-center gap-3 text-[#111811] dark:text-white">
                            <div className="size-6 bg-primary rounded flex items-center justify-center text-background-dark">
                                <span className="material-symbols-outlined text-sm font-bold">eco</span>
                            </div>
                            <h2 className="text-lg font-extrabold tracking-tight">Hydro<span className="text-primary">Farm</span></h2>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            ผู้นำด้านการทำฟาร์มแนวตั้งและการเกษตรที่ยั่งยืนเพื่ออนาคตที่ดีต่อสุขภาพ ส่งตรงความสดจากฟาร์มถึงมือคุณ
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-slate-900 dark:text-white">เมนูทางลัด</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link className="hover:text-primary transition-colors" to="/about">เรื่องราวของเรา</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/products">สินค้าทั้งหมด</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/how-to">วิธีการปลูก</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/promotions">โปรโมชั่น</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-slate-900 dark:text-white">ความช่วยเหลือ</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><a className="hover:text-primary transition-colors" href="#">ข้อมูลการจัดส่ง</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">นโยบายการคืนสินค้า</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">คำถามที่พบบ่อย</a></li>
                            <li><Link className="hover:text-primary transition-colors" to="/contact">ติดต่อเรา</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-slate-900 dark:text-white">ติดต่อ</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">location_on</span>
                                กรุงเทพมหานคร, ประเทศไทย
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">mail</span>
                                hello@hydrofarm.co
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">call</span>
                                +66 2 123 4567
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 uppercase tracking-widest font-semibold">
                    <p>© 2024 Hydroponic Farm Co. สงวนลิขสิทธิ์</p>
                    <div className="flex items-center gap-6">
                        <a className="hover:text-primary transition-colors" href="#">Instagram</a>
                        <a className="hover:text-primary transition-colors" href="#">Facebook</a>
                        <a className="hover:text-primary transition-colors" href="#">Line</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
