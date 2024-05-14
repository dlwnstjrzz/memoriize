import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Category() {
  return (
    <div className="px-4 sm:px-8 w-full">
      <div className="flex justify-between gap-4">
        <CategoryCard title={"More templates"} />
        <CategoryCard title={`Dont't push!`} />
        <CategoryCard title={"Contact"} />
      </div>
      <div className="flex gap-[1%] sm:gap-8 align-left py-6 px-2">
        <CircleCard
          url={
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1713308272877"
          }
        />
        <CircleCard
          url={
            "https://6ce71b59dc027617.demo.carrd.co/assets/images/image04.jpg?v=3d98334b"
          }
        />
        <CircleCard
          url={
            "https://6ce71b59dc027617.demo.carrd.co/assets/images/image01.jpg?v=3d98334b"
          }
        />
        <CircleCard
          url={
            "https://6ce71b59dc027617.demo.carrd.co/assets/images/image03.jpg?v=3d98334b"
          }
        />
      </div>
    </div>
  );
}

function CategoryCard({ title }) {
  return (
    <div className="truncate ... flex flex-1 bg-[#EFEFEF] justify-center rounded-xl text-[13px] sm:text-lg font-normal py-2">
      <p className="text-ellipsis overflow-hidden mx-2">{title}</p>
    </div>
  );
}

function CircleCard({ url }) {
  return (
    <Avatar
      className={
        "w-[20%] h-[20%] max-w-24 max-h-24 sm:w-24 sm:h-24 border-[#C3C3C3] border-[5px]"
      }
    >
      <AvatarImage src={url} alt="profile" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
