module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://neilmcdonald.netlify.app/`,
    // Your Name
    name: 'Neil McDonald',
    // Main Site Title
    title: `Neil McDonald | Software Developer`,
    // Description that goes under your name in main bio
    description: `Software Developer - Student`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/neilmcdonald72`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/neil-mcdonald-534310235/`,
    // Content of the About Me section
    about: `Welcome to my developing portfolio site! I am a student at NSCC and after
     a previous career in banking I finally decided to pursue my passion in software and web development.\n
     \n
     Below are some things I've made and done. They'll probably come back to haunt me in a few years time.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Laravel social media feed',
        description:
          'A basic CRUD web application that allows users to make, edit or delete their own posts. Admin accounts can edit and delete other users posts.',
        link: 'https://github.com/neilmcdonald72/LaravelSocialMediaFeed',
      },
      {
        name: 'Local Note',
        description:
          'A rich text editor built with .NET UWP framework using a MVVM architecture.',
        link: 'https://github.com/neilmcdonald72/MazeSolver',
      },
      {
        name: 'Brick Breaker',
        description:
          'A classic game of brick breaker made with .NET C#',
        link: 'https://github.com/neilmcdonald72/BrickBreaker',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'CIBC',
        description: 'Financial Service Representation, April 2017 - August 2020'
      },
      {
        name: 'Stanton Solar',
        description: 'Web developer and office administrator, May 2021 - Present'
        
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, JavaScript, Java, C#/.NET, C++, PHP, HTML5/CSS3',
      },
      {
        name: 'Databases',
        description: 'MySQL',
      },
      {
        name: 'Other',
        description:
          'Git, Docker, AWS, Agile / Scrum',
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
