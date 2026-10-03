function Hero() {
    return (
        <section
            className="
                relative
                w-full
                min-h-[60vh]
                sm:min-h-[65vh]
                bg-[#3f16b5]
                flex
                flex-col
                items-center
                pt-10
                sm:pt-12
                lg:pt-[8vh]
                pb-16
                px-4
                text-white
                overflow-hidden
            "
        >
            {/* Heading */}
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[3.2vw] font-bold">
                India's
                <span className="text-[#ff287c]">{" #1 "}</span>
                Savings App
            </h1>

            {/* Search Bar */}
            <div
                className="
                    relative
                    z-10
                    mt-6
                    sm:mt-8
                    lg:mt-[4vh]
                    flex
                    w-full
                    sm:w-[90%]
                    lg:w-[54vw]
                    flex-col
                    sm:flex-row
                    items-stretch
                    sm:items-center
                    rounded-2xl
                    lg:rounded-[1.5vw]
                    bg-white
                "
            >
                {/* Location */}
                <div className="flex w-full items-center gap-2 px-4 py-3 sm:w-[30%] sm:py-0 lg:px-[1.8vw] lg:h-[8vh]">
                    <span className="text-lg text-[#ff3985] lg:text-[1.5vw]">◎</span>
                    <input
                        type="text"
                        placeholder="Search Location"
                        className="w-full text-sm text-gray-600 outline-none lg:text-[1.1vw]"
                    />
                </div>

                {/* Divider */}
                <div className="hidden h-[5vh] w-[1px] bg-gray-300 sm:block"></div>
                <div className="block h-[1px] w-full bg-gray-200 sm:hidden"></div>

                {/* Search */}
                <div className="flex w-full items-center gap-2 px-4 py-3 sm:w-[70%] sm:py-0 lg:px-[1.8vw] lg:h-[8vh]">
                    <input
                        type="text"
                        placeholder="Search for places, cuisines, and more..."
                        className="w-full text-sm text-gray-600 outline-none lg:text-[1.1vw]"
                    />
                </div>
            </div>

            {/* City Background - decorative, hidden on small screens to avoid layout issues */}
            <div className="pointer-events-none absolute bottom-0 left-0 hidden h-[25vh] w-full bg-[#2d1089] opacity-60 sm:block">
                <div className="absolute bottom-0 left-[5vw] h-[15vh] w-[8vw] bg-[#210b6e]"></div>
                <div className="absolute bottom-0 left-[18vw] h-[11vh] w-[7vw] bg-[#210b6e]"></div>
                <div className="absolute bottom-0 left-[35vw] h-[17vh] w-[9vw] bg-[#210b6e]"></div>
                <div className="absolute bottom-0 left-[55vw] h-[13vh] w-[8vw] bg-[#210b6e]"></div>
                <div className="absolute bottom-0 left-[72vw] h-[18vh] w-[10vw] bg-[#210b6e]"></div>
                <div className="absolute bottom-0 right-[4vw] h-[22vh] w-[6vw] bg-[#210b6e]"></div>
            </div>
        </section>
    );
}

export default Hero;
