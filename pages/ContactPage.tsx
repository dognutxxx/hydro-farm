
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="layout-container">
            <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-12">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-5xl font-black text-slate-900 dark:text-white">ติดต่อเรา</h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        มีคำถามหรือต้องการเยี่ยมชมฟาร์ม? เรายินดีพูดคุยและตอบทุกข้อสงสัยของคุณ
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 transition-all hover:shadow-2xl">
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
                            <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            ส่งข้อความถึงเรา
                        </h2>
                        <form className="space-y-6" onSubmit={e => { e.preventDefault(); alert('ส่งข้อความเรียบร้อยแล้ว'); }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">ชื่อของคุณ</label>
                                    <input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 h-14 px-6 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" placeholder="สมชาย"/>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">อีเมล</label>
                                    <input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 h-14 px-6 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" placeholder="hello@example.com" type="email"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">หัวข้อติดต่อ</label>
                                <input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 h-14 px-6 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" placeholder="ระบุหัวข้อที่ต้องการสอบถาม"/>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">ข้อความ</label>
                                <textarea className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-6 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white resize-none" rows={5} placeholder="พิมพ์ข้อความของคุณที่นี่..."></textarea>
                            </div>
                            <button className="w-full bg-primary text-background-dark font-black h-16 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-lg">
                                ส่งข้อความ
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-10">
                        <div className="bg-primary text-background-dark p-10 rounded-[2rem] shadow-xl space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                            <h2 className="text-3xl font-black mb-4">ข้อมูลติดต่อ</h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-5">
                                    <div className="size-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined font-bold">location_on</span>
                                    </div>
                                    <div>
                                        <p className="font-black text-lg">ที่อยู่ฟาร์มหลัก</p>
                                        <p className="text-background-dark/80 leading-relaxed">123 หมู่ 5 ต.แม่เหียะ อ.เมือง จ.เชียงใหม่ 50100</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-5">
                                    <div className="size-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined font-bold">call</span>
                                    </div>
                                    <div>
                                        <p className="font-black text-lg">ฝ่ายขายและบริการลูกค้า</p>
                                        <p className="text-background-dark/80 text-lg">081-234-5678</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="size-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined font-bold">schedule</span>
                                    </div>
                                    <div>
                                        <p className="font-black text-lg">เวลาเปิดทำการ</p>
                                        <p className="text-background-dark/80 uppercase">จันทร์ - เสาร์: 08:00 - 17:00 น.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/20 flex items-center gap-4">
                                <a href="#" className="size-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all"><span className="material-symbols-outlined">facebook</span></a>
                                <a href="#" className="size-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all"><span className="material-symbols-outlined">chat</span></a>
                                <a href="#" className="size-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all"><span className="material-symbols-outlined">share</span></a>
                            </div>
                        </div>

                        <div className="rounded-[2rem] overflow-hidden h-[300px] border-4 border-white dark:border-slate-800 shadow-xl relative group">
                            <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXUZdIezjVo1Qrs1bh_ohhVKG35OGzblwx29gdAXGuDO7DTSDVVZfTJaPudZTCQEyJ3iKDmNHyrkaL7Up29cArVr1gOD2b7VLMeUSlQ3VLyLXgRuUpCamwlgR5xmnH6iFNhwuQbOSxjoxH-YvhDtzm2H8WBy4sKA1u0qFFpwXQdh627GJ-Sz_nky4LIaasnn8AwM5YpcDI_vcp9eX91H-ufVOTo8-PNvPzxjFMUuihsMt-34QZkCXuFANXeDOUc-AlHo9cAIpqf620" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Farm Map Location"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <span className="material-symbols-outlined text-red-500 text-6xl drop-shadow-2xl animate-bounce">location_on</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;
