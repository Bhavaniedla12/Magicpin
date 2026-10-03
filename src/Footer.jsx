
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {

    let categories = [
        "Restaurants", "Beauty", "Fashion", "Grocery", "Fitness",
        "Electronics", "Hotel", "Pharmacy", "Other" ];

    let cities = [
        "Gurgaon", "Faridabad", "Greater Noida", "Sonipat",
        "Jaipur", "Noida", "Ghaziabad", "Meerut", "Chandigarh" ];

    let localities = [
        "Connaught Place", "Tagore Garden", "Brigade Road",
        "Sector 29", "Ambience Mall", "Sector 17", "C Scheme",
        "Colaba", "Hauz Khas Village", "Koramangala", "HSR",
        "DLF Cyber City", "Sector 8", "Sector 11",
        "Bandra Kurla Complex", "Malad West" ];

    let restaurants = [
        "Rico's", "Hauz Khas Social", "Bistro Claytopia",
        "Burger Point", "Flames", "Warehouse Cafe",
        "JECRC Cafeteria", "Leopold Cafe & Bar",
        "QD's Restaurant", "Truffles", "Arbor Brewing Company",
        "Nik Baker's", "Molecule Air Bar", "Vapour Bar Exchange",
        "Starbucks Coffee", "Joey's Pizza" ];

    let footerLinks = [
        "News Room", "About Us", "Around You", "Blog", "Near Me",
        "Spirits Compare", "Terms & Conditions", "Sitemap",
        "Places", "Partner", "Brands", "magicpin for Corporates",
        "Vera", "Careers", "Web Stories"
 ];

    return (
        <footer className="relative z-10 overflow-hidden bg-[#35139b] px-4 pt-20 pb-8 text-white sm:px-8 sm:pt-28 md:pt-36 lg:px-16 lg:pt-44">
            <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-pink-400 sm:top-32 sm:h-[600px] sm:w-[600px] lg:top-40 lg:h-[800px] lg:w-[800px]"></div>
     <div className="absolute left-1/2 top-20 h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-pink-400 sm:top-32 sm:h-[520px] sm:w-[520px] lg:top-40 lg:h-[700px] lg:w-[700px]"></div>
 <div className="absolute left-1/2 top-20 h-[300px] w-[300px] -translate-x-1/2 rounded-full border border-pink-400 sm:top-32 sm:h-[440px] sm:w-[440px] lg:top-40 lg:h-[600px] lg:w-[600px]"></div>
<div className="absolute left-1/2 top-20 h-[240px] w-[240px] -translate-x-1/2 rounded-full border border-pink-400 sm:top-32 sm:h-[360px] sm:w-[360px] lg:top-40 lg:h-[500px] lg:w-[500px]"></div>
</div>
<div className="relative mx-auto max-w-[1200px]">
<div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
<div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-xl">
                        </div>
                        <a href="#"
                            className="text-lg font-semibold text-pink-500 underline sm:text-xl">
                            Create your free online dukaan
                        </a>
                    </div>
                    <div className="flex gap-3">
                        <a  href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white transition hover:scale-110" >
                            <FacebookIcon />
                        </a>

                        <a  href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white transition hover:scale-110">
                            <InstagramIcon />
                        </a>
                        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white transition hover:scale-110">
                            <LinkedInIcon />
                        </a>

                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white transition hover:scale-110"
                        >
                            <TwitterIcon />
                        </a>

                    </div>

                </div>

                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-base">

                    <span className="font-medium text-pink-500">
                        CATEGORIES:
                    </span>

                    {categories.map((item, index) => (
                        <a
                            href="#"
                            key={index}
                            className="whitespace-nowrap hover:text-pink-400"
                        >
                            {item}
                        </a>
                    ))}

                </div>

                <div className="mt-6 space-y-1 text-sm leading-6 sm:text-base">

                    <p>
                        Name of the Company: SAMAST TECHNOLOGIES PRIVATE LIMITED
                    </p>

                    <p>
                        CIN: U74140HR2015PTC073829
                    </p>

                    <p>
                        Registered Office Address: Plot No.379 & 380, Sector - 29,
                        Near IFFCO Chowk Metro Station, Gurugram, Haryana-122001, India
                    </p>

                    <p>
                        Email: care@magicpin.in
                    </p>

                </div>

                <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">

                    <div>

                        <h3 className="mb-7 text-lg font-semibold text-pink-500">
                            POPULAR CITIES AROUND NEW DELHI
                        </h3>

                        <div className="grid grid-cols-2 gap-x-8">

                            {cities.map((city, index) => (
                                <a
                                    href="#"
                                    key={index}
                                    className="py-1 text-sm sm:text-base"
                                >
                                    {city}
                                </a>
                            ))}

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-7 text-lg font-semibold text-pink-500">
                            POPULAR LOCALITIES IN INDIA
                        </h3>

                        <div className="grid grid-cols-2 gap-x-8">

                            {localities.map((item, index) => (
                                <a
                                    href="#"
                                    key={index}
                                    className="truncate py-1 text-sm sm:text-base"
                                >
                                    {item}
                                </a>
                            ))}

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-7 text-lg font-semibold text-pink-500">
                            POPULAR RESTAURANTS
                        </h3>

                        <div className="grid grid-cols-2 gap-x-8">

                            {restaurants.map((item, index) => (
                                <a
                                    href="#"
                                    key={index}
                                    className="truncate py-1 text-sm sm:text-base"
                                >
                                    {item}
                                </a>
                            ))}

                        </div>

                    </div>

                </div>

                <div className="mt-10 border-y border-pink-400/50 py-5">

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">

                        {footerLinks.map((item, index) => (
                            <a
                                href="#"
                                key={index}
                                className="text-sm hover:text-pink-400 sm:text-base"
                            >
                                {item}
                            </a>
                        ))}

                    </div>

                </div>

                <div className="flex flex-wrap justify-center gap-5 pt-6">

                    <button className="rounded-md bg-black px-6 py-3 text-sm font-medium">
                        Get it on Google Play
                    </button>

                    <button className="rounded-md bg-black px-6 py-3 text-sm font-medium">
                        Download on the App Store
                    </button>

                </div>

            </div>

        </footer>
    );
}

export default Footer;

