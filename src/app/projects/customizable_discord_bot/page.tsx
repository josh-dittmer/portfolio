import TitleSection from '@/app/projects/sections/title'

import InfoSection from '@/app/projects/sections/info'
import { Type } from '@/app/projects/sections/info' 

import { CustomizableDiscordBotInfo } from '@/app/projects/project_info'

export default function CustomizableDiscordBot() {
    return (
        <div>
            <TitleSection 
                name={CustomizableDiscordBotInfo.name}
                description={CustomizableDiscordBotInfo.description}
                techUsed={CustomizableDiscordBotInfo.techUsed}
                demoSrc={CustomizableDiscordBotInfo.demoSrc}
                githubSrc={CustomizableDiscordBotInfo.githubSrc}
                thumbnailSrc='/img/demos/customizable_discord_bot/home.png'
            />

            <div className="p-10">
                <InfoSection cards={[
                    {
                        src: '/img/demos/customizable_discord_bot/commands.png',
                        type: Type.Image,
                        description: 'Command dashboard allows lets users view a list of existing commands and their associated data.'
                    },
                    {
                        src: '/img/demos/customizable_discord_bot/log.png',
                        type: Type.Image,
                        description: 'The bot will track user statistics. These statistics can be viewed in Discord via a command or on the website.'
                    },
                    {
                        src: '/img/demos/customizable_discord_bot/new_command.png',
                        type: Type.Image,
                        description: 'Commands are highly customizable and can have a variety of functions.'
                    },
                    {
                        src: '/img/demos/customizable_discord_bot/text_command.png',
                        type: Type.Image,
                        description: 'The online command creation wizard makes creating new commands easy!'
                    },
                 ]} />
            </div>
        </div>
    )
}