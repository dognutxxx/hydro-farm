
import React from 'react';

const HowToPage: React.FC = () => {
    const steps = [
        {
            id: '01',
            title: 'การคัดเลือกเมล็ดพันธุ์',
            description: 'เริ่มต้นด้วยการเลือกเมล็ดพันธุ์ที่มีคุณภาพสูง มีอัตราการงอกสูง และเหมาะสมกับสภาพภูมิอากาศของไทย เราคัดสรรพันธุ์ผักจากผู้ผลิตที่น่าเชื่อถือเพื่อให้ได้ผลลัพธ์ที่ดีที่สุด',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAML5xLBbUJ4KM10pItzFCcifILyv6fKpKqUc_UalOt_wkb4_BvnkLYT5qPVb4tbkanDliCjDaj8Dz_Td9Obat10PWSDMUkIXygRiGRjNk3f4Lf_mYcCth_joEimjDzB8E9QZLjf7SQTDTzQ3ZhalELX-PVs2hzuX9Zrzp1G_IsBKrmnXIxzA5p7au2KrteNHk10zx3ho5mY1I-Z98qWu4eeS77vat59EG2hF01gsK92jRvSR7SYbBHRiAUUF0woBlFgy4m-DK5ATI8'
        },
        {
            id: '02',
            title: 'การเพาะกล้าบนฟองน้ำ',
            description: 'นำเมล็ดวางบนฟองน้ำที่ชุ่มน้ำสม่ำเสมอ เก็บไว้ในที่มืด 1-2 วันจนเริ่มงอก จากนั้นค่อยๆ ให้รับแสงแดดอ่อนๆ และเริ่มให้สารอาหารในปริมาณที่เหมาะสม เพื่อสร้างรากที่แข็งแรง',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTZzJZsH3OvlIrSbcn2vqIBmiUy7y5JT759VTIXfvXxCF2nXCkSYMob6KwBGYsxc3KD18HsCIwrUDvRXuqmdiWWkWAF1rWFeiGYioAiCcxtFKLHanYa1xPulM-2AxTdIhEGWtHhWettTFEcQnc9MLPRnIs8c3mS6urFEPjDvTrOo-9xBaZLOTauhxJwfOTrXskCeIXHEuLg2w9SZXvchI9ppx42z3orFT6bRD0UhIBB5I6aSaghstrIdyLMCpRMFAGDJvbeKfp8FUu'
        },
        {
            id: '03',
            title: 'การย้ายลงแปลงปลูก (Smart System)',
            description: 'เมื่อต้นกล้าอายุ 10-14 วัน ให้ย้ายลงในถ้วยปลูกและนำเข้าสู่ระบบราง NFT ที่มีการควบคุมการไหลของสารอาหาร อุณหภูมิ และค่า pH โดยอัตโนมัติ เพื่อการเติบโตอย่างมีประสิทธิภาพ',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoi8raYbSDTmBkww6PsqZ4xudcpj9mdrM-0pq7FF5Ss8uegekCz-wYs7rBr_9UgE06h-AT6eDOdaufuSzJVayjq9uFHo2GGvV_u3aOgtUgUQWF1Fb3uLeyMQHwqx6ZjxyI4hk68muSCnckQ1uswQ5NwKYBikbwxnk0VfUGoRslazaRZ4fxN7PLcAXip4_GBbBCxjOzA6z22WMdgO0RVD-u-LXBVU9GgGW8R4daKaA2oup3lGCmtriCuBE86u1v95-j_eeerklPYhp5'
        }
    ];

    return (
        <div className="layout-container">
            <main className="flex-1 flex flex-col">
                <div className="bg-white dark:bg-background-dark py-16 px-4 text-center border-b border-slate-100 dark:border-slate-800 transition-colors">
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">
                        คู่มือการปลูกผัก <span className="text-primary italic">ไฮโดรโปนิกส์</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        เรียนรู้วิธีการปลูกผักสะอาด ปลอดสารพิษ เข้าใจง่ายในขั้นตอนสำคัญที่ฟาร์มของเราใช้เพื่อส่งมอบความสดถึงคุณ
                    </p>
                </div>

                <div className="max-w-[1100px] mx-auto w-full px-6 py-12 space-y-24">
                    {steps.map((step, idx) => (
                        <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 group ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-6xl font-black text-primary/20 group-hover:text-primary transition-colors duration-500">{step.id}</span>
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{step.title}</h2>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                    {step.description}
                                </p>
                                <div className="pt-4">
                                    <button className="flex items-center gap-2 text-primary font-bold hover:underline">
                                        อ่านรายละเอียดเพิ่มเติม <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full md:w-[450px] h-[350px] bg-cover bg-center rounded-[2.5rem] shadow-2xl transition-all duration-500 group-hover:scale-[1.02] border-4 border-white dark:border-slate-800" style={{ backgroundImage: `url("${step.image}")` }}></div>
                        </div>
                    ))}
                </div>

                <section className="bg-primary/5 dark:bg-primary/10 py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white">อยากลองปลูกเองที่บ้านไหม?</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            เรามีชุดอุปกรณ์ปลูกผักไฮโดรโปนิกส์ (Starter Kit) พร้อมเมล็ดพันธุ์และคู่มือฉบับเต็ม สำหรับมือใหม่ที่ต้องการเริ่มต้นสร้างสวนผักในบ้าน
                        </p>
                        <button className="bg-primary text-background-dark font-black px-10 py-5 rounded-2xl shadow-xl shadow-primary/20 hover:scale-110 transition-all text-xl">
                            ดูสินค้าชุดปลูกเอง
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HowToPage;
