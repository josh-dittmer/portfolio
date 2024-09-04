import Link from 'next/link';
import Image from 'next/image';

export default function TitleSection({ name, description, techUsed, demoSrc, githubSrc, thumbnailSrc }: { name: string, description: string, techUsed: Array<string>, demoSrc: string, githubSrc: string, thumbnailSrc: string }) {
    return (
        <div className="">
            <div className="flex items-center justify-center justify-center p-10">
                <Link href="/#projects">
                    <Image src="/img/back_arrow.svg" width={50} height={50} alt="Back" />
                </Link>
                <h1 className="text-4xl text-white">{name}</h1>
            </div>
            <div className="flex justify-center">
                <Image className="border-[10px] border-blue-400 rounded" src={thumbnailSrc} width={500} height={500} alt="" />
            </div>
            <div className="flex justify-center text-center p-10">
                <p className="max-w-md text-lg text-white">{description}</p>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-2">
                    <Link href={demoSrc}>
                        <div className={'flex justify-center items-center p-2 rounded text-center ' + (demoSrc === '' ? 'bg-blue-400' : 'bg-blue-400 hover:bg-blue-500')}>
                            <Image src="/img/live.svg" width={25} height={25} alt="Live demo"></Image>
                            <p className={'ml-1 font-bold ' + (demoSrc === '' ? 'text-blue-200' : 'text-white')}>{demoSrc === '' ? 'Demo coming soon!' : 'Live Demo'}</p>
                        </div>
                    </Link>
                    <Link href={githubSrc}>
                        <div className="flex justify-center items-center bg-blue-400 hover:bg-blue-500 p-2 rounded text-center">
                            <Image src="/img/github.svg" width={25} height={25} alt="Live demo"></Image>
                            <p className="ml-1 font-bold text-white">GitHub</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center pt-10">
                <p className="text-white text-md">Built with:</p>
            </div>
            <div className="flex flex-wrap justify-center pt-2">
                {techUsed.map((name) => {
                    return <p className="text-white bg-blue-500 p-2 rounded mr-1 mt-1">{name}</p>
                })}
            </div>
        </div>
    )
}