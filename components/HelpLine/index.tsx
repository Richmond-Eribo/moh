import { useState } from "react";
import contact from "../../public/Images/contact.png";
import Image from "next/image";
import Reach from "components/Reach";

const HelpLine = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="">
      {isOpen || (
        <button
          className=" bg-gray-100 ring-2  ring-red-800 flex items-center justify-center p-3 rounded-full  fixed bottom-10 z-50  right-10 shadow-lg "
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={contact}
            alt="helpline"
            width={40}
            height={40}
            className="rounded-full "
          />
        </button>
      )}

      <div className="fixed bottom-10 z-50 right-6">
        {isOpen && <Reach setIsOpen={setIsOpen} />}
      </div>
    </section>
  );
};

export default HelpLine;
