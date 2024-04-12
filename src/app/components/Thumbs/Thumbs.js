"use client"

import ThumbsIcon from "@/app/components/Icon/ThumbsIcon";
import { useEffect, useState } from "react";

const Thumbs = ({ onSelectionChange }) => {
    const size = "50"

    const [selectedIcon, setSelectedIcon] = useState(null);


    useEffect(() => {
        onSelectionChange(selectedIcon)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedIcon]);

    const thumbsUp = (
        <ThumbsIcon type={"thumbsUp"} width={size} height={size} />
    )

    const thumbsUpHighlighted = (
        <ThumbsIcon type={"thumbsUpHighlighted"} width={size} height={size} />
    )

    const thumbsDown = (
        <ThumbsIcon type={"thumbsDown"} width={size} height={size} />
    )


    const thumbsDownHighlighted = (
        <ThumbsIcon type={"thumbsDownHighlighted"} width={size} height={size} />
    )



    const handleIconClick = (type) => {
        setSelectedIcon(type === selectedIcon ? type : null);
    };


    const handleThumbsUpClick = () => {
        setSelectedIcon("thumbsUp");
    };

    const handleThumbsDownClick = () => {
        setSelectedIcon("thumbsDown");
    };

    return (
        <div className="flex w-full flex-col justify-start sm:justify-center sm:items-center p-4 flex-wrap">

            <h3 className="text-xl font-semibold text-black my-2">Would you reccomend Ayurveda?</h3>
            <p className="text-xs text-slate-400">Your opinion wouldn&apos;t be posted publicly</p>

            <div className="flex items-center justify-center p-4">

                <div
                    className="flex items-end font-semibold text-md mx-2 sm:mx-1 cursor-pointer"
                    onClick={handleThumbsDownClick}
                >
                    {selectedIcon === "thumbsDown" ? thumbsDownHighlighted : thumbsDown}
                    <h1 className={`mx-2  ${selectedIcon === "thumbsDown" ? "text-red-500" : ""} `}>No</h1>
                </div>
                <div
                    className="flex items-end font-semibold text-md mx-4 sm:mx-10 cursor-pointer"
                    onClick={handleThumbsUpClick}
                >
                    {selectedIcon === "thumbsUp" ? thumbsUpHighlighted : thumbsUp}
                    <h2 className={`mx-2 ${selectedIcon === "thumbsUp" ? "text-green-500" : ""}`}>Yes</h2>

                </div>
            </div>
        </div>
    )

}

export default Thumbs;