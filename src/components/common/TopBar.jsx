import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { MdBrightness6 } from "react-icons/md";
import { PiLineVerticalBold } from "react-icons/pi";


const TopBar = () => {
    return (
        <div className="flex w-11/12 mx-auto pt-4 pb-4 justify-between">
            <div className="flex items-center gap-2">
                <IoCallSharp /> Our Toll Free number : 1234-12-1234/4567
            </div>
            <div className="flex items-center gap-2">
                <span className="pl-1 pr-1 text-lg">A+</span> <PiLineVerticalBold />
                <span className="pl-1 pr-1 text-base">A</span> <PiLineVerticalBold />
                <span className="pl-1 pr-1 text-sm">A-</span> <PiLineVerticalBold />

                <button>
                    <MdBrightness6 />
                </button>
                <PiLineVerticalBold />
                English
                <button>
                    <FaChevronDown />
                </button>
            </div>
        </div>
    );
};

export default TopBar;
