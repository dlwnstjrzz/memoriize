import Header from "./Header";
import UserDescription from "./UserDescription";
import Category from "./Category";
import GridItems from "./GridItems";
import Footer from "./Footer";

export default function SnsType1() {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center mx-auto max-w-3xl">
      <Header />
      <UserDescription />
      <div className="w-full px-4 md:px-8">
        <p className="text-sm sm:text-base font-medium sm:font-semibold">
          L catt
        </p>
        <p className="text-sm sm:text-base font-light">
          This is v.1 of memoriize sns type Template.
          <br />
          memoriize Portfolio Template.
        </p>
      </div>
      <Category />
      <GridItems />
      <Footer />
    </main>
  );
}
