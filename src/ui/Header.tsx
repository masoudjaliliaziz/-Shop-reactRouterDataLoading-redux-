import { BellRing, Heart, UsersRound } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className=" w-full h-[6%] flex justify-between items-center">
      <div className=" w-1/6 h-full flex justify-start gap-3 items-center">
        <Link to={"/"}>
          <div className="w-[40px] bg-slate-950 h-[40px] overflow-hidden rounded-full flex justify-center items-center">
            {/* <img src="" alt="" /> */}
            <img
              className="w-[30px] h-[30px]
          "
              src="./src/ui/logo/image.png"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-center items-center">
          <h1 className="uppercase italic font-bold ">lourny</h1>
        </div>
      </div>
      <div className=" w-1/6 h-full flex justify-end gap-3">
        <Link
          to={"/whishlist"}
          className="w-[40px] bg-slate-200 h-[40px] overflow-hidden rounded-full flex justify-center items-center"
        >
          <BellRing />
        </Link>
        <div className="w-[40px] bg-slate-200 h-[40px] overflow-hidden rounded-full flex justify-center items-center">
          <Heart />
        </div>
      </div>
    </header>
  );
}
