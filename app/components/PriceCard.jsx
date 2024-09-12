import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const PriceCard = () => {
  function truncateText(text, limit) {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    } else {
      return text;
    }
  }
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4 p-5  dark:bg-black">
      <h1 className="text-base md:text-4xl font-bold text-center text-[#03989e] dark:text-[#00c2cb] ">
        We Offer Following Stock Trading Courses
      </h1>
      <p className="text-xl md:text-3xl font-semibold text-gray-500 dark:text-gray-300 text-center uppercase">
        OFFLINE COURSES
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {Card?.map((item) => (
          <Link
            href={item?.link}
            key={item?.id}
            className="md:max-w-96 border-2 dark:border shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-black flex flex-col items-start gap-3 justify-start "
          >
            <Image
              width={800}
              height={500}
              src={item?.image}
              alt="Equity Tank Courses"
            />
            <h2>
              <span className="text-base md:text-lg px-3 font-bold text-gray-900 dark:text-gray-200 text-center uppercase">
                {item?.title}
              </span>
            </h2>
            <p className="text-xs md:text-sm font-[500] text-gray-500 dark:text-gray-400 text-start px-3">
              {truncateText(item?.text, 20)}
            </p>
            <span className="flex items-center justify-between  px-3 w-full">
              <div className="flex items-center justify-center space-x-1 text-yellow-500 dark:text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-bold">
                {item?.rating} Ratings
              </span>
            </span>
            <div className="flex w-full items-center  justify-between p-3">
              <span className="text-xl flex-col flex md:text-2xl font-semibold text-black  dark:text-white text-start">
                <span className="flex items-center justify-center">
                  {"₹"}
                  {item?.price} <p className="text-xs">/-{item?.paymentType}</p>
                </span>
                <span className="line-through text-sm text-gray-500 dark:text-gray-400">
                  ₹ {item?.discount}
                </span>
              </span>

              <span className="inline-block bg-red-500 text-white text-sm px-3 py-2 rounded-full uppercase font-semibold tracking-wider">
                {item.percentage}% Off
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;

export const Card = [
  {
    id: 1,
    title: "Stock Foundation Programme ",
    image: "/3.png",
    text: "This Course is specially designed for beginners who want to learn from the scratch & to build a strong Fundamental & core knowledge of Technical Analysis. This course will make your foundation strong about stock market. At the end of course, you will be able to pick a fundamentally strong share for invest and you will also start trading in stocks.",
    price: 2499,
    discount: 4165,
    paymentType: "monthly",
    link: "/foundation",
    rating: 93,
    percentage: 50,
  },
  {
    id: 2,
    title: "Smart Trader Course – Advance ",
    image: "/4.png",
    text: "This Course is specially designed to Learn Institutional Based Trading and Real Price Action Data Analysis. You’ll Learn to Trade on Smart Money Concept. This course will make your psychology strong and make you more accurate in your trading. At the end of your course, you’ll start doing trade like banks & Institutions.",
    price: 3999,
    discount: 6665,
    paymentType: "monthly",
    link: "/smart-traders",
    rating: 305,
    percentage: 60,
  },
  {
    id: 3,
    title: "ET – Futures & Options",
    image: "/5.png",
    text: "This Course is designed for Traders who want to learn about Futures & Options in depth and also want to trade in specially options. This course is designed for those who want to trade options professionally, in this course you will get to know how options premium calculated with the help of Greeks. Whether the options premium is cheap or expensive, when to be an option buyer and when to be a seller.",
    price: 5999,
    discount: 9999,
    paymentType: "monthly",
    link: "/futures-options",
    rating: 113,
    percentage: 60,
  },
];
