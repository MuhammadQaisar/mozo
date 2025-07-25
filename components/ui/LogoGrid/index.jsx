import Image from 'next/image'
import oms from '../../../public/logos/oms.svg'
import brilly from '../../../public/logos/brilly.svg'
import du from '../../../public/logos/du.svg'
import artnester from '../../../public/logos/artnester.svg'

const logos = [
    { src: oms, alt: "freshbooks" },
    { src: brilly, alt: "sendgrid" },
    { src: du, alt: "layers" },
    { src: artnester, alt: "adobe" },
]

const LogoGrid = () => {
    return (
        <div>
            <div className="custom-screen">
                           <h2 className="text-2xl font-bold py-12 text-gray-800 mb-4 px-4 sm:px-6 lg:px-8 tracking-wide font-[Montserrat]">
                        Our Clients
                    </h2>
                <ul className="flex gap-x-6 gap-y-4 flex-wrap items-center justify-center md:gap-x-10 lg:gap-x-16 mt-6">
                    {logos.map((item, idx) => (
                        <li key={idx}>
                            <div className="flex items-center justify-center w-28 h-12">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    className={`object-contain w-full h-full
                                        ${item.alt === "sendgrid" ? "scale-90" : ""}
                                    `}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default LogoGrid