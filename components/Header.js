import Image from "next/image";
import SideMenu from "./SideMenu";
import Link from "next/link";
// import picture from "../public/images/"

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-around pt-10 ">
        {/* photo */}
        <div>
          <Image src="/images/capulcu.jpg" width={400} height={400} />
        </div>
        {/* name */}
        <div>
          <Link href="/">
            <h1 className="cursor-pointer name-typhography text-9xl ubuntu-font">
              ahmet
              <br />
              tanrıkulu
            </h1>
          </Link>
        </div>
        {/* side menu */}
        <div>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
