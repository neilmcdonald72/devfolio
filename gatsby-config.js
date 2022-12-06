module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://neilmcdonald.netlify.app/`,
    // Your Name
    name: 'Neil McDonald',
    // Main Site Title
    title: `Neil McDonald | Mobile Application Developer`,
    // Description that goes under your name in main bio
    description: `Software Developer`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/neilmcdonald72`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/neil-mcdonald-534310235/`,
    // Content of the About Me section
    about: `Welcome to my developing portfolio site! I am a professional Mobile App Developer with a passion for developing applications
     for a variety of different platforms.\n
     \n
     Below are some things I've made and done. They'll probably come back to haunt me in a few years time.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Nature Walk App',
        description:
          'A cross-platform mobile app built with React Native and NodeJS. Users can upload photos and view a feed of posts from other users.',
        link: 'https://github.com/niemelaig123/NatureWalkApp',
      },
      {
        name: 'Local Note',
        description:
          'A rich text editor built with .NET UWP framework using an MVVM architecture.',
        link: 'https://github.com/neilmcdonald72/LocalNoteV2',
      },
      {
        name: 'Maze Solver',
        description:
          'A classic game of brick breaker made with .NET C#',
        link: 'https://github.com/neilmcdonald72/MazeSolver',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Savormetrics',
        description: 'Mobile Application Developer, May 2022 - Present'
      },
      {
        name: 'Project Blackbird',
        description: 'Web Developer Intern, April 2022 - May 2022'
        
      },
      {
        name: 'CIBC',
        description: 'Financial Service Representative, April 2017 - August 2020'
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript, Java/Kotlin/Android, ReactJS, React Native, C#/.NET, C++, PHP',
      },
      {
        name: 'Databases',
        description: 'MySQL, MongoDB',
      },
      {
        name: 'Other',
        description:
          'Git, AWS',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
