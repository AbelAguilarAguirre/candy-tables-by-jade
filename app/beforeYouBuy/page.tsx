import Image from "next/image";
import LinkButton from "../Components/LinkButton";

export default function BeforeYouBuy() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background font-sans ">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center bg-[url(/treatsBackground.jpg)] bg-scroll bg-contain">
                <div className="w-full flex flex-row gap-6 justify-center items-center bg-background p-4">
                    <Image
                        src="/logo.webp"
                        alt="Logo for Candy Tables By Jade"
                        width={50}
                        height={50}
                    />
                    <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight ">
                        ♡Before You Order♡
                    </h1>
                </div>
                <h2 className="w-[100vw] bg-foreground">
                    Pickup in Oceanside, CA
                </h2>
                <p className="p-2 mb-2 bg-background w-full">
                    Hours for pickup <br /> Wednesday-Friday: 10 AM - 8 PM
                    <br /> Saturday 9am-12pm <br /> Sunday CLOSED <br />
                    If you need treats for Sunday. <br /> We can arrange pickup
                    for Saturday evening.
                </p>
                <h2 className="w-[100vw] bg-foreground">Deposit</h2>
                <p className="p-2 mb-2 bg-background">
                    50% is required to book. <br />
                    Forms of payment are PayPal, Venmo, and Zelle.
                    <br /> Please note: there is a 3% transaction fee added with
                    PayPal.
                    <br /> Remaining balance is due at pickup- please bring cash
                    or your payment app ready.
                </p>
                <h2 className="w-[100vw] bg-foreground">Cancellations</h2>
                <p className="p-2 mb-2 bg-background ">
                    Deposits are Non-Refundable,
                    <br /> but may be applied as credit toward a future event
                    within a 12 month period.
                </p>
                <h2 className="w-[100vw] bg-foreground">Changes</h2>
                <p className="p-2 mb-2 bg-background ">
                    We don't offer substitutions for treat bundles, but you can
                    always add a little extra sweetness from our menu or create
                    your own custom bundle!
                    <br /> Any changes after deposit must be made 10 days before
                    your event.
                    <br /> Due to availability, not all changes are guaranteed.
                </p>
                <h2 className="w-[100vw] bg-foreground">Pickups</h2>
                <p className="p-2 mb-2 bg-background ">
                    Please be on time for pickup. <br />
                    If you are running late let us know ahead of time. <br />A
                    $15 fee will be applied if you are later than 20 minutes
                    past your scheduled pickup time without any PRIOR
                    communication.
                </p>
                <h2 className="w-[100vw] bg-foreground">Disclaimer</h2>
                <p className="p-2 mb-2 bg-background ">
                    All items are made in a kitchen that may come in contact
                    with nuts, dairy, or gluten.
                </p>
                <div className="m-4">
                    <LinkButton href="/" text="I Understand and Agree" />
                </div>
            </main>
        </div>
    );
}
