import React from 'react';
import twitterImg from "../../assets/twitter.svg";
import discordImg from "../../assets/discord.svg";
import linkedinImg from "../../assets/linkedin.svg";
import emailImg from "../../assets/mail.svg";
import sabziMandi from "../../assets/sabzimandi.png";

export default function Footer() {
    return (
        <div className="bg-slate-100 pt-9 pb-20 lg:px-4 md:px-8 px-9 w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Branding Column */}
                <div className="text-center md:text-left  flex flex-col items-center justify-center md:col-start-3 md:row-span-2 order-first md:order-none">
                    <img src={sabziMandi} alt="Sabzi Mandi" className="h-20 mx-auto md:mx-0 mb-2" />
                    <h3 className="font-bold text-3xl lg:text-4xl">Sabzi Mandi</h3>
                    <p className="font-bold text-lg">by Shivnandan</p>
                </div>

                {/* Company Column */}
                <div className=' md:col-span-2 lg:col-span-1'>
                    <h3 className="font-bold text-lg mb-2">Company</h3>
                    <p className="font-medium text-base">Sabzi Mandi Private Limited</p>
                    <div className="text-slate-500 text-sm font-medium leading-relaxed">
                        <p>Ground Floor, 12A,</p>
                        <p>94 Meghdoot, Greater Kailash,</p>
                        <p>Dhalli - 184144</p>
                        <p className="mt-2 flex items-center">
                            <span role="img" aria-label="Phone" className="text-red-500">📞</span>
                            <span className="ml-2 text-black">9149916061</span>
                        </p>
                        <p className="mt-2 flex items-center text-black">
                            <span role="img" aria-label="Email" className="text-red-500">✉️</span>
                            <span className="ml-2">help@sabzimandi.com</span>
                        </p>
                    </div>
                </div>

                {/* Follow Us Column */}
                <div className=' md:col-span-2 lg:col-span-1'>
                    <h3 className="font-bold text-lg mb-2">Connect with me on</h3>
                    <div onClick={() => { window.open('https://x.com/Shivnandan_Ba?t=qBUEMBrbDhzf8bjc0cUtWw&s=33', '_blank') }} className="cursor-pointer flex items-center mb-2 font-medium">
                        <img src={twitterImg} alt="Twitter" className="h-5 mr-2" />
                        <span>Twitter</span>
                    </div>
                    <div onClick={() => { window.open('https://discordapp.com/users/1132161271517696050', '_blank') }} className="cursor-pointer flex items-center mb-2 font-medium">
                        <img src={discordImg} alt="Discord" className="h-5 mr-2" />
                        <span>Discord</span>
                    </div>
                    <div onClick={() => { window.open('https://www.linkedin.com/in/shivnandan-basotra-2ab6672a2', '_blank') }} className="cursor-pointer flex items-center mb-2 font-medium">
                        <img src={linkedinImg} alt="LinkedIn" className="h-5 mr-2" />
                        <span>LinkedIn</span>
                    </div>
                    <div onClick={() => { window.open('mailto:flahsbacksnaps12@gmail.com', '_blank') }} className="cursor-pointer flex items-center mb-2 font-medium">
                        <img src={emailImg} alt="Mail" className="h-5 mr-2" />
                        <span>flashbacksnaps9@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}