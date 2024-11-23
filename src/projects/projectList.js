import react from '../assets/icons/react-original-wordmark.svg';
import nodeJS from '../assets/icons/nodejs-original.svg'
import express from '../assets/icons/express-original.svg'
import postgreSQL from '../assets/icons/postgresql-original-wordmark.svg'
import prisma from '../assets/icons/prisma.svg'
import mongo from '../assets/icons/mongodb-plain-wordmark.svg'
import javascript from '../assets/icons/javascript-original.svg'

import odinbook from '../assets/screenshots/odinbook.png'
import runescapedle from '../assets/screenshots/runescapedle.png'
import memoryCard from '../assets/screenshots/memory-card.png'
import photoTaggingApp from '../assets/screenshots/photo-tagging-game.png'
import clubhouse from '../assets/screenshots/club-house.png'
import fileUploader from '../assets/screenshots/file-uploader.png'
import inventoryApp from '../assets/screenshots/inventory-app.png'
import shoppingCart from '../assets/screenshots/shopping-cart.png'
import messagingApp from '../assets/screenshots/messaging-app.png'
import tictactoe from '../assets/screenshots/tictactoe.png'
import rps from '../assets/screenshots/rps.png'
import etchasketch from '../assets/screenshots/etchasketch.png'
import calculator from '../assets/screenshots/calculator.png'

