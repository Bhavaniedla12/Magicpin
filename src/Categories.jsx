import categories from "./data/categories";

function Categories() {
    return (
        <section className="w-full bg-[#f8f8fc] px-4 py-6 sm:px-6 md:px-10 lg:px-[3vw] lg:py-[2vh]">
            <div
                className="
                    flex
                    gap-4
                    overflow-x-auto
                    pb-2
                    sm:grid
                    sm:grid-cols-3
                    sm:gap-4
                    sm:overflow-visible
                    md:grid-cols-4
                    lg:flex
                    lg:justify-between
                    lg:gap-0
                "
            >
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="
                            relative
                            h-[160px]
                            w-[150px]
                            flex-shrink-0
                            overflow-hidden
                            rounded-2xl
                            border
                            border-purple-200
                            bg-white
                            sm:h-[170px]
                            sm:w-full
                            lg:h-[20vh]
                            lg:w-[13vw]
                            lg:rounded-[1.5vw]
                        "
                    >
                        {/* Tag */}
                        <span
                            className="
                                absolute
                                left-2
                                top-2
                                rounded-full
                                bg-[#d9f5f5]
                                px-2
                                py-1
                                text-[10px]
                                text-[#159ca5]
                                sm:text-xs
                                lg:left-[0.7vw]
                                lg:top-[1vh]
                                lg:px-[0.7vw]
                                lg:py-[0.4vh]
                                lg:text-[0.8vw]
                            "
                        >
                            {category.tag}
                        </span>

                        {/* Title */}
                        <h2
                            className="
                                absolute
                                left-2
                                top-10
                                max-w-[80%]
                                text-sm
                                font-medium
                                text-gray-800
                                sm:text-base
                                lg:left-[0.8vw]
                                lg:top-[5.5vh]
                                lg:text-[1.3vw]
                            "
                        >
                            {category.title}
                        </h2>

                        {/* Image */}
                        <img
                            src={category.image}
                            alt={category.title}
                            className="
                                absolute
                                bottom-0
                                right-0
                                h-[80px]
                                w-[90px]
                                object-contain
                                sm:h-[90px]
                                sm:w-[100px]
                                lg:h-[11vh]
                                lg:w-[8.5vw]
                            "
                        />
                    </div>
                ))}

                {/* View All Categories */}
                <div
                    className="
                        flex
                        h-[160px]
                        w-[100px]
                        flex-shrink-0
                        flex-col
                        items-center
                        justify-center
                        sm:h-[170px]
                        sm:w-full
                        lg:h-[20vh]
                        lg:w-[8vw]
                    "
                >
                    <div
                        className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-purple-200
                            bg-white
                            sm:h-16
                            sm:w-16
                            lg:h-[4vw]
                            lg:w-[4vw]
                        "
                    >
                        <span className="text-xl text-purple-600 sm:text-2xl lg:text-[2vw]">
                            →
                        </span>
                    </div>

                    <p className="mt-2 text-center text-xs text-gray-700 sm:text-sm lg:mt-[1vh] lg:text-[1vw]">
                        View all
                        <br />
                        categories
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Categories;
