import TitleSection from '@/app/projects/sections/title'

import InfoSection from '@/app/projects/sections/info'
import { Type } from '@/app/projects/sections/info' 

import { SmartHomeNetworkInfo } from '@/app/projects/project_info'

export default function SmartHomeNetworkPage() {
    return (
        <div>
            <TitleSection 
                name={SmartHomeNetworkInfo.name}
                description={SmartHomeNetworkInfo.description}
                techUsed={SmartHomeNetworkInfo.techUsed}
                demoSrc={SmartHomeNetworkInfo.demoSrc}
                githubSrc={SmartHomeNetworkInfo.githubSrc}
                thumbnailSrc='/img/demos/smart_home_network/home.png'
            />

            <div className="p-10">
                <InfoSection cards={[
                    {
                        src: '/img/demos/smart_home_network/homecontroller_demo_2_edited.mp4',
                        type: Type.Movie,
                        description: 'Smart devices in the network use a custom C++ API. This API is highly flexible, allowing many types of smart home devices to be made and added to the network. For example, here are some guitar-synchronized smart lights.'
                    },
                    {
                        src: '/img/demos/smart_home_network/login.png',
                        type: Type.Image,
                        description: 'Support for multiple users. Each users can add their own devices and control them independently.'
                    },
                    {
                        src: '/img/demos/smart_home_network/homecontroller_demo_3.mp4',
                        type: Type.Movie,
                        description: 'Device state changes are synced across the network. All instances of the web interface will show device updates in real time.'
                    },
                    {
                        src: '/img/demos/smart_home_network/homecontroller_demo_4.mp4',
                        type: Type.Movie,
                        description: 'Updates for newly connected devices are reflected on the web interface in real time.'
                    },
                 ]} />
            </div>
        </div>
    )
}