
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="layout-container">
            <main className="flex-1 flex flex-col items-center">
                <section className="w-full max-w-[1280px] px-6 py-10">
                    <div className="flex min-h-[500px] flex-col gap-6 bg-cover bg-center rounded-[2rem] items-center justify-center p-8 relative overflow-hidden shadow-2xl" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5G9W-t_GMG4TmxwxJEp78wmP03J5yvfkmTiA8goFl4I_DZZ76G5eHrJK8leNklJ15d7-6tXnj_lu_1ygYutf4nhvikkVW_R7YqO4Lu6An93GWgapMvvszV1goCps7q5DCE0_zuUb-ATuFGiWJYEkh1u4ObaMEJz6bdcEZ8ZqWPsptY_BFojSzmpOD--mOfv1CrTLlrHQwd2JjtLBv1EUMcBJ611Sg0vxF-TRsDwzX1Mqdg67fHGYxM62PnJaDBgHB7tpXRU8LWZS_")'}}>
                        <div className="text-center max-w-2xl z-10 text-white animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <span className="bg-primary text-background-dark font-bold px-4 py-1 rounded-full text-xs uppercase mb-6 inline-block">Our Story</span>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">รู้จักกับฟาร์ม<br/>ของเรา</h1>
                            <p className="text-xl md:text-2xl font-medium text-slate-200 opacity-90">จากความหลงใหลสู่การส่งมอบผักปลอดสารพิษคุณภาพดีที่สุดถึงมือคุณ</p>
                        </div>
                    </div>
                </section>

                <section className="max-w-4xl px-6 py-20 text-center">
                    <h2 className="text-4xl font-black mb-6 text-slate-900 dark:text-white">จุดเริ่มต้นของความสดใหม่</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                        เราเริ่มต้นจากความฝันเล็กๆ ในโรงเรือนหลังบ้าน ที่ต้องการหาผักสลัดที่สะอาดและปลอดภัยจริงๆ สำหรับครอบครัว จากนั้นจึงค่อยๆ พัฒนาสู่วิทยาการทำฟาร์มแนวตั้ง (Vertical Farming) ที่ทันสมัยที่สุด เพื่อมอบคุณภาพชีวิตที่ดีขึ้นผ่านอาหารที่บริสุทธิ์
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: '2018', text: 'ก่อตั้งโรงเรือนต้นแบบแรก' },
                            { label: '2020', text: 'นำระบบ AI เข้ามาควบคุมฟาร์ม' },
                            { label: '2022', text: 'ได้รับมาตรฐาน GAP ระดับสากล' }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:scale-105">
                                <p className="text-primary text-3xl font-black mb-2">{item.label}</p>
                                <h3 className="font-bold text-slate-900 dark:text-white">{item.text}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-full bg-timber dark:bg-slate-950/20 py-24">
                    <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">วิสัยทัศน์สีเขียวเพื่อ<br/>ความยั่งยืน</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                เรามุ่งมั่นที่จะลดการใช้ทรัพยากรธรรมชาติให้น้อยที่สุด โดยใช้ระบบน้ำหมุนเวียน 100% และลดระยะทางในการขนส่งเพื่อให้ผักสดใหม่ที่สุดและปล่อยก๊าซคาร์บอนน้อยที่สุด
                            </p>
                            <ul className="space-y-4">
                                {['ประหยัดน้ำกว่าฟาร์มปกติ 90%', 'ไม่มีการใช้สารปราบศัตรูพืชใดๆ', 'ใช้พลังงานสะอาดในกระบวนการผลิต'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold">
                                        <span className="material-symbols-outlined text-primary">eco</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl"></div>
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl9PgqHOE-EbpsS7oDytrrSM3uPTf8S9vK1bPTy4LVmz59kPQCKh6190TZYF36He3ZaABdlgmybBU2TV8cQbkbEITgfuWUrCdUkV-Wbl2sNo4RfAYSe2mBDVlTqqV4V80TN7jGKJS_R65hGNvT9-yfSX9JRyL7TIhawPKbrl5kAMPY1KBRPNb0KcBN_Q4J4cfPI4cJ_gDw4EKw0IEKjk_-vZLLFtvksxbdLDRYUWXBKSyr8KzanM0C8Duhkqm4I8sYXyAclOsdrPR4" className="relative rounded-[2rem] shadow-2xl w-full h-[400px] object-cover" alt="Sustainable Farm"/>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;
