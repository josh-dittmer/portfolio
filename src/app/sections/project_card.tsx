import Image from 'next/image'
import Link from 'next/link'

export enum Orientation {
    Left,
    Right
};

export enum Type {
    Image,
    Movie
}

function ContentContainer({ src, type, orientation, infoSrc } : { src: string, type: Type, orientation: Orientation, infoSrc: string }) {
    return (
        <div className={'border-blue-400 border-t-[50px] border-b-[50px] ' + (orientation === Orientation.Left ? ("border-r-[50px]") : ("border-l-[50px]"))}>
            <Link href={infoSrc}>
                {type === Type.Image ? (
                    <Image src={src} width={720} height={680} alt="Test" />
                ) : (
                    <video width="720" height="680" autoPlay muted loop>
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </Link>
        </div>
    )
}

function InfoContainer({ name, description, techUsed, infoSrc, githubSrc, orientation } : { name: string, description: string, techUsed: Array<string>, infoSrc: string, githubSrc: string, orientation: Orientation }) {
    return (
        <div className={orientation === Orientation.Left ? ("ml-[-30px] text-left") : ("mr-[-30px] text-start z-30")}>
            <h1 className="text-2xl text-white pb-1">{name}</h1>
            <p className="text-xs text-white max-w-sm pb-1">{description}</p>
            <div className="flex">
                <Link className="mr-3" href={infoSrc}>
                    <p className="text-sm text-white font-bold border-b-2 border-white">Learn More</p>
                </Link>
                <Link href={githubSrc}>
                    <p className="text-sm text-white font-bold border-b-2 border-white">GitHub</p>
                </Link>
            </div>
            <div className="flex-wrap max-w-sm pt-3 z-0 hidden lg:flex">
                {techUsed.map((name) => {
                    return <span className="text-white text-sm bg-blue-500 p-2 rounded mt-1 mr-1">{name}</span>
                })}
            </div>
        </div>
    )
}

export default function ProjectCard({ name, description, src, type, techUsed, infoSrc, githubSrc, orientation} : {name: string, description: string, src: string, type: Type, techUsed: Array<string>, infoSrc: string, githubSrc: string, orientation: Orientation}) {
    return (
        <div className={"animate-hover-grow lg:pl-52 lg:pr-52 p-2 flex flex-row items-center w-screen " + (orientation === Orientation.Left ? ("justify-start") : ("justify-end"))}>
            {orientation == Orientation.Left ? (
                <>
                    <ContentContainer src={src} type={type} orientation={orientation} infoSrc={infoSrc} />
                    <InfoContainer name={name} description={description} techUsed={techUsed} infoSrc={infoSrc} githubSrc={githubSrc} orientation={orientation} />
                </>
            ) : (
                <>
                    <InfoContainer name={name} description={description} techUsed={techUsed} infoSrc={infoSrc} githubSrc={githubSrc} orientation={orientation} />
                    <ContentContainer src={src} type={type} orientation={orientation} infoSrc={infoSrc} />
                </> 
            )}
        </div>
    )
}