import { Button } from "@/components/ui";
import { SideBarItems } from "@/modules/components/SideBar/contants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className=" overflow-y-hidden hover:overflow-y-auto">
      <div className="flex flex-col gap-2 pr-2 border-r n w-50 max-h-screen ">
        {SideBarItems.map((item, index) => {
          const isActive = item.href === pathname;
          return (
            <Button
              key={index}
              variant={"link"}
              color="default"
              asChild
              cursor={"pointer"}
              className={`items-center justify-start hover:bg-primary/10 hover:text-primary hover:font-semibold hover:opacity-100 ${
                isActive &&
                "bg-primary/30 text-primary font-semibold hover:bg-primary/30"
              }`}
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
