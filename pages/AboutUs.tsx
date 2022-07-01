import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="">
      <div className="bg-[#005410]">
        <h1 className="text-[#fff] font-semibold text-3xl uppercase py-8 px-8">
          about us
        </h1>
      </div>
      <div className="">
        <Image src="/Images/image 1.jpg" height={775} width={1440} />
      </div>
    </div>
  );
};

export default AboutUs;
