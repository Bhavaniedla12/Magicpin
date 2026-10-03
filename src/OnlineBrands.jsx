import onlineBrands from "./data/onlineBrands";

function OnlineBrands() {
    return (
        <section className="w-full bg-[#f8f8fc] px-4 py-10 sm:px-8 md:px-12 lg:px-[8vw] lg:py-[6vh]">
            <h1 className="text-center text-xl font-bold text-[#303b80] sm:text-2xl md:text-3xl lg:text-[2.5vw]">
                Top
                <span className="text-[#d72572]">{" Online "}</span>
                Brands
            </h1>
            <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:mt-[5vh] lg:flex lg:justify-between lg:gap-[2vw]">
                {onlineBrands.map((brand) => (
                    <div
                        key={brand.id}
                        className="
                            flex
                            aspect-square
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-[#ffc9e5]
                            bg-white
                            lg:aspect-auto
                            lg:h-[10.5vw]
                            lg:w-[10.5vw]
                            lg:flex-shrink-0
                            lg:rounded-[2vw]
                        "
                    >
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="h-[65%] w-[65%] object-contain lg:h-[7.5vw] lg:w-[7.5vw]"
                        />
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center lg:mt-[8vh]">
                <h2 className="text-2xl font-bold text-[#222] sm:text-3xl md:text-4xl lg:text-[3.2vw]">
                    Save
                    <span className="text-[#6358d9]">{" 20% "}</span>
                    on your favorite online brands
                </h2>

                <div className="relative mx-auto mt-2 h-4 w-[70%] sm:w-[50%] lg:w-[35vw] lg:h-[4vh]">
                    <div className="absolute left-0 top-0 h-1 w-full rotate-[-1deg] rounded-full bg-[#f4774c] lg:h-[0.5vh]"></div>
                    <div className="absolute left-[30%] top-2 h-1 w-[60%] rotate-[-3deg] rounded-full bg-[#f4774c] lg:top-[1.5vh] lg:h-[0.5vh]"></div>
                </div>
            </div>
        </section>
    );
}

export default OnlineBrands;
