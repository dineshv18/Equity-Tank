import Certificate from "@/app/components/Certificate";
import CourseCurriculum from "@/app/components/CourseCurriculum";
import FaqQuesAns from "@/app/components/FaqQues";
import Pagination from "@/app/components/Pagination";
import Providing from "@/app/components/Providing";
import Course from "@/app/components/course/Course";
import Image from "next/image";

export const metadata = {
  title: "Equity Tank - Stock Foundation Programme",
  description:
    "Stock Foundation Programme  is specially designed for beginners who want to learn from the scratch & to build a strong Fundamental & core knowledge of Technical Analysis. This course will make your foundation strong about stock market. At the end of course, you will be able to pick a fundamentally strong share for invest and you will also start trading in stocks.",
};
const Foundation = () => {
  return (
    <div className="flex flex-col w-full">
      <Image
        src="/banner/4.png"
        width={1920}
        height={1080}
        alt="smart-trades"
      />
      <Pagination
        num={1}
        rightLink={"/smart-traders"}
        leftLink={"/futures-options"}
      />
      <div className="flex items-center justify-center w-full my-5">
        <span className="text-3xl md:text-5xl lg:text-6xl text-center font-bold text-[#03989e] dark:text-[#00c2cb]">
          Stock Foundation Programme
        </span>
      </div>
      <Course
        img={"/3.png"}
        description1={
          "This Course is specially designed for beginners who want to learn from the scratch & to build a strong Fundamental & core knowledge of Technical Analysis. "
        }
        description2={
          "This course will make your foundation strong about stock market. At the end of course, you will be able to pick a fundamentally strong share for invest and you will also start trading in stocks. "
        }
        price={"1999"}
        discount={"3999"}
        message={"I am Interested in Stock Foundation Programme"}
      />
      <CourseCurriculum list={list} />
      <Providing />
      <Certificate img={"/certificate/foundation.png"} />
      <FaqQuesAns />
    </div>
  );
};

export default Foundation;

const list = [
  {
    title: "Level 1",
    description: [
      "Introduction to Stock Market",
      "Market Participants",
      "Types of Market",
      "Introduction to Technical Analysis",
      "Candlestick Patterns",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white rounded-lg shadow-lg">
        <Image
          src="/chart/1.jpeg"
          width={800}
          height={500}
          className="h-full w-full object-cover border-[#00c2cb] border-2 rounded-lg shadow-lg"
          alt="chart"
        />
      </div>
    ),
  },
  {
    title: "Level 2",
    description: [
      "Wick Vs Body ",
      "Types of Traders & Trading styles",
      "Importance of Candle Closing ",
      "Time Frame Study",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/chart/2.jpeg"
          width={800}
          height={500}
          className="h-full w-full object-cover border-[#00c2cb] border-2 rounded-lg shadow-lg"
          alt="chart"
        />
      </div>
    ),
  },
  {
    title: "Level 3",
    description: [
      "Chart Patterns",
      "Identifying Trends",
      "Support & Resistance",
      "Breakouts | Reversal | Retests ",
      "Multiple Websites Learning ",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/chart/3.jpeg"
          width={800}
          height={500}
          className="h-full w-full object-cover border-[#00c2cb] border-2 rounded-lg shadow-lg"
          alt="chart"
        />
      </div>
    ),
  },
  {
    title: "Level 4",
    description: [
      "Gap Theory   ",
      "Indicators & Oscillators",
      "Stock Selection Process   ",
      "Risk Management",
      "Trading System",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/chart/4.jpeg"
          width={800}
          height={500}
          className="h-full w-full object-cover border-[#00c2cb] border-2 rounded-lg shadow-lg"
          alt="chart"
        />
      </div>
    ),
  },
];
