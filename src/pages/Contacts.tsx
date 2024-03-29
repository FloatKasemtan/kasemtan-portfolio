import React, { useEffect } from "react";
import mailLogo from "../assets/logo/email.png";
import linkedinLogo from "../assets/logo/linkedin.png";
import facebookLogo from "../assets/logo/facebook-app-symbol.png";
import githubLogo from "../assets/logo/github.png";

const Contacts: React.FC = () => {
  useEffect(() => {
    document.title = "FloatyKT · Contacts";
  }, []);

  return (
    <div className="px-48 pb-10">
      <div className="mb-10 text-xl flex-center topic">Contact</div>
      <div className="flex flex-col items-center gap-10">
        <a
          className="flex p-2 gap-2 rounded-md border-[1px] border-gray-500 justify-center w-96 relative"
          href="mailto: work@floatykt.com"
          target="_blank"
        >
          <img className="absolute left-4" src={mailLogo} alt="Mail" />
          <div>work@floatykt.com</div>
        </a>
        <a
          className="flex p-2 gap-2 rounded-md border-[1px] border-gray-500 justify-center w-96 relative"
          href="https://github.com/FloatKasemtan"
          target="_blank"
        >
          <img className="absolute left-4" src={githubLogo} alt="Github" />
          <div>FloatKasemtan</div>
        </a>
        <a
          className="flex p-2 gap-2 rounded-md border-[1px] border-gray-500 justify-center w-96 relative"
          href="https://www.facebook.com/float.teavasirichokchai/"
          target="_blank"
        >
          <img className="absolute left-4" src={facebookLogo} alt="Facebook" />
          <div>(Float) Kasemtan Tevasirichokchai</div>
        </a>
        <a
          className="flex p-2 gap-2 rounded-md border-[1px] border-gray-500 justify-center w-96 relative"
          href="https://www.linkedin.com/in/kasemtan-teavasirichokchai-975531227/"
          target="_blank"
        >
          <img className="absolute left-4" src={linkedinLogo} alt="Linkedin" />
          <div>Kasemtan Tevasirichokchai</div>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
