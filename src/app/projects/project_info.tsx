interface ProjectInfo {
    name: string,
    description: string,
    techUsed: Array<string>,
    demoSrc: string,
    githubSrc: string
}

export const FacebookCloneInfo: ProjectInfo = {
    name: 'Facebook Clone',
    description: 'Fully function Facebook clone that features a responsive UI written in TypeScript with React and Next.js, and a backend written in Java.',
    techUsed: ['TypeScript', 'Java', 'SQL', 'React', 'Tailwind', 'Next.js', 'H2', 'Blade', 'AWS'],
    demoSrc: 'https://fb.jditt.me/login',
    githubSrc: 'https://github.com/josh-dittmer/cs151-facebook-clone'
};

export const SmartHomeNetworkInfo: ProjectInfo = {
    name: 'Smart Home Network',
    description: 'Application allowing homemade smart home devices to be controlled from an online interface. Devices can be made with a custom C++ API.',
    techUsed: ['C++', 'TypeScript', 'React', 'Tailwind', 'Next.js', 'Express.js', 'SSL', 'WebSocket', 'Docker'],
    demoSrc: '',
    githubSrc: 'https://github.com/josh-dittmer/HomeController_v3-dev'
};

export const CustomizableDiscordBotInfo: ProjectInfo = {
    name: 'Customizable Discord Bot',
    description: 'Fully customizable Discord bot with a web interface to add commands that display text/images and play user-uploaded sounds.',
    techUsed: ['JavaScript', 'Discord.js', 'Node.js', 'HTML', 'CSS', 'AWS'],
    demoSrc: 'https://discord.jditt.me/',
    githubSrc: 'https://github.com/josh-dittmer/JahBot'
};

export const MemoryAllocatorInfo: ProjectInfo = {
    name: 'Memory Allocator',
    description: 'A custom memory allocator meant to mimic the C memory API. Includes implementations of malloc(), free(), memcpy(), etc.',
    techUsed: ['C', 'GCC', 'Docker', 'Linux'],
    demoSrc: '',
    githubSrc: 'https://github.com/josh-dittmer/memory-allocator'
}

export const PortfolioInfo: ProjectInfo = {
    name: 'Portfolio Website',
    description: 'My portfolio website built with React, Next.js, and Tailwind. I hope you\'ve been liking it!',
    techUsed: ['TypeScript', 'React', 'Tailwind', 'Next.js', 'AWS'],
    demoSrc: 'https://jditt.me/',
    githubSrc: 'https://github.com/josh-dittmer/portfolio'
}