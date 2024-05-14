import { FaInstagram, FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-white flex justify-between w-full p-4 md:px-8">
      <p className="text-xl font-bold md:text-2xl md:font-semibold">
        L@cat_official
      </p>
      <div className="flex gap-6 items-center">
        <FaInstagram size={23} />
        <FaTwitter size={23} />
      </div>
    </div>
  );
}
