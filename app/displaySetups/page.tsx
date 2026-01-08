import Image from "next/image";
import LinkButton from "../Components/LinkButton";
import { url } from "inspector";

export default function DisplaySetups() {
    return (
        <div className="flex min-h-screen items-center justify-center  font-sans bg-[url(/treatsBackground.jpg)] bg-scroll bg-contain">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center ">
                <div className="w-full flex flex-row gap-6 justify-center items-center bg-foreground p-4">
                    <Image
                        src="/logo.webp"
                        alt="Logo for Candy Tables By Jade"
                        width={50}
                        height={50}
                    />
                    <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight ">
                        ♡Display Setups♡
                    </h1>
                </div>
                <h2 className="bg-background ">
                    <hr />
                    ♡Dessert Stands♡
                    <hr />
                </h2>
                <div className="flex flex-col gap-2 flex-wrap justify-evenly">
                    <div className="w-[100vw]">
                        <div className="flex flex-col flex-wrap bg-foreground px-4 py-2 text-center justify-evenly gap-2">
                            <p className=" px-3">
                                Need a beautiful setup for your treats?
                                <br />
                                <br /> Add a set of dessert stands, trays, and
                                display pieces to your treat bundle for a
                                polished, event-ready presentation.
                                <br /> Available in Gold or White
                                <br />
                                <br />
                            </p>
                            <p className="text-lg px-4 py-2">
                                7-Piece Set (fits Small bundle) $50
                                <br />
                                10-Piece Set (fits Classic bundle) $65
                                <br />
                                14-Piece Set (fits Deluxe bundle) $85
                                <br />
                            </p>
                            <p className="text-left m-auto px-4 py-4">
                                Included with rental:
                                <br /> ♡ Standard folding table
                                <br /> ♡ Elegant Fabrics
                                <br /> ♡ Matching Tablecloth
                                <br /> ♡ Table skirt (optional)
                                <br /> ♡ Complete aesthetic setup
                                <br /> ♡ Full Cleanup
                            </p>
                            <p className="text-center m-auto px-4 py-4">
                                Delivery Only <br />
                                Delivery fee varies based on zip code <br />
                                <br />
                                Please Note: available as an add-on ONLY with
                                the purchase of any treat bundle.
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <h2 className="bg-background ">
                    <hr />
                    ♡Dessert Cart♡
                    <hr />
                </h2>
                <div className="flex flex-col gap-2 flex-wrap justify-evenly">
                    <div className="w-[100vw]">
                        <div className="flex flex-row flex-wrap bg-foreground px-4 py-2 text-left justify-evenly gap-2">
                            <p className="text-left m-auto px-4 py-4">
                                $130 for the day <br />
                                Delivery fee varies based on zip code. <br />
                                <br />
                                Dessert Cart Rental includes: <br />
                                ♡ Wooden Sign
                                <br />
                                ♡ Dessert Stands (gold or white) <br />
                                ♡ Candy Jars (optional) <br />
                                ♡ Faux Florals (optional) <br />
                                <br />
                                Custom vinyl decal available as add-on. <br />
                                Price varies depending on design and size
                            </p>
                        </div>
                        <Image
                            className="rounded-sm outline-5 outline-black m-auto my-5 max-w-9/10"
                            src="/cart1.jpg"
                            alt="Dessert Cart Setup 1"
                            width={600}
                            height={400}
                        />
                        <Image
                            className="rounded-sm outline-5 outline-black m-auto my-5 max-w-9/10"
                            src="/cart2.jpg"
                            alt="Dessert Cart Setup 2"
                            width={600}
                            height={400}
                        />
                        <Image
                            className="rounded-sm outline-5 outline-black m-auto my-5 max-w-9/10"
                            src="/cart3.jpg"
                            alt="Dessert Cart Setup 3"
                            width={600}
                            height={400}
                        />
                        <div className="flex flex-row flex-wrap bg-foreground px-4 py-2 text-left justify-evenly gap-2">
                            <p className="text-left m-auto px-4 py-4">
                                Wooden signs available:
                                <br /> ♡ Oh baby <br />♡ Baby in bloom <br />♡
                                we can bearly wait <br />♡ Sweet 16 <br />♡
                                Happy Birthday <br />♡ Congrats Grad
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <h2 className="bg-background ">
                    <hr />
                    ♡Party Cylinders♡
                    <hr />
                </h2>
                <div className="flex flex-col gap-2 flex-wrap justify-evenly">
                    <div className="w-[100vw]">
                        <div className="flex flex-row flex-wrap bg-foreground px-4 py-2 text-center justify-evenly gap-2">
                            <p className="text-left m-auto px-4 py-4">
                                Available as a single or a set of 2-5 <br />
                                <br />
                                Pricing: <br />
                                <br />
                                5 Cylinders - $60 <br />
                                4 Cylinders - $55 <br />
                                3 Cylinders - $50 <br />
                                2 Cylinders - $45 <br />
                                1 Cylinder - $40 <br />
                                <br />
                                Included in Rental: Carrying Case & Covers{" "}
                                <br />
                                Available Colors: Black, White, Dusty Rose and
                                Beige.
                                <br />
                                <br />
                                Pickup and next day Drop-off available. <br />
                                Deposit required $120 (returned after drop-off)
                                <br />
                                <br />
                                Delivery available for additional fee based on
                                zipcode
                            </p>
                        </div>
                        <Image
                            className="rounded-sm outline-5 outline-black m-auto my-5 max-w-9/10"
                            src="/cylinder1.jpg"
                            alt="Cylinder Setup 1"
                            width={600}
                            height={400}
                        />
                        <Image
                            className="rounded-sm outline-5 outline-black m-auto my-5 max-w-9/10"
                            src="/cylinder2.jpg"
                            alt="Cylinder Setup 2"
                            width={600}
                            height={400}
                        />
                        <Image
                            className="rounded-sm outline-5 outline-black m-auto my-5 max-w-9/10"
                            src="/cylinder3.jpg"
                            alt="Cylinder Setup 3"
                            width={600}
                            height={400}
                        />
                        <Image
                            className="rounded-sm outline-5 outline-black m-auto my-5 max-w-9/10"
                            src="/cylinder4.jpg"
                            alt="Cylinder Setup 4"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
                <div className="m-4">
                    <LinkButton href="/" text="Back to Home" />
                </div>
            </main>
        </div>
    );
}
