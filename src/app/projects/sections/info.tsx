import Image from 'next/image';

export enum Type {
    Image,
    Movie
};

export interface InfoCardData {
    src: string,
    type: Type,
    description: string
};

function InfoCard({ data }: { data: InfoCardData }) {
    return (
        <div className="p-5">
            <div className="flex justify-center">
                {data.type === Type.Image ? (
                    <div className="">
                        <Image className="border-[10px] border-blue-400 rounded" src={data.src} width={800} height={600} alt="" />
                    </div>
                ) : (
                    <video className="border-[10px] border-blue-400 rounded" width="800" height="600" controls>
                        <source src={data.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            <div className="flex justify-center text-center mt-5">
                <p className="text-white max-w-md">{data.description}</p>
            </div>
        </div>
    )
}

export default function InfoSection({ cards }: { cards: Array<InfoCardData> }) {
    return (
        <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 grid-flow-col">
            {cards.map((data, index) => {
                return <InfoCard key={index} data={data} />
            })}
        </div>
    )
}