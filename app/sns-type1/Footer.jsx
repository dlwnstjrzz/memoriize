import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-around p-4 sm:p-8 w-full">
      <Image src="/twitter.png" alt="twitter" width={32} height={32} />
      <Image src="/instagram.png" alt="instagram" width={32} height={32} />
      <Image src="/linkedin.png" alt="linkedin" width={32} height={32} />
      <Image src="/youtube.png" alt="youtube" width={32} height={32} />
    </div>
  );
}
