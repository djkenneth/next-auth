// Dependencies
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

// Icons
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { BiMinus } from "react-icons/bi";

import COMPUTER from '../../../public/assets/images/Menus/ComputerMenuBanner.jpg'
import COMPONENTS from '../../../public/assets/images/Menus/ComponentMenuBanner.jpg'
import PERIPERALS from '../../../public/assets/images/Menus/ComputerMenuBanner.jpg'
import NETDEVICES from '../../../public/assets/images/Menus/NetDevicesMenuBanner.jpg'
import ACCESSORIES from '../../../public/assets/images/Menus/AccessoriesMenuBanner.jpg'
import GADGETS from '../../../public/assets/images/Menus/GadgetsMenuBanner.jpg'




const categories = [
  {
    name: "COMPUTER",
    image: COMPUTER,
    subCategory: [
      { name: "Desktop PC" },
      { name: "Notebooks" },
      { name: "Mini PC" },
      { name: "Diskless PC" },
      { name: "Software" },
    ],
  },
  {
    name: "COMPONENTS",
    image: COMPONENTS,
    subCategory: [
      { name: "Processor" },
      { name: "Motherboard" },
      { name: "Graphics Card" },
      { name: "Memory" },
      { name: "Power Supply" },
      { name: "Hard Drive" },
      { name: "Computer Case" },
      { name: "Sound Card" },
      { name: "Lan Card" },
      { name: "Optical Drive" },
    ],
  },
  {
    name: "PERIPERALS",
    image: PERIPERALS,
    subCategory: [
      { name: "Displays" },
      { name: "Audio" },
      { name: "Keyboard/Mouse" },
      { name: "Office Furniture" },
      { name: "Printer/Scaner/Inks" },
      { name: "Surveillance/CCTV" },
      { name: "UPS/AVR" },
      { name: "Webcam" },
    ],
  },
  {
    name: "NET DEVICES",
    image: NETDEVICES,
    subCategory: [
      { name: "Access Point/Range Extender" },
      { name: "Adaptor" },
      { name: "Router" },
      { name: "Switch" },
      { name: "UTP Cable" },
      { name: "Network Attached Storage" },
    ],
  },
  {
    name: "ACCESSORIES",
    image: ACCESSORIES,
    subCategory: [
      { name: "Batteries and Chargers" },
      { name: "Cables" },
      { name: "Cooling Solutions" },
      { name: "Cleaning Solutions" },
      { name: "HDD Dock/Enclosure/Caddy" },
      { name: "Lightings" },
      { name: "Memory Devices" },
      { name: "Sleeves/Bags" },
      { name: "USD Hub/Card Reader" },
    ],
  },
  {
    name: "GADGETS",
    image: GADGETS,
    subCategory: [
      { name: "Digital Camera" },
      { name: "Media Player" },
      { name: "Mobile" },
      { name: "Mobile Accessories" },
      { name: "Mining" },
      { name: "Wellness" },
    ],
  },
];

function Header() {
  const router = useRouter();

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="img-logo" onClick={() => router.push("/")}>
          <Image src="/assets/images/logo.png" alt="PC Link Logo" width={152} height={45} />
        </div>
        <div className="icons flex">
          <div className="pr-10">
            <FaHeart size={22} />
          </div>
          <div>
            <FaShoppingCart size={22} />
          </div>
        </div>
      </div>
      <div className="bg-vivid-orange">
        <div className="w-10/12 mx-auto">
          <ul className="flex relative select-none">
            {categories.map((category, i) => {
              return (
                <li
                  key={i}
                  className="product-category py-3.5 pr-3.5 pl-4 font-medium flex items-center hover:bg-black group cursor-pointer "
                >
                  <span className="pr-2.5 group-hover:text-vivid-orange">{category.name}</span>
                  <MdKeyboardArrowDown
                    size={22}
                    className="arrow-down-icon block group-hover:hidden"
                  />
                  <BiMinus
                    size={22}
                    className="minus-icon hidden group-hover:block group-hover:text-vivid-orange"
                  />
                  <div className="absolute w-[85%] top-12 left-0 bg-white z-10 hidden group-hover:block">
                    <div className="h-[100px] relative">
                      <Image
                        priority
                        src={category.image}
                        alt="Menu Banner"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <ul className="grid grid-cols-4 gap-2">
                        {category.subCategory.map((sub, i) => {
                          return (
                            <li
                              key={i}
                              className="p-3 text-lg font-bold flex items-center justify-center primary-text-shadow cursor-pointer"
                            >
                              <MdKeyboardArrowRight size={24} className="text-vivid-orange" />
                              <span className="">{sub.name}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
