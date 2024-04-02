import WhySellEWaste from "@/components/WhySellEWaste";
import Image from "next/image";
import Link from "next/link";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#F5F5F5]">
      <div className="flex items-center justify-center px-24 py-32">
        <div className="w-1/2">
          <h1 className="text-5xl max-w-xl">
            Transforming <span>E-waste</span> into environmental impact
          </h1>
          <p className="text-lg my-3">
            Turn your old gadgets into green: earn, recycle, and contribute to a
            sustainable future.
          </p>
          <Link href="signup" className="bg-[#3e715c] text-white px-3 py-2 rounded-xl">Get Started</Link>
        </div>
        <div>
          <Image
            src="/assets/images/landing.jpg"
            alt="hero"
            width={600}
            height={500}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="w-full px-24 py-10  bg-[#3e715c]">
        <div>
          <h1 className="text-3xl text-white">Why sell E-waste ?</h1>
          <WhySellEWaste/>
        </div>
      </div>

      <div className="w-full px-24 py-10  bg-[#eff2e4]">
        <div>
        <h1 className="text-3xl text-black">Features</h1>
        <Features/>
        </div>
      </div>
    </main>
  );
}
