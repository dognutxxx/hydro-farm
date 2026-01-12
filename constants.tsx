
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'green-oak',
    name: 'กรีนโอ๊ค (Green Oak)',
    price: 45,
    unit: '200 กรัม',
    tag: 'ยอดนิยม',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD56wWLEX5bUZ4tc1eCM64GhcSvEoEqLN0CZ62pXFO6azVIJvm5cXBltaxvUf2WB0SMUmCyKzLb792L1bys6FN9tQus-hLSBA_dTeSrtQm2LRGypQBD4qa-QU1KZwJvwYD-TbaiLS9sLSBK6eyFdnLIvU6GeS42vRHatwao07ByR2SNRtZKqs2ceKKP_UYJmu7TBOisOOGCIReB9G5I12GZ-RcQrQW6_1Bch2Sgo2tHNYvNwTZjUFDQeFlOr36lIG8ovYQvNDh3FJhL',
    description: 'ผักสลัดยอดนิยมที่มีลักษณะใบหยัก ขอบใบสีเขียวอ่อนนวล รสหวานและกรอบ มีไฟเบอร์สูง ช่วยในระบบขับถ่าย',
    nutrition: {
        calories: '15 kcal',
        fiber: '1.2 g',
        vitaminA: '130%',
        vitaminC: '25%'
    }
  },
  {
    id: 2,
    slug: 'red-coral',
    name: 'เรดคอรัล (Red Coral)',
    price: 49,
    unit: '200 กรัม',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE_oyeF1yXm0QN72j-bB-p_6S6LaZUxD3AtoqVHF2WelE0n5EedTEAhZmRFM55Qgb2zhnn-lsqSM1gFIbYgcDmLhRiba81K9THbKhtUmFMP0SYELsrjUT-i-5Y7u_gq7-tUAcYfTCvpuxhZxOx4S1neM1mwovmrzP_kBgOtt7yH3rz5H0VsZI6EGDdcRsb7JWbvaPCjTyajoPm6EJxFnZCRioSs6p5h8Soz3_iIJ38cJvMl2neVcpjN1pDOzNDGjIgcYuDXy0K3dJf',
    description: 'ผักกาดหอมใบแดง มีสารต้านอนุมูลอิสระสูง สีสันสวยงาม รสชาติกรอบอร่อย เหมาะสำหรับสลัดทุกประเภท'
  },
  {
    id: 3,
    slug: 'butterhead',
    name: 'บัตเตอร์เฮด (Butterhead)',
    price: 39,
    oldPrice: 55,
    unit: '1 แพ็ก',
    tag: 'ลดราคา',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZISHFKWCtddL4sPkgzUPRp2kHEzBjuxLOoju7iHCLgw4xjqVQ-EgPkJ7_GYmExG5iF9sUEKffJHFxQJ6N53mXa6PKNMxmKKplPYb5u5BuOKPzWJ1A9FQSBo6W12u5xSQg5693j78znFYKz6LTsuy3oKWlHbTCvY_3Yc6ujOxN16egmS8rBKWRxCRQHvwQtY-gF9LxeJ_Srbj6FrshAzaAujeqIIOo9BYf_iinpOlm_7sB_MHQQioXfqse0-5vCoWMd7mEo70J4CYO',
    description: 'ผักที่มีใบอ่อนนุ่ม เรียงตัวกันแน่นเหมือนดอกกุหลาบ รสชาติหวานมัน มีวิตามินและแร่ธาตุจำเป็นมากมาย'
  },
  {
    id: 4,
    slug: 'frillice-iceberg',
    name: 'ฟิลเลย์ ไอซ์เบิร์ก',
    price: 55,
    unit: '200 กรัม',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEaGLBd2b-SJk_1FuazbK7eaKPpBxZ_CmCp6vBHh9McWcDlZMQwmxIO6UmRDROnsNe-M3Q1-cAhO3k4SpCuhHRPAUjmwhKuzOX6Z6BjUd-mU-DIpibhKq1UoiT4vkqVjJkovwNbzhDoeA6r3fTkbQEnbWL9HB740wuZ8q8VEeO7IehN1x_3tMT1_iOo2qPJzRrpdZYrtPDgSf2K896WqCXzWmq9tvkfXI7pAg4U7O7j2EVyCaTQwcciAVdgJsrrCQkeDJqaMHnXhzc',
    description: 'ผักที่มีความกรอบเป็นพิเศษ ใบหนาและหยัก รสชาติจืดแต่กรอบสะท้านใจ นิยมนำมาทานกับน้ำสลัดเข้มข้น'
  },
  {
    id: 5,
    slug: 'mixed-set',
    name: 'ชุดสลัดรวม (Mixed Set)',
    price: 120,
    unit: 'กล่อง',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyfcw0r0q_I_lEAKxWPI53xz0G9zbA-qdRjoc40Se97b9VpJohqbUFBOrhOd8DrPeS8EBfOjPh44_KPMkqQIYM7F2QX-J_YaOB9E7p8qQ0xG_rSNhSxPxaojOhGiVWyNoA9ns5KYWV6PG8n2-myt76hECseF6totweiH1etDxQnaFh4i4yzRgYhDlIjtIr-yhTjGDqYZ1eAxpDCxA-nhA--050gSRGXR5hUH_RPDv1iQLiEp3TGcMjWls5CH7lEZ0n7ocMhttp45RV',
    description: 'รวมผักสลัดหลากหลายชนิดในกล่องเดียว คุ้มค่าและสะดวกสบาย เหมาะสำหรับครอบครัว'
  },
  {
    id: 6,
    slug: 'organic-red-oak',
    name: 'เรดโอ๊คออร์แกนิค',
    price: 75,
    unit: '500 กรัม',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNYlU1E5mQYC1C0J5UBkB7q2V2DZDv4w6_jLFWlbdkSg-8i2PDPSgi61vOa-7cNrxz_HC2db4gTv4DVne2oYwuzvXR0Eb6wn1-CmGtP94cJJA7p4U6Ii2fnYa8hDIIX-c607Dz_PEIMJ8aUHRuZUZ-HF50ln5-94hqrg5IAki8R2RgWfO0paUo5VlL0Nv1pa9Z0OE3LCTEvXFShmV3WuWfQIpDKyvKd1G31DbPTFz49hGuOH4B1q55gVS5MkdfER3cImOtMWcd8fpu',
    description: 'เรดโอ๊คที่ปลูกแบบออร์แกนิคแท้ 100% ดูแลอย่างพิถีพิถัน สด ใหม่ และปลอดภัยสูงสุด'
  }
];
