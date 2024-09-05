import TitleSection from '@/app/projects/sections/title'

import InfoSection from '@/app/projects/sections/info'
import { Type } from '@/app/projects/sections/info' 

import { MemoryAllocatorInfo } from '@/app/projects/project_info'

export default function CustomizableDiscordBot() {
    return (
        <div>
            <TitleSection 
                name={MemoryAllocatorInfo.name}
                description={MemoryAllocatorInfo.description}
                techUsed={MemoryAllocatorInfo.techUsed}
                demoSrc={MemoryAllocatorInfo.demoSrc}
                githubSrc={MemoryAllocatorInfo.githubSrc}
                thumbnailSrc='/img/demos/memory_allocator/memory_dump.png'
            />

            <div className="p-10">
                <InfoSection cards={[
                    {
                        src: '/img/demos/memory_allocator/code_example.png',
                        type: Type.Image,
                        description: 'API is written to be familiar to users of the traditional C memory API. Includes implementations of malloc, memset, memcpy, printf, and free.'
                    },
                    {
                        src: '/img/demos/memory_allocator/function_log.png',
                        type: Type.Image,
                        description: 'All calls to the API are logged to a file. The log includes information about the calling program and the memory being accessed.'
                    },
                    {
                        src: '/img/demos/memory_allocator/params.png',
                        type: Type.Image,
                        description: 'To use the API, the memory management console must be started. This manages the virtual memory pool and allows programs to allocate memory. A custom memory pool size and boundary size can be specified.'
                    },
                    {
                        src: '/img/demos/memory_allocator/memory_table.png',
                        type: Type.Image,
                        description: 'The memory management console includes commands to view the state of the memory table and to dump the contents of the virtual memory.'
                    },
                 ]} />
            </div>
        </div>
    )
}