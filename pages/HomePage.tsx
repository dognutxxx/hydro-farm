
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="layout-container">
            <section className="relative w-full overflow-hidden py-12 md:py-20 lg:py-24">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex flex-col gap-8 flex-1 lg:max-w-[600px]">
                            <div className="flex flex-col gap-4">
                                <span className="text-primary font-bold tracking-widest text-sm uppercase">ยินดีต้อนรับสู่อนาคตของการเกษตร</span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                                    สดใหม่และดีต่อสุขภาพ <br/>
                                    <span className="text-primary">ความสดใหม่ที่ปลูกด้วยใจ</span>
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-[500px]">
                                    ส่งตรงจากฟาร์มถึงโต๊ะอาหารภายใน 24 ชั่วโมง สัมผัสความสะอาดและคุณค่าทางโภชนาการสูงสุดจากผักที่ปลูกด้วยความรักและเทคโนโลยีที่ยั่งยืน
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button onClick={() => navigate('/products')} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-background-dark text-lg font-bold shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-all hover:scale-[1.02]">
                                    เลือกซื้อเลย
                                </button>
                                <button onClick={() => navigate('/about')} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                    เรียนรู้เพิ่มเติม
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
                                <div className="relative w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-3xl shadow-2xl overflow-hidden border-4 border-white dark:border-slate-800" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwSdB9OzULXfC6Ppy8-dZk-rIxXqSPeBR1Hf7bYDXSbcDsZsahUVm4NcuxwJjW1Bn_7QDGC-Kc_Knpf1G69ILrCNibnaz-TCtd8b_SM_IGeQ7MjI_VcXfa9q6U9RzrJTzvhv3dBW51DrAqr4wQxbzhX_SdlG-onsO5e6KxceIJcgDctlAZkU5gUTq-rvv7o2IFsjLzcsJXHodMxZb7X2KheBKIqkZXZyB7N8OySBge7wj-epa61uAiyQzUDwc5MZP3cg6ACfJbZVPx")'}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-20 bg-timber dark:bg-slate-900/50">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">ทำไมต้องเลือกผักจากเรา</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            เราผสมผสานเทคโนโลยีขั้นสูงเข้ากับกระบวนการทางธรรมชาติ เพื่อมอบคุณภาพผักที่ดีที่สุดเพื่อสุขภาพของครอบครัวคุณ
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {icon: 'energy_savings_leaf', title: 'ความสดใหม่', desc: 'เก็บเกี่ยวทุกวันและส่งตรงถึงมือคุณ ผักของเราคงคุณค่าทางสารอาหารและความกรอบที่เป็นเอกลักษณ์'},
                            {icon: 'shield', title: 'ปลอดสารพิษ', desc: 'ปลูกในสภาพแวดล้อมที่ควบคุมได้ 100% ปราศจากสารเคมีอันตรายและแมลง เพื่ออาหารที่สะอาดบริสุทธิ์สำหรับบ้านคุณ'},
                            {icon: 'water_drop', title: 'เป็นมิตรต่อสิ่งแวดล้อม', desc: 'วิธีการทำฟาร์มแบบยั่งยืนของเราใช้น้ำน้อยกว่าการเกษตรแบบใช้ดินปกติถึง 90%'}
                        ].map((item, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all">
                                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full py-20 bg-white dark:bg-background-dark transition-colors">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-6 mb-10">
                        <div>
                            <span className="text-primary font-bold text-sm uppercase">สินค้าแนะนำ</span>
                            <h2 className="text-3xl font-black mt-2 text-slate-900 dark:text-white">สายพันธุ์ยอดนิยม</h2>
                        </div>
                        <Link className="text-primary font-bold flex items-center gap-2 hover:underline" to="/products">
                            ดูสินค้าทั้งหมด <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PRODUCTS.slice(0, 4).map((item) => (
                            <Link key={item.id} to={`/product/${item.slug}`} className="flex flex-col gap-4 group">
                                <div className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-2xl overflow-hidden relative shadow-sm" style={{backgroundImage: `url("${item.img}")`}}>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                    {item.tag && <span className="absolute top-4 left-4 bg-primary text-background-dark text-[10px] font-bold px-2 py-1 rounded-full uppercase">{item.tag}</span>}
                                </div>
                                <div className="px-1">
                                    <p className="text-lg font-bold text-slate-900 dark:text-white">{item.name}</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">฿{item.price} • {item.unit}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full py-24 bg-timber dark:bg-slate-950/20">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="relative bg-background-dark text-white rounded-[2rem] p-12 overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none bg-cover" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYkeqSlS-KPJEUoOX8bC_Wj7lWxMBaHRwZP4uGsfsxZoY6abIjwxJPaHcgEu8dV30tzX6H8c2kbsE4v4fdLURRpQhWiowYq2zH0V9PMqYkcJ0mQvQXi8YzI5u0dDmcbLmppJrrkf-LpIaXQgPmtWSsopI562DrWli080bS9Z-MFqQurUWtbTaMA7OVYJxswZljKZlRLYeVoOQesh5etRd9DifsAUkM65j5ehg8nLng2dXZm0JZLufYadk-x5BqF5xr0-W9XmlPhJDW')"}}></div>
                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                            <div className="flex-1 space-y-4">
                                <h2 className="text-3xl md:text-5xl font-black leading-tight">ร่วมเป็นส่วนหนึ่งของ<br/>การปฏิวัติการเกษตรสีเขียว</h2>
                                <p className="text-slate-400 text-lg">ติดตามสูตรอาหารประจำสัปดาห์ อัปเดตจากฟาร์ม และส่วนลดพิเศษส่งตรงถึงอีเมลของคุณ</p>
                            </div>
                            <div className="flex-1 w-full max-w-md">
                                <form className="flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
                                    <input className="flex-1 h-14 rounded-xl px-6 bg-white/10 border border-white/20 focus:ring-2 focus:ring-primary outline-none text-white transition-all" placeholder="อีเมลของคุณ" type="email"/>
                                    <button className="h-14 px-8 bg-primary text-background-dark font-black rounded-xl hover:scale-105 active:scale-95 transition-all whitespace-nowrap">
                                        สมัครสมาชิก
                                    </button>
                                </form>
                                <p className="text-xs text-slate-500 mt-4 text-center sm:text-left">ไม่มีสแปม มีเพียงข่าวสารที่สดใหม่ ยกเลิกการรับข่าวสารได้ทุกเมื่อ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
