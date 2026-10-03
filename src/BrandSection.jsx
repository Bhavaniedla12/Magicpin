
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import pcj from "./assets/pcj-logo.png";
import mcd from "./assets/mcd.png";
import decathlon from "./assets/decathlon.png";
import bira from "./assets/bira.png";
import emami from "./assets/emami.png";

import molecule from "./assets/molecule.png";
import medplus from "./assets/mudpipe.png";
import imperfecto from "./assets/imperfecto.png";
import bigbasket from "./assets/wataburger.png";
import vapour from "./assets/vapour.png";
import abs from "./assets/absolute.png";
import bindals from "./assets/bindals.png";

function BrandSection() {

  let brandImages = [pcj, mcd, decathlon, bira, emami];

  let retailerImages = [ molecule, medplus, imperfecto, bigbasket, vapour, abs, bindals];

  return (
    <section className="bg-[#3f16b5] p-5">

      <div className="mx-auto max-w-[1080px] bg-white rounded-2xl">

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 text-center md:border-r">
            <div className="flex flex-wrap justify-center items-center gap-3 mb-5">
              {brandImages.map((image, index) => (
                <div
                  key={index}
                  className="w-12 h-12 flex justify-center items-center"
                >
                  <img
                    src={image}
                    alt="Brand"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}

            </div>

            <h2 className="text-xl font-bold text-[#f72585]">
              magicpin for Brands
            </h2>

            <p className="text-gray-600 text-sm mt-2">
              Try the most powerful platform to drive consumer engagement,
              offline commerce and generate actionable insights.
            </p>

            <button className="bg-[#f72585] text-white rounded-full w-12 h-12 mt-4">
              <ArrowForwardIcon />
            </button>

          </div>
          <div className="p-8 text-center">

            <div className="flex flex-wrap justify-center items-center gap-2 mb-5">

              {retailerImages.map((image, index) => (
                <div
                  key={index}
                  className="w-11 h-11 flex justify-center items-center"
                >
                  <img
                    src={image}
                    alt="Retailer"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}

            </div>

            <h2 className="text-xl font-bold text-[#f72585]">
              magicpin for SME retailers
            </h2>

            <p className="text-gray-600 text-sm mt-2">
              Promote your business with a platform designed to attract
              the right audience based on location, spending pattern,
              gender, and more.
            </p>

            <button className="bg-[#f72585] text-white rounded-full w-12 h-12 mt-4">
              <ArrowForwardIcon />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BrandSection;

