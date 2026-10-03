function CategoryCard({ category }) {
    return (
        <div
            className="
                relative
                h-[150px]
                w-[150px]
                flex-shrink-0
                overflow-hidden
                rounded-2xl
                border
                border-purple-200
                bg-white
                shadow-sm
                transition
                duration-300
                hover:shadow-lg
                sm:h-[160px]
                sm:w-full
                lg:h-[17vh]
                lg:w-[13vw]
                lg:rounded-[1.5vw] "   >
            <span
                className="
                    absolute
                    left-2
                    top-2
                    z-10
                    rounded-full
                    bg-[#d9f5f5]
                    px-2
                    py-1
                    text-[10px]
                    font-semibold
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
                    z-10
                    max-w-[70%]
                    text-sm
                    font-medium
                    text-gray-800
                    sm:text-base
                    lg:left-[0.8vw]
                    lg:top-[5.5vh]
                    lg:max-w-[6vw]
                    lg:text-[1.3vw]
                "
            >
                {category.title}
            </h2>
            {category.offer && (
                <span
                    className="
                        absolute
                        bottom-2
                        left-2
                        z-10
                        rounded-full
                        border
                        border-purple-400
                        px-2
                        py-1
                        text-[10px]
                        text-purple-700
                        lg:bottom-[1vh]
                        lg:left-[0.7vw]
                        lg:px-[0.6vw]
                        lg:py-[0.3vh]
                        lg:text-[0.7vw] ">
                    {category.offer}
                </span>
            )}

            <img
                src={category.image}
                alt={category.title}
                className="
                    absolute
                    bottom-0
                    right-0
                    h-[70px]
                    w-[80px]
                    object-contain
                    sm:h-[80px]
                    sm:w-[90px]
                    lg:h-[9vh]
                    lg:w-[7vw] "/>
        </div>
    );
}

export default CategoryCard;
