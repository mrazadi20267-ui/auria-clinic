import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'AURIA | کلینیک زیبایی و دندانپزشکی',description:'دموی طراحی کلینیک زیبایی و دندانپزشکی با سیستم نوبت‌دهی و پنل‌ها'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa" dir="rtl"><body>{children}</body></html>}
