import { Heading, Text } from "../global";
import { MdNavigation, MdLocalPhone, MdOutlinePhoneAndroid } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-dark-blue">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Heading className="text-vivid-orange text-3xl font-bold mb-2">
              Sign up for newsletter
            </Heading>
            <Text className="text-white text-sm">
              Get news about latest tech out in market and more just to be updated in tech world!
            </Text>
          </div>
          <div>
            <div className="relative">
              <input
                type="text"
                className="h-12 w-96 pl-5 pr-20 rounded-full z-0 focus:shadow focus:outline-none"
                placeholder="Enter your email address here"
              />
              <div className="absolute top-1 right-2">
                <button className="h-10 w-20 text-black font-bold text-sm rounded-full bg-vivid-orange hover:bg-vivid-orange">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 text-white">
          <div className="col-span-2">
            <Text className="font-bold mb-4">Store Information</Text>
            <Text className="text-sm flex items-center mb-4">
              <MdNavigation size={30} className="text-vivid-orange mr-2" />
              Balibago Angeles City, Pampanga Philippines
            </Text>
            <Text className="text-sm flex items-center mb-4">
              <MdLocalPhone size={25} className="text-vivid-orange mr-2" />
              331-1754
            </Text>
            <Text className="text-sm flex items-center mb-4">
              <MdOutlinePhoneAndroid size={20} className="text-vivid-orange mr-2" />
              09993884869
            </Text>
            <Text className="text-sm flex items-center mb-4">
              <AiOutlineClockCircle size={25} className="text-vivid-orange mr-2" />
              <div>
                <span>Mon - Sat: 9AM to 7PM</span>
                <br />
                <span>Sun: 9AM to 5PM</span>
              </div>
            </Text>
          </div>
          <div>
            <Text className="font-bold mb-3">Navigation</Text>
            <Text className="text-sm flex items-center mb-4">Computers</Text>
            <Text className="text-sm flex items-center mb-4">Component</Text>
            <Text className="text-sm flex items-center mb-4">Peripherals</Text>
            <Text className="text-sm flex items-center mb-4">Net Devices</Text>
            <Text className="text-sm flex items-center mb-4">Accessories</Text>
            <Text className="text-sm flex items-center mb-4">Gadgets</Text>
          </div>
          <div>
            <Text className="font-bold mb-3">Customers</Text>
            <Text className="text-sm flex items-center mb-4">Buyer</Text>
            <Text className="text-sm flex items-center mb-4">Supplier</Text>
          </div>
          <div>
            <Text className="font-bold mb-3">Company</Text>
            <Text className="text-sm flex items-center mb-4">About Us</Text>
            <Text className="text-sm flex items-center mb-4">Contact Us</Text>
          </div>
          <div>
            <Text className="font-bold mb-3">Further Information</Text>
            <Text className="text-sm flex items-center mb-4">Terms and Condition</Text>
            <Text className="text-sm flex items-center mb-4">Privacy Policy</Text>
            <Text className="text-sm flex items-center mb-4">Laws</Text>
          </div>
        </div>
        <div className="text-white border-t-[1px] border-gray-700 pt-5">
          <Text className="text-sm">
            Copyright &copy; <span className="font-bold text-vivid-orange">PCLINK</span> all right
            reserved 2022
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
