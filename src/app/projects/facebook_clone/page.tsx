import TitleSection from '@/app/projects/sections/title'

import InfoSection from '@/app/projects/sections/info'
import { Type } from '@/app/projects/sections/info' 

import { FacebookCloneInfo } from '@/app/projects/project_info'

export default function FacebookClonePage() {
    return (
        <div>
            <TitleSection 
                name={FacebookCloneInfo.name}
                description={FacebookCloneInfo.description}
                techUsed={FacebookCloneInfo.techUsed}
                demoSrc={FacebookCloneInfo.demoSrc}
                githubSrc={FacebookCloneInfo.githubSrc}
                thumbnailSrc='/img/demos/facebook_clone/timeline.png'
            />

            <div className="p-10">
                <InfoSection cards={[
                    {
                        src: '/img/demos/facebook_clone/signup.png',
                        type: Type.Image,
                        description: 'Highly customizable user profiles, with the ability to add a profile picture, display name, and biography.'
                    },
                    {
                        src: '/img/demos/facebook_clone/post.mov',
                        type: Type.Movie,
                        description: 'Users can share text and images to their followers by simply navigating to their profile.'
                    },
                    {
                        src: '/img/demos/facebook_clone/like.mov',
                        type: Type.Movie,
                        description: 'Responsive interface built with React, making it easy to connect with other users by leaving likes and comments.'
                    },
                    {
                        src: '/img/demos/facebook_clone/search.mov',
                        type: Type.Movie,
                        description: 'Search feature allows users to find profiles and follow them. Followed users\' posts will appear on their feed.'
                    },
                 ]} />
            </div>
        </div>
    )
}