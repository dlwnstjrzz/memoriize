import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserDescription() {
  return (
    <div className="flex justify-between items-center w-full pl-4 pr-6 sm:pr-8 md:pl-8 md:pr-16">
      <Avatar className={"w-[102px] h-[102px] sm:w-36 sm:h-36"}>
        <AvatarImage
          // src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1713308272877"
          src="https://github.com/shadcn.png"
          alt="profile"
        />
        <AvatarFallback>Memoriize</AvatarFallback>
      </Avatar>
      <div className="flex w-[60%] sm:w-[50%] -ml-2 justify-between md:gap-16 md:w-[auto]">
        <SubDescription title={36} description={"Projects ✅"} />
        <SubDescription title={13} description={"Experience"} />
        <SubDescription title={4589} description={"coffee chat"} />
      </div>
    </div>
  );
}

function SubDescription({ title, description }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-base sm:text-lg font-bold">{title}</h2>
      <p className="font-medium text-[11px] sm:text-sm">{description}</p>
    </div>
  );
}
