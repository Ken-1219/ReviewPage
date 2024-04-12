"use client"

import Rating from "@/app/components/Rating/Rating";
import Thumbs from "@/app/components/Thumbs/Thumbs";
import TraitsSelection from "@/app/components/TraitSelect/TraitSelect";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const [safetyValue, setSafetyValue] = useState(0);
  const [communicationValue, setCommunicationValue] = useState(0);
  const [thumbsSelection, setThumbsSelection] = useState(null);
  const [selectedTraits, setSelectedTraits] = useState([]);
  const [feedback, setFeedback] = useState("");


  const handleSafetyClick = (value) => {
+    setSafetyValue(value);
  };


  const handleCommunicationClick = (value) => {
    setCommunicationValue(value);
  };



  const handleThumbsSelectionChange = (selectedIcon) => {
    setThumbsSelection(selectedIcon);
  };

  const updateSelectedTraits = (traits) => {
    setSelectedTraits(traits);
  };


  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!safetyValue || !communicationValue || !thumbsSelection || !selectedTraits) {
      return;
    }
    router.push("/thank-you", { state: { safetyValue, communicationValue, thumbsSelection, selectedTraits } });
  }

  return (
    <main className="flex min-h-screen  sm:items-center flex-col  justify-start p-5 bg-white sm:bg-green-50 md:px-56">
      <div className="flex flex-col sm:items-center sm:justify-center flex-1 text-center">

        <div className="mb-9">
          <h1 className="text-3xl font-bold text-black">Leave a review</h1>
        </div>

        <div className="md:flex md:flex-col">
          <div className="w-full">
            <div className="mb-12">

              <h3 className="text-xl font-semibold text-black my-2">Safety</h3>
              <p className="text-xs text-slate-400">How safe did you feel with Ayurveda?</p>
              <div className="flex flex-col flex-wrap items-center justify-center">
                <Rating
                  ratingInPercent={100}
                  onClick={handleSafetyClick}
                />
              </div>

            </div>


            <div>
              <div className="mb-12">

                <h3 className="text-xl font-semibold text-black my-2">Communication</h3>
                <p className="text-xs text-slate-400">How easy was to communicate with Ayurveda?</p>
                <div className="flex flex-col flex-wrap items-center justify-center">
                  <Rating
                    ratingInPercent={100}
                    onClick={handleCommunicationClick}
                  />
                </div>

              </div>
            </div>
          </div>

          <div className="flex justify-start flex-col">
            <div className="flex items-center justify-center">
              <Thumbs
                onSelectionChange={handleThumbsSelectionChange}
              />
            </div>
          </div>




          <div className="w-full mt-6">

            <div className="flex items-center justify-center">
              <TraitsSelection
                updateSelectedTraits={updateSelectedTraits}
              />
            </div>
          </div>



          <div className="w-full">
            <h3
              className="text-xl font-semibold text-black my-2">
              Care to share more?
            </h3>
            <p
              className="text-xs text-slate-400 mb-6">
              How was your experience? What&apos;s the one thing you wouldn&apos;t forget about Ayurveda?
            </p>
            <div className="flex items-center">
              <textarea
                className="w-full h-48 p-4 border border-green-300 text-green-600 bg-green-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-10 placeholder-green-500"
                placeholder="Enter your feedback here..."
                value={feedback}
                onChange={handleFeedbackChange}
              />
            </div>
          </div>



          <button
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
            onClick={handleClick}>
            Submit Review
          </button>
        </div>

      </div>
    </main>
  );
}