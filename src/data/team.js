// This file store data on team members

/* Data imports */
import images from './images';

const team = {
	nantes:{
        Kamil:{
            id: 1,
            firstname: 'Kamil',
            lastname: 'Takhi',
            nickname: 'Le Rusher',
            image: images.club_nantes.kamil,
            taf: 'Automatique et Systèmes Cyber-Physiques',
            description: "J’aime la Robotique, le challenge de la coupe semblait intéressant et la perspective de travailler avec une autre équipe en distanciel à Brest semblait vraiment riche. Je gère le côté administratif en tant que president du club, et je participe à la partie loi de commande, asservissement et capteurs"
        },
        Théo:{
            id: 2,
            firstname: 'Théo',
            lastname: 'Fontenit',
            nickname: 'Le Challenger',
            image: images.club_nantes.theo,
            taf: 'Automatique et Systèmes Cyber-Physiques',
            description: "Je suis passionné de robotique depuis le lycée et j’ai eu l’occasion d’assister à la coupe de France de robotique en 2019, cela m’a beaucoup plus et c’est pourquoi le projet me tiens à cœur. J'ai le rôle du responsable du forum et de la création du poster."
        },
        Sébastian:{
            id: 3,
            firstname: 'Sébastian',
            lastname: 'Heyer',
            nickname: 'Elec Master',
            image: images.club_nantes.sebastian,
            taf: 'Robotique et Interactions',
            description: "Passioné de l'électronique, j'adore la compétition et je suis très motivé."
        },
        Charlie:{
            id: 4,
            firstname: 'Charlie',
            lastname: 'Pauvré',
            nickname: 'Le Webmaster',
            image: images.club_nantes.charlie,
            taf: 'Dévelopement collaboratif de logiciels',
            description: "J'adore l'informatique et plus particulièrement le développement. Je suis responsable du site internet du club."
        },
        Victor:{
            id: 5,
            firstname: 'Victor',
            lastname: 'Gerardo Nosthas',
            nickname: 'Chief Happiness Officer',
            image: images.club_nantes.victor,
            taf: 'Automatique et Systèmes Cyber-Physiques',
            description: "J'aime l'éléctronique et le traitement du signal, ce projet me semble parfait pour faire une première application des contenus de ma TAF de cette année. Le fait de participer dans une compétiton me motive encore plus."
        },
        Kevin:{
            id: 6,
            firstname: 'Kevin',
            lastname: 'Michalewicz',
            nickname: 'Crew Manager',
            image: images.club_nantes.kevin,
            taf: 'Robotique et Interactions',
            description: "J'ai des connaissance de l'électronique, de la robotique et de l'automatisation et j'ai un intérêt profond pour la robotique."
        },
        Alexis:{
            id: 7,
            firstname: 'Alexis',
            lastname: 'Hamel',
            nickname: 'Le Datacenter',
            image: images.club_nantes.alexis,
            taf: 'Robotique et Interactions',
            description: "Je suis responsable de la documentation sur le projet, je suis à l'écoute, détérminé et je cherche à découvrir le monde des effecteurs."
        }
    },
    brest: {
        Aziz:{
            id: 8,
            firstname: 'Aziz',
            lastname: 'Sellami',
            nickname: 'Le compas',
            image: images.club_brest.aziz,
            taf: 'Systèmes Embarqués Hétérogènes',
            description: "Ponctuel et rigoureux"
        },
        Esteban:{
            id: 9,
            firstname: 'Andrés Esteban',
            lastname: 'Sierra Sanchez',
            nickname: 'Le Couteau Suisse',
            image: images.club_brest.esteban,
            taf: 'Systèmes Embarqués Hétérogènes',
            description: "Polyvalence et adaptabilité"
        },
        Sean:{
            id: 10,
            firstname: 'Sean',
            lastname: 'Bonnemains',
            nickname: 'Le Scrum Master',
            image: images.club_brest.sean,
            taf: "Conception d'Objects Communicants",
            description: "Coordonner et orienter"
        },
        Jérémy:{
            id: 11,
            firstname: 'Jérémy',
            lastname: 'Roques',
            nickname: "L'ancien",
            image: images.club_brest.jeremy,
            taf: 'Systèmes Embarqués Hétérogènes',
            description: "Experience et professionnalisme"
        },
        Xiayue:{
            id: 12,
            firstname: 'Xiayue',
            lastname: 'Shen',
            nickname: 'Le Businessman',
            image: images.club_brest.xiayue,
            taf: 'Dévelopement collaboratif de logiciels',
            description: "Innovant et performant"
        },
        Maxence:{
            id: 13,
            firstname: 'Maxence',
            lastname: 'Nesme',
            nickname: "L'agrégateur",
            image: images.club_brest.maxence,
            taf: 'Mathematical and Computational Engineering',
            description: "Rassembler et intégrer"
        },
    }
}    
        

export default team;
