const CallButton = () => {
    return (
        <div className="fixed bottom-4 left-4 z-[9999]">
            <div className="relative w-[70px] h-[70px]">
                <a
                    href="tel:+918046844684"
                    title="Call : 08046844684"
                    className="relative block w-full h-full"
                >
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-green-600 opacity-60 animate-ping"></div>

                    {/* Green circle */}
                    <div className="absolute top-2 left-2 w-[52px] h-[52px] rounded-full bg-green-600"></div>

                    {/* Phone icon (smooth sway) */}
                    <div className="absolute top-[18px] left-[18px] w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center shadow ring-sway">
                        📞
                    </div>
                </a>
            </div>
        </div>
    );
};

export default CallButton;
