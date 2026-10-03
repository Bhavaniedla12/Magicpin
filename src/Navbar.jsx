import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { name: "About us", arrow: true },
        { name: "Around you", arrow: false },
        { name: "Blog", arrow: false },
        { name: "Velocity", arrow: true },
        { name: "Vera", arrow: true },
        { name: "Business", arrow: true }
    ];

    return (
        <nav className="w-full px-4 pt-4 sm:px-6 md:px-10 lg:px-[8.5vw] lg:pt-[3vh]">
            <div className="flex items-center justify-between gap-3">
                {/* Logo */}
                <div className="text-white">
                    <h1 className="text-2xl sm:text-3xl lg:text-[3vw] font-bold leading-none">
                        magicpin
                    </h1>
                    <p className="hidden text-xs sm:block sm:text-sm lg:text-[0.9vw] font-medium">
                        Local Savings SuperApp
                    </p>
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-center rounded-full bg-[#32118f] p-2 text-white lg:hidden"
                    aria-label="Toggle menu"
                >
                    <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
                </button>

                <div
                    className="hidden
                        lg:flex
                        items-center
                        gap-4
                        xl:gap-[2.5vw]
                        bg-[#32118f]
                        rounded-full
                        px-4
                        xl:px-[2vw]
                        py-3
                        xl:py-[1.2vh]
                    "
                >
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            className="
                                flex
                                items-center
                                gap-1
                                text-white
                                text-sm
                                xl:text-[1.2vw]
                                font-semibold
                                whitespace-nowrap
                            "
                        >
                            {item.name}
                            {item.arrow && <span className="text-xs xl:text-[1vw]">⌄</span>}
                        </button>
                    ))}

                    {/* Get App */}
                    <div className="flex items-center gap-2 text-white text-sm xl:text-[1.1vw] whitespace-nowrap">
                        <span>Get app:</span>
                        <span className="text-lg xl:text-[1.5vw]">🤖</span>
                    </div>

                    {/* Sign In */}
                    <button
                        className="
                            bg-[#ff3985]
                            text-white
                            font-bold
                            text-sm
                            xl:text-[1.2vw]
                            px-4
                            xl:px-[1.3vw]
                            py-2
                            xl:py-[1vh]
                            rounded-lg
                            xl:rounded-[0.7vw]
                            border
                            border-white
                            whitespace-nowrap
                        "
                    >
                        Sign In/Up
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {open && (
                <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-[#32118f] p-4 lg:hidden">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            className="flex items-center justify-between text-left text-white text-base font-semibold"
                        >
                            {item.name}
                            {item.arrow && <span className="text-sm">⌄</span>}
                        </button>
                    ))}

                    <div className="flex items-center gap-2 text-white text-sm">
                        <span>Get app:</span>
                        <span className="text-lg">🤖</span>
                    </div>

                    <button className="mt-1 w-full rounded-lg border border-white bg-[#ff3985] px-4 py-2 text-center text-sm font-bold text-white">
                        Sign In/Up
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
