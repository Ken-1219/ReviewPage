"use client"

import React, { useEffect, useState } from 'react';

const TraitsSelection = ({ updateSelectedTraits }) => {
    const traitsList = [
        { id: 1, name: 'Adventurous' },
        { id: 2, name: 'Non-judgemental' },
        { id: 3, name: 'Honest' },
        { id: 4, name: 'Knowledgeable' },
        { id: 5, name: 'Thoughtful' },
        { id: 6, name: 'Humorous' },
        { id: 7, name: 'Clean' },
        { id: 8, name: 'Good Listener' },
        { id: 9, name: 'Kind' },
        { id: 10, name: 'Inspiring' },
        { id: 11, name: 'Talkative' },
        { id: 12, name: 'Trustworthy' },
        { id: 13, name: 'Dedicated' }
    ];

    const [selectedTraits, setSelectedTraits] = useState([]);

    useEffect(() => {
        updateSelectedTraits(selectedTraits);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTraits]);

    const handleTraitSelection = (trait) => {
        if (selectedTraits.includes(trait)) {
            setSelectedTraits(selectedTraits.filter(item => item !== trait));
        } else {
            setSelectedTraits([...selectedTraits, trait]);
        }
        // updateSelectedTraits([...new Set(selectedTraits)]);
    };

    return (
        <div className="w-full my-6 ">
            <h3 className="text-xl font-semibold text-black my-2">Praise</h3>
            <p className="text-xs text-slate-400 mb-4">What traits best describe Ayurveda?</p>
            <div className="flex items-center flex-wrap">
                {traitsList.map(trait => (
                    <span
                        key={trait.id}
                        className={`cursor-pointer mx-2 my-2 text-black  py-1 px-2 rounded-full ${selectedTraits.includes(trait.name) ? 'bg-green-500 text-green-100' : 'bg-green-100 text-green-500'}`}
                        onClick={() => handleTraitSelection(trait.name)}
                    >
                        {trait.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TraitsSelection;
