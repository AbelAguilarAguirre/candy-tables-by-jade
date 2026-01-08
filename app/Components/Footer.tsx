import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t py-6 text-center text-sm bg-foreground ">
            <p>Candy Tables By Jade. All rights reserved.</p>
            <br />
            <Link
                href="https://github.com/AbelAguilarAguirre"
                className="underline"
            >
                Website Made by Abel Aguilar
            </Link>
        </footer>
    );
}