export const projectList = [
    {
        name: 'OdinBook',
        description: 'A social media site based on Twitter/X and Facebook. A Guest account is available to check it out!',
        githubUrl: 'https://github.com/daltonoswald/odin-book',
        liveUrl: 'https://daltonoswald-odinbook.netlify.app/',
        odinProjectUrl: 'https://www.theodinproject.com/lessons/node-path-nodejs-odin-book',
        screenshot: odinbook,
        tags: ['React', 'Express', 'NodeJS', 'PostgreSQL', 'Prisma'],
        libraries: [
            {
                name: 'React',
                icon: react,
            },
            {
                name: 'NodeJS',
                icon: nodeJS
            },
            {
                name: 'Express',
                icon: express
            },
            {
                name: 'PostgreSQL',
                icon: postgreSQL
            },
            {
                name: 'Prisma',
                icon: prisma
            }
        ]
    },
    {
        name: 'Runescapedle',
        description: 'A Wordle-like game where you guess the daily Oldschool Runescape boss based on clues from previous guesses.',
        githubUrl: 'https://github.com/daltonoswald/runescapedle',
        liveUrl: 'https://daltonoswald-runescapedle.netlify.app/',
        screenshot: runescapedle,
        tags: ['React'],
        libraries: [
            {
                name: 'React',
                icon: react
            }
        ]
    },
    {
        name: 'Photo Tagging App',
        description: 'A Where\'s Waldo game, choose from two different images to play!',
        githubUrl: 'https://github.com/daltonoswald/photo-tagging-app',
        liveUrl: 'https://daltonoswald-photo-tagging-app.netlify.app/',
        odinProjectUrl: 'https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app',
        screenshot: photoTaggingApp,
        tags: ['React', 'Express', 'NodeJS', 'MongoDB'],
        libraries: [
            {
                name: 'React',
                icon: react
            },
            {
                name: 'NodeJS',
                icon: nodeJS
            },
            {
                name: 'Express',
                icon: express
            },
            {
                name: 'MongoDB',
                icon: mongo
            },
        ]
    },
    {
        name: 'Memory Card',
        description: 'A Memory Card game, don\'t click the same Pokemon twice!',
        githubUrl: 'https://github.com/daltonoswald/memory-card',
        liveUrl: 'https://daltonoswald-memory-card.netlify.app/',
        odinProjectUrl: 'https://www.theodinproject.com/lessons/node-path-react-new-memory-card',
        screenshot: memoryCard,
        tags: ['React'],
        libraries: [
            {
                name: 'React',
                icon: react
            }
        ]
    },
    {
        name: 'Club House',
        description: 'A secret message board just for Club Members. Join the club with code: swordFish',
        githubUrl: 'https://github.com/daltonoswald/club-house',
        liveUrl: 'https://daltonoswald-club-house-production.up.railway.app/',
        odinProjectUrl: 'https://www.theodinproject.com/lessons/node-path-nodejs-members-only',
        screenshot: clubhouse,
        tags: ['Express', 'NodeJS', 'PostgreSQL'],
        libraries: [
            {
                name: 'NodeJS',
                icon: nodeJS
            },
            {
                name: 'Express',
                icon: express
            },
            {
                name: 'PostgreSQL',
                icon: postgreSQL
            }
        ]
    },
    {
        name: 'File Uploader',
        description: 'A Google Drive-like website to upload images.',
        githubUrl: 'https://github.com/daltonoswald/file-uploader',
        liveUrl: 'https://daltonoswald-file-uploader-production.up.railway.app/users/log-in',
        odinProjectUrl: 'https://www.theodinproject.com/lessons/nodejs-file-uploader',
        screenshot: fileUploader,
        tags: ['Express', 'NodeJS', 'PostgreSQL', 'Prisma'],
        libraries: [
            {
                name: 'NodeJS',
                icon: nodeJS
            },
            {
                name: 'Express',
                icon: express
            },
            {
                name: 'PostgreSQL',
                icon: postgreSQL
            },
            {
                name: 'Prisma',
                icon: prisma
            }
        ]
    },
    {
        name: 'Inventory Application',
        description: 'A webpage for cateloging a fake vinyl record store inventory and pricing.',
        githubUrl: 'https://github.com/daltonoswald/inventory-application',
        liveUrl: 'https://daltonoswald-inventory-application.up.railway.app/catalog',
        odinProjectUrl: 'https://www.theodinproject.com/lessons/node-path-nodejs-inventory-application',
        screenshot: inventoryApp,
        tags: ['Express', 'NodeJS', 'MongoDB'],
        libraries: [
            {
                name: 'NodeJS',
                icon: nodeJS
            },
            {
                name: 'Express',
                icon: express
            },
            {
                name: 'MongoDB',
                icon: mongo
            },
        ]
    },
    {
        name: 'Shopping Cart',
        description: 'A fake storepage using data from FakeStoreAPI.',
        githubUrl: 'https://github.com/daltonoswald/shopping-cart',
        liveUrl: 'https://dalton-oswald-shopping-cart.netlify.app/',
        odinProjectUrl: 'https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart',
        screenshot: shoppingCart,
        tags: ['React'],
        libraries: [
            {
                name: 'React',
                icon: react
            }
        ]
    },
    {
        name: 'Messaging App',
        description: 'An app that allows you to send private messages to other users.',
        githubUrl: 'https://github.com/daltonoswald/messaging-app',
        liveUrl: 'https://daltonoswald-messaging-app.netlify.app/',
        odinProjectUrl: 'https://www.theodinproject.com/lessons/nodejs-messaging-app',
        screenshot: messagingApp,
        tags: ['React', 'Express', 'NodeJS', 'MongoDB'],
        libraries: [
            {
                name: 'React',
                icon: react
            },
            {
                name: 'NodeJS',
                icon: nodeJS
            },
            {
                name: 'Express',
                icon: express
            },
            {
                name: 'MongoDB',
                icon: mongo
            },
        ]
    },
    {
        name: 'Tic Tac Toe',
        description: 'A simple Tic Tac Toe game built in vanilla Javascript and HTML.',
        githubUrl: 'https://github.com/daltonoswald/tic-tac-toe',
        liveUrl: 'https://daltonoswald.github.io/tic-tac-toe/',
        odinProjectUrl: 'https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe',
        screenshot: tictactoe,
        tags: ['Javascript'],
        libraries: [
            {
                name: 'Javascript',
                icon: javascript
            }
        ]
    },
    {
        name: 'Rock Paper Scissors',
        description: 'A simple Rock Paper Scissors game built in vanilla Javascript and HTML. This was my first project done in The Odin Project.',
        githubUrl: 'https://github.com/daltonoswald/rock-paper-scissors',
        liveUrl: 'https://daltonoswald.github.io/rock-paper-scissors/',
        odinProjectUrl: 'https://www.theodinproject.com/lessons/foundations-rock-paper-scissors',
        screenshot: rps,
        tags: ['Javascript'],
        libraries: [
            {
                name: 'Javascript',
                icon: javascript
            }
        ]
    },
    {
        name: 'Etch-a-Sketch',
        description: 'An Etch-a-Sketch built in vanilla Javascript and HTML. Select a canvas size up to 100 squares!',
        githubUrl: 'https://github.com/daltonoswald/etch-a-sketch',
        liveUrl: 'https://daltonoswald.github.io/etch-a-sketch/',
        odinProjectUrl: 'https://www.theodinproject.com/lessons/foundations-etch-a-sketch',
        screenshot: etchasketch,
        tags: ['Javascript'],
        libraries: [
            {
                name: 'Javascript',
                icon: javascript
            }
        ]
    },
    {
        name: 'Calculator',
        description: 'A Calculator built in vanilla Javascript and HTML. This was an early project that was a bit challenging at the time for my skillset.',
        githubUrl: 'https://github.com/daltonoswald/calculator',
        liveUrl: 'https://daltonoswald.github.io/calculator/',
        odinProjectUrl: 'https://www.theodinproject.com/lessons/foundations-calculator',
        screenshot: calculator,
        tags: ['Javascript'],
        libraries: [
            {
                name: 'Javascript',
                icon: javascript
            }
        ]
    },
]