
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PromotionsPage: React.FC = () => {
    const navigate = useNavigate();

    const promos = [
        {
            title: 'Salad Box of the Month',
            price: '199.-',
            oldPrice: '250.-',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIoFZuaBlW9qkTXoFnNsDYqxdy-3n39u6eAxqIcRIy3irm3SB1uS_an_j24jFdOnGngetBe5LBZtF38vJBBXdRd2sRJfqsXNB30VoCt8Ta707gukAsN3V_lwQ21uRTiH4828gMPwajOXrLDpp3Gxj5AVI8RDpkLiev_ire5XH1HxeIGBHWNoqpfC0dNjrkzFv1yrVwYhX6Ry-BcwwG_EuioTC6Qah-0GASYlpN4nMH7aCvYUHKLJrTfL0eHgvqRXYm5TNRVXWId6oz',
            desc: 'ชุดสลัดรวมมิตรยอดนิยม คัดเฉพาะผักสดที่ดีที่สุดของเดือนนี้'
        },
        {
            title: 'Seasonal Bundle Set',
            price: '350.-',
            oldPrice: '450.-',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiRfOAvcN0PPi3YJJct8Ez_GQtExCaIfbTlsCNKeciGgnRHXQVVCOIWsNNMcIkNgmQcnAyGp9MIg6Upx_9i60-3eHdHwdPMZgcVSJBOMtjiXOTbhayPv03llOrg5iyI73qAkJUpL-sKqCwf41y1MSc7tb9CxapwRJaSfJz7raoUlKgKovbp47tBkk5mZGe0TV7YRympr22ewKQ_H0EIgUWzbi36II3_AZ9NDkA0jynp4CjR4Dv8hEtDok8kqz9m2JILFHrUcjONeVn',
            desc: 'ชุดผักไฮโดรฯ 5 ชนิด ปริมาณจุใจ สำหรับครอบครัวสายสุขภาพ'
        },
        {
            title: 'Green Oak Family Set',
            price: '299.-',
            oldPrice: '380.-',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaBluUULX08e0lqM6MpA44BvtaTt4i9Do2EHMYRS1RPM6U5ZG0WooTVXmQkhirBEvuJce_HrSRHuSuMVuO_myn-4YNpyoGvNWK6LGppIW3Mx0RAGfH1cftuccz9_wYl-2DdPcUsZLvrqzEX4_4IYKoxdnr49MtZIX6DoWfbvd5ECgEqgGYDhDbfES1q_gUsIiD16F665aLY2LUMRBzEq2NOCfN0hf9lCKzYMIOZ5b165Xinxm5A94e0wOXyaIisuLg-PJzLlWhaYpj',
            desc: 'กรีนโอ๊คสดๆ 1 กก. แบ่งบรรจุแพ็กเล็ก สะดวกต่อการเก็บและทาน'
        }
    ];

    return (
        <div className="layout-container">
            <main className="max-w-[1200px] mx-auto px-6 py-12 w-full">
                {/* Hero Promotion */}
                <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl group mb-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-center bg-cover transition-transform duration-1000 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBl9PgqHOE-EbpsS7oDytrrSM3uPTf8S9vK1bPTy4LVmz59kPQCKh6190TZYF36He3ZaABdlgmybBU2TV8cQbkbEITgfuWUrCdUkV-Wbl2sNo4RfAYSe2mBDVlTqqV4V80TN7jGKJS_R65hGNvT9-yfSX9JRyL7TIhawPKbrl5kAMPY1KBRPNb0KcBN_Q4J4cfPI4cJ_gDw4EKw0IEKjk_-vZLLFtvksxbdLDRYUWXBKSyr8KzanM0C8Duhkqm4I8sYXyAclOsdrPR4")'}}></div>
                    <div className="relative z-20 flex flex-col justify-center h-full p-12 text-white max-w-xl">
                        <span className="bg-primary text-background-dark px-4 py-1 rounded-full text-xs font-black w-fit mb-6 uppercase tracking-widest">Promotion of the Week</span>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">ซื้อ 1 แถม 1 <br/><span className="text-primary italic">ทุกวันศุกร์!</span></h1>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">สำหรับสินค้ากลุ่มผักใบที่ร่วมรายการ เมื่อสั่งซื้อผ่านเว็บไซต์เท่านั้น สดกว่านี้ไม่มีอีกแล้ว</p>
                        <button 
                            onClick={() => navigate('/products')}
                            className="bg-primary text-background-dark px-10 py-4 rounded-2xl font-black w-fit shadow-xl shadow-primary/30 hover:scale-110 active:scale-95 transition-all text-lg"
                        >
                            สั่งซื้อรับสิทธิ์เลย
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white">ข้อเสนอพิเศษประจำเดือน</h2>
                        <p className="text-slate-500 mt-2">เลือกรับส่วนลดพิเศษที่เราคัดสรรมาเพื่อคุณโดยเฉพาะ</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-white dark:bg-slate-900 px-4 py-2 rounded-lg border font-bold text-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">timer</span>
                            เวลาคงเหลือ: 14 วัน 05 ชม.
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {promos.map((promo, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-xl transition-all duration-500">
                            <div className="h-64 w-full bg-cover bg-center overflow-hidden" style={{backgroundImage: `url("${promo.img}")`}}>
                                <div className="w-full h-full bg-black/0 group-hover:bg-black/10 transition-all"></div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{promo.title}</h3>
                                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">{promo.desc}</p>
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-slate-400 text-xs line-through mb-1">ราคาปกติ ฿{promo.oldPrice}</p>
                                        <p className="text-3xl font-black text-primary">฿{promo.price}</p>
                                    </div>
                                    <button 
                                        onClick={() => navigate('/products')}
                                        className="bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-xl font-black text-slate-900 dark:text-white hover:bg-primary hover:text-background-dark transition-all"
                                    >
                                        รับสิทธิ์
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter Box Redux */}
                <div className="bg-timber dark:bg-primary/5 rounded-[3rem] p-12 text-center border border-primary/10">
                    <h2 className="text-3xl font-black mb-4">ไม่พลาดทุกโปรโมชั่นสำคัญ</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                        สมัครรับข่าวสารทางอีเมลเพื่อรับโค้ดส่วนลด 50.- บาท สำหรับการสั่งซื้อครั้งแรกและข่าวสารความสดใหม่ทุกสัปดาห์
                    </p>
                    <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                        <input className="flex-1 rounded-xl px-6 h-14 bg-white border-slate-200 outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="อีเมลของคุณ"/>
                        <button className="h-14 px-8 bg-primary text-background-dark font-black rounded-xl shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                            ตกลง
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PromotionsPage;
