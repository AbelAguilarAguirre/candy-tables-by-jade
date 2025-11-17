import Image from "next/image";
import LinkButton from "../Components/LinkButton";

export default function BeforeYouBuy() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-8 dark:bg-black ">
                <div className="w-full flex flex-row items-center gap-6 text-center justify-center ">
                    <Image
                        src="/logo.webp"
                        alt="Logo for Candy Tables By Jade"
                        width={50}
                        height={50}
                        style={{ marginBottom: 24 }}
                    />
                    <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight text-foreground dark:text-zinc-50 mb-6">
                        ♡Treat Bundles♡
                    </h1>
                </div>
                <div className="flex flex-row gap-1 flex-wrap justify-evenly">
                    <div className="w-[48vw] border">
                        <h2 className="bg-background">♡Mini♡</h2>
                        <p id="headerDesc">5 Dozen - 60 items</p>
                        <p className="bg-foreground px-4 py-1 mx-1">
                            12 Oreos <br />
                            12 Pretzels <br />
                            12 Ricekrispies <br />
                            12 Strawberries <br />
                            12 Cheesecake Shooters
                        </p>
                        <h2 className="py-0">$155</h2>
                        <p className="text-center">
                            2-3 colors <br />
                            sprinkles or shimmer
                        </p>
                        <p className="text-center py-2">
                            Add gold or silver <br />
                            +$10
                        </p>
                    </div>
                    <div className="w-[48vw] border">
                        <h2 className="bg-background">♡Small♡</h2>
                        <p id="headerDesc">8 Dozen - 96 items</p>
                        <p className="bg-foreground px-4 py-1 mx-1">
                            18 Oreos <br />
                            18 Pretzels <br />
                            18 Ricekrispies <br />
                            18 Strawberries <br />
                            24 Cheesecake Shooters
                        </p>
                        <h2 className="py-0">$250</h2>
                        <p className="text-center">
                            2-3 colors <br />
                            sprinkles or shimmer
                        </p>
                        <p className="text-center py-2">
                            Add gold or silver <br />
                            +$10
                        </p>
                    </div>
                    <div className="w-[48vw] border">
                        <h2 className="bg-background">♡Classic♡</h2>
                        <p id="headerDesc">12 Dozen - 144 items</p>
                        <p className="bg-foreground px-4 py-1 mx-1">
                            24 Oreos <br />
                            24 Pretzels <br />
                            24 Ricekrispies <br />
                            24 Strawberries <br />
                            24 Cheesecake Shooters
                        </p>
                        <h2 className="py-0">$310</h2>
                        <p className="text-center">
                            2-3 colors <br />
                            sprinkles or shimmer
                        </p>
                        <p className="text-center py-2">
                            Add gold or silver <br />
                            +$15
                        </p>
                    </div>
                    <div className="w-[48vw] border">
                        <h2 className="bg-background">♡Deluxe♡</h2>
                        <p id="headerDesc">19 Dozen - 228 items</p>
                        <p className="bg-foreground px-4 py-1 mx-1">
                            36 Oreos <br />
                            36 Pretzels <br />
                            36 Ricekrispies <br />
                            36 Strawberries <br />
                            48 Cheesecake Shooters
                        </p>
                        <h2 className="p-0">$500</h2>
                        <p className="text-center">
                            2-4 colors <br />
                            sprinkles or shimmer
                        </p>
                        <p className="text-center py-2">
                            Add gold or silver <br />
                            +$15
                        </p>
                    </div>
                    <p className="text-center mb-8">
                        All prices reflect a simple drizzle and your choice of
                        sprinkles or luster dust. <br />
                        Add-ons and themed desserts may include an additional
                        fee
                    </p>
                </div>
                <h2>
                    <hr />
                    ♡Dessert Menu♡
                    <hr />
                </h2>
                <p className="text-xl">Add-ons OR Build your own Bundle</p>
                <div className="flex flex-col gap-1 flex-wrap justify-evenly">
                    <div className="w-[100vw] py-5">
                        <h2 className="bg-background">♡Dipped in Chocolate♡</h2>
                        <div className="flex flex-row flex-wrap bg-foreground px-4 py-2 text-center justify-evenly gap-2">
                            <p className=" px-3">12 Oreos $30</p>
                            <p className=" px-3">12 Pretzels $25</p>
                            <p className=" px-3">12 Ricekrispies $30</p>
                            <p className=" px-3">12 Strawberries $35</p>
                        </div>
                    </div>
                    <div className="w-[100vw] py-5">
                        <h2 className="bg-background">♡Baked Goodness♡</h2>
                        <div className="flex flex-row flex-wrap bg-foreground px-4 py-2 text-center justify-evenly gap-2">
                            <p className=" px-3">24 Mini brownies $30</p>
                            <p className=" px-3">
                                24 Mini Cupcakes Pretzels $35
                            </p>
                            <p className=" px-3">12 Cupcakes $40</p>
                            <p className=" px-3">12 Cakepops $35</p>
                            <p className=" px-3">12 Cakesicles $45</p>
                        </div>
                    </div>
                    <div className="w-[100vw] pt-5">
                        <h2 className="bg-background">♡3oz Dessert Cups♡</h2>
                        <div className="flex flex-row flex-wrap bg-foreground px-4 py-2 text-center justify-evenly gap-2">
                            <p className=" px-3">
                                12 Cheesecakes $36 Flavors: Oreo, Strawberry,
                                Biscoff
                            </p>
                            <p className=" px-3">
                                12 Fresas con Crema $38 (Strawberries and Cream)
                            </p>
                            <p className=" px-3">
                                12 Traditional Flans $40 (Cupcake Size)
                            </p>
                            <p className=" px-3"></p>
                        </div>
                    </div>
                    <p className="text-center text-sm">
                        *Mini spoons included with all desserts in a cup
                    </p>
                    <p className="text-center">
                        All prices reflect a simple drizzle and your choice of
                        sprinkles or luster dust.
                    </p>
                    <p className="text-center">Custom made for each occasion</p>
                    <p className="text-center text-4xl">♡</p>
                    <p className="text-center">
                        Add-ons and themed desserts may include an additional
                        fee
                    </p>
                    <p className="text-center text-4xl">♡</p>
                    <p className="text-center">
                        Inspo pics are always welcome, but please remember that
                        every treat maker has their own style. <br />
                        Inspo pics are used to match the style and vibe and no
                        two treats are ever exactly the same.
                    </p>
                </div>
                <div className="mt-8">
                    <LinkButton href="/" text="Back to Home" />
                </div>
            </main>
        </div>
    );
}
