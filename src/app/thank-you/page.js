const Page = () => {
    
    const tick = (
        <svg viewBox="-4.73 0 72.44 72.44" xmlns="http://www.w3.org/2000/svg" fill="#000000" height={"120px"} width={"120px"}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"> </g>
            <g id="SVGRepo_iconCarrier">
                <g id="Group_11" data-name="Group 11" transform="translate(-482.502 -412.731)">
                    <path id="Path_25" data-name="Path 25" d="M533.566,429.163l-25.9,25.9-8.182-8.182" fill="none" stroke="#29ff90" strokeMiterlimit="10" strokeWidth="3">
                    </path>
                    <g id="Group_9" data-name="Group 9" opacity="0.15">
                        <circle id="Ellipse_17" data-name="Ellipse 17" cx="29.992" cy="29.992" r="29.992" transform="translate(484.002 423.686)" fill="none" stroke="#0b7c09" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3">
                        </circle>
                    </g>
                    <g id="Group_10" data-name="Group 10">
                        <circle id="Ellipse_18" data-name="Ellipse 18" cx="29.992" cy="29.992" r="29.992" transform="translate(484.002 414.231)" fill="none" stroke="#0b7c09" strokeMiterlimit="10" strokeWidth="3"></circle>
                    </g>
                </g>
            </g>
        </svg>
    )

    return (
        <div className="flex items-center justify-center bg-green-50 min-h-screen">
            <div className="text-center flex-col flex items-center justify-center p-5">
                <div className="mb-4">{tick}</div>
                <p className="text-xl flex flex-wrap font-semibold">Thank you for your valuable review.</p>
            </div>
        </div>
    )
}

export default Page;