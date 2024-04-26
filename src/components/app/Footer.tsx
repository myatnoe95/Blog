import Image from "next/image";

import CustomLink from "./CustomLink";

const Footer = () => {
  return (
    <footer className="flex lg:flex-row flex-col justify-center items-center lg:justify-between w-full bg-footerColor h-[320px] lg:h-[180px] py-5">
      <div className="hidden lg:inline">
        <Image
          src="/images/doh-clicker-logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="ml-0 lg:ml-10"
        />
      </div>
      <div>
        <div className="flex flex-col items-center lg:items-start mt-4">
          <span>JOIN US FROM HERE</span>
          <span className="text-highlightColor">
            Sign up now to receive weekly news.
          </span>
        </div>
        <div className="flex lg:flex-row flex-col items-center mt-3">
          <input
            type="text"
            placeholder="Name"
            className="p-2 lg:w-[180px] w-[250px] mb-5 lg:mb-0 mr-0 lg:mr-5"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 lg:w-[180px] w-[250px]"
          />
          <button placeholder="Send" className="bg-blue-600 text-white" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <span className="mb-3 pt-3">Contact Us</span>
        <div className="flex flex-row px-5">
          <CustomLink href="https://www.facebook.com/" isSocialLink>
            <Image
              src="/images/facebook.svg"
              alt="facebook logo"
              width={35}
              height={35}
              className="mx-2"
            />
          </CustomLink>

          <CustomLink href="https://www.youtube.com/" isSocialLink>
            <Image
              src="/images/youtube.svg"
              alt="youtube logo"
              width={35}
              height={35}
              className="mx-2"
            />
          </CustomLink>

          <CustomLink href="https://www.instagram.com/" isSocialLink>
            <Image
              src="/images/instagram.svg"
              alt="Instagram logo"
              width={35}
              height={35}
              className="mx-2"
            />
          </CustomLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
