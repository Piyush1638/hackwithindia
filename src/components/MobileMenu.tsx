import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
  

const Mobilemenu = () => {
  return (
    <div className="tablet:hidden block">
      <Sheet>
        <SheetTrigger>
          <RxHamburgerMenu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
            <SheetDescription className="flex flex-col gap-6 w-full my-10 items-start">
              <Link href="/recycle" className="text-lg hover:text-black">Recycle</Link>
              <Link href="/sell" className="text-lg hover:text-black">Sell</Link>
              <Link href="/buy" className="text-lg hover:text-black">Buy</Link>
              <Link href="/e-waste-collection" className="text-lg hover:text-black">E-waste Collection</Link>
              <Link href="/login" className="text-lg hover:text-black">Login</Link>


            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Mobilemenu;
