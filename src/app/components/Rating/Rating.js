"use client"
import { useState } from "react";
import Icon from "@/app/components/Icon/Icon";

const OUT_OF_VALUE = 5;

const Rating = (props) => {

    // destructuring values from props
    const { ratingInPercent, onClick } = props;
    const [activeStar, setActiveStar] = useState(-1);


    
    const size = "50";
    const numberOfStars = OUT_OF_VALUE;
    //creating default empty star and filled star
    const RatingHighlighted = (
        <Icon type={"ratingHighlighted"} width={size} height={size} />
    );
    const RatingDefault = (
        <Icon type={"ratingDefault"} width={size} height={size} />
    );


    const handleClick = (index) => {
        onClick(index + 1);
        setActiveStar(index);
    };


    //function to show default star
    const showDefaultStar = (index) => {
        return RatingDefault;
    };



    //function to show stars
    const displayStars = (index) => {
        return (
            <div
                className="relative"
                onClick={() => handleClick(index)}
                key={index}
            >
                <div
                    className={`${activeStar >= index ? "opacity-100 absolute" : "opacity-0 absolute"}  cursor-pointer`}
                >
                    {RatingHighlighted}
                </div>
                {showDefaultStar()}
            </div>
        );
    };




    return (
        <div className="flex" >
            {[...new Array(numberOfStars)].map((arr, index) =>
                displayStars(index)
            )}
        </div>
    )


}


export default Rating;