import ProjectCard from '@/app/sections/project_card'
import { Orientation, Type } from '@/app/sections/project_card'

import { FacebookCloneInfo, SmartHomeNetworkInfo, CustomizableDiscordBotInfo } from '@/app/projects/project_info'

export default function ProjectsSection() {
    return (
        <div className="pt-24 min-h-screen bg-blue-300 z-50">
            <div className="flex flex-col justify-center items-center text-center">
                <div className="pb-20">
                    <h1 className="text-3xl text-white">My Projects</h1>
                </div>
                <div className="">
                    <ProjectCard 
                        name={FacebookCloneInfo.name}
                        description={FacebookCloneInfo.description}
                        src="/img/demos/facebook_clone/timeline.png"
                        type={Type.Image}
                        techUsed={FacebookCloneInfo.techUsed}
                        infoSrc="/projects/facebook_clone"
                        githubSrc={FacebookCloneInfo.githubSrc}
                        orientation={Orientation.Left}
                    />
                    <br />
                    <ProjectCard 
                        name={SmartHomeNetworkInfo.name}
                        description={SmartHomeNetworkInfo.description}
                        src="/img/demos/smart_home_network/homecontroller_demo_1_edited.mp4"
                        type={Type.Movie}
                        techUsed={SmartHomeNetworkInfo.techUsed}
                        infoSrc="/projects/smart_home_network"
                        githubSrc={SmartHomeNetworkInfo.githubSrc}
                        orientation={Orientation.Right}
                    />
                    <br />
                    <ProjectCard 
                        name={CustomizableDiscordBotInfo.name}
                        description={CustomizableDiscordBotInfo.description}
                        src="/img/demos/customizable_discord_bot/home.png"
                        type={Type.Image}
                        techUsed={CustomizableDiscordBotInfo.techUsed}
                        infoSrc="/projects/customizable_discord_bot"
                        githubSrc={CustomizableDiscordBotInfo.githubSrc}
                        orientation={Orientation.Left}
                    />
                    <br />
                    <ProjectCard 
                        name="Memory Manager" 
                        description="A custom memory allocator meant to mimic the C memory API. Includes recreations of malloc(), free(), memcpy(), etc."
                        src="/img/test_image.webp"
                        type={Type.Image}
                        techUsed={[]}
                        infoSrc="#"
                        githubSrc="#"
                        orientation={Orientation.Right}
                    />
                    <br />
                    <ProjectCard 
                        name="Portfolio Website" 
                        description="My portfolio website built with React, Next.js, and Tailwind. I hope you've been liking it!"
                        src="/img/test_image.webp"
                        type={Type.Image}
                        techUsed={[]}
                        infoSrc="#"
                        githubSrc="#"
                        orientation={Orientation.Left}
                    />
                </div>
                <div className="">
                </div>
            </div>
        </div>
    )
}