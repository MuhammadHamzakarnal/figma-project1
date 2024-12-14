import React from "react";
import RecentPostCard from "./RecentPostCard";
import Link from "next/link";
import { Heebo } from "next/font/google";
const heebo = Heebo({ subsets: ["latin"] });
const RecentPost = () => {
  return (
    <div className="bg-recentBackround my-[66px] md:h-[502px] flex flex-col justify-evenly  ">
      <div className="w-[92%] md:w-[1030px] p-6 mx-auto  justify-between flex flex-col">
       <div className="justify-between flex flex-row"> <h2 className={`${heebo.className} text-[22px] font-medium`}>
          Recent Post
        </h2>
        <Link
          href={" "}
          className={`${heebo.className} text-[22px] text-myPink font-medium`}
        >
          {" "}
          View all
        </Link>
        </div>
        <div className="justify-between flex  space-y-3 md:space-y-0 flex-col md:flex-row mt-[16]" >
            
            <RecentPostCard></RecentPostCard>
            <RecentPostCard></RecentPostCard>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
