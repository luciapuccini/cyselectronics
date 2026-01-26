import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import style from './index.module.scss';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className}`}
    >
      <main >
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div >
          <h1  className={style.primaryText}>
            CYSelectronics
          </h1>
        </div>
        <div ></div>
      </main>
    </div>
  );
}
