import Link from 'next/link';
import Image from 'next/image';

export default function ContactSection() {
    return (
        <div className="flex flex-col pt-14 bg-white h-screen lg:h-auto">
            <div className="flex justify-center items-center">
                <div className="p-10">
                    <h1 className="text-3xl text-gray-900">Contact</h1>
                </div>
            </div>
            <div className="lg:pb-32">
            <div className="lg:grid grid-cols-2 text-gray-500">
                <div className="flex justify-center p-3">
                    <a className="flex items-center" href="mailto:josh.dittmer203@gmail.com">
                        <Image src="/img/email.png" width={25} height={25} alt="Email" />
                        <h2 className="text-2xl pl-2 pr-4">Email</h2>
                        <p>josh.dittmer203@gmail.com</p>
                    </a>
                </div>
                <div className="flex justify-center p-3">
                    <a target="_blank" className="flex items-center" href="https://www.linkedin.com/in/josh-dittmer-aa6849253">
                        <Image src="/img/linkedin.png" width={25} height={25} alt="LinkedIn" />
                        <h2 className="text-2xl pl-2 pr-4">LinkedIn</h2>
                        <p>josh-dittmer</p>
                    </a>
                </div>
                <div className="flex justify-center p-3">
                    <a className="flex items-center" href="tel:4089661248">
                        <Image src="/img/phone.png" width={25} height={25} alt="Phone number" />
                        <h2 className="text-2xl pl-2 pr-4">Phone</h2>
                        <p>+1 (408) 966-1248</p>
                    </a>
                </div>
                <div className="flex justify-center p-3">
                    <a target="_blank" className="flex items-center" href="https://github.com/josh-dittmer">
                        <Image src="/img/github-mark.png" width={25} height={25} alt="GitHub" />
                        <h2 className="text-2xl pl-2 pr-4">GitHub</h2>
                        <p>josh-dittmer</p>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}