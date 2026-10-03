import Navbar from "./Navbar";
import Hero from "./Hero";
import Categories from "./Categories";
import Brands from "./BrandSection";
import OnlineBrands from "./OnlineBrands";
import OnlineBrands1 from "./OnlineBrands1";
import BrandSection from "./BrandSection";
import Footer from "./Footer";

function App() {
    return (
        <div className="w-full">

            <div className="h-[75vh] bg-[#3f16b5]">
                <Navbar />
                <Hero />
            </div>

            <Categories />

            <Brands />

            <OnlineBrands />
            <OnlineBrands1/>
            <BrandSection/>
            <Footer/>

        </div>
    );
}

export default App;