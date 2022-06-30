import { NextServer } from "next/dist/server/next";
import Image from "next/image";
import info1 from "../Images/info - 001.png";
import info2 from "../Images/info - 002.png";
import info3 from "../Images/info - 003.png";
import info4 from "../Images/info - 004.png";

const Highlights = function () {
  return (
    <section className="container pb-7 pt-7">
      <div>
        <h3 className="text-center font-bold text-4xl text-black mb-20 pt-14">
          Hightlights
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={info1} width={310} height={310} />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={info2} width={310} height={310} />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={info3} width={310} height={310} />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={info4} width={310} height={310} />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
