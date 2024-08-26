import twitterImg from "../assets/twitter.svg"
import discordImg from "../assets/discord.svg"
import linkedinImg from "../assets/linkedin.svg"
import emailImg from "../assets/mail.svg"
import sabziMandi from "../assets/sabzimandi.png"

export default function Footer() {
    return (
        <div className="bg-gray-100 py-8 px-4 h-80 w-3/4 mx-auto">
            <div className="w-full mx-auto grid grid-cols-3 gap-4">
                {/* Company Column */}
                <div>
                    <h3 className="font-bold mb-2">Company</h3>
                    <p className="font-medium">Sabzi Mandi Private Limited</p>
                    <div className="text-slate-500 text-sm font-medium">
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
                <div>
                    <h3 className="font-bold mb-2">Connect with me on</h3>
                    <div className="cursor-pointer flex items-center mb-2 font-medium">
                        <img src={twitterImg} alt="Twitter" className="h-5 mr-2" />
                        <span>Twitter</span>
                    </div>
                    <div className="cursor-pointer flex items-center mb-2 font-medium">
                        <img src={discordImg} alt="Discord" className="h-5 mr-2" />
                        <span>Discord</span>
                    </div>
                    <div className="cursor-pointer flex items-center mb-2 font-medium">
                        <img src={linkedinImg} alt="LinkedIn" className="h-5 mr-2" />
                        <span>LinkedIn</span>
                    </div>
                    <div className="cursor-pointer flex items-center mb-2 font-medium">
                        <img src={emailImg} alt="Mail" className="h-5 mr-2" />
                        <span>flashbacksnaps9@gmail.com</span>
                    </div>
                </div>

                {/* Branding Column */}
                <div className="text-center">
                    <img src={sabziMandi} alt="Sabzi Mandi" className="h-20 mx-auto mb-2" />
                    <h3 className="font-bold text-3xl">Sabzi Mandi</h3>
                    <p className="font-bold">by Shivnandan</p>
                </div>
            </div>
        </div>
    )
}