import Image from "next/image";
import LinkButton from "./Components/LinkButton";
import { Info, ReceiptText } from "lucide-react";
import { MdOutlineTableBar } from "react-icons/md";
import { RiCake3Line } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background font-sans ">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-8   ">
                <div className="w-full flex flex-col items-center text-center pb-8">
                    <Image
                        src="/logo.webp"
                        alt="Logo for Candy Tables By Jade"
                        width={200}
                        height={200}
                        priority
                    />
                </div>
                <div className="w-60 flex flex-col gap-4 text-base font-medium sm:w-72 md:w-96">
                    <LinkButton
                        href="https://www.instagram.com/candytablesbyjade/?hl=en"
                        text="Instagram"
                        SvgIcon={
                            <SiInstagram className="h-7 w-7 text-current" />
                        }
                    />
                    <LinkButton
                        href="/beforeYouBuy"
                        text="Before You Order"
                        SvgIcon={<Info className="h-7 w-7 text-current" />}
                    />
                    <LinkButton
                        href="/treatsAndBundles"
                        text="Treats & Bundles"
                        SvgIcon={
                            <RiCake3Line className="h-7 w-7 text-current" />
                        }
                    />
                    <LinkButton
                        href="/displaySetups"
                        text="Display Setups"
                        SvgIcon={
                            <MdOutlineTableBar className="h-7 w-7 text-current" />
                        }
                    />
                    <LinkButton
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        text="Order Form"
                        SvgIcon={
                            <ReceiptText className="h-7 w-7 text-current" />
                        }
                    />
                </div>
            </main>
        </div>
    );
}
