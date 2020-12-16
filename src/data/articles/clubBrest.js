/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';
import colors from '../colors';
import team from '../team';

const article = {
	title: "Club robotique de Brest",
	image: images.club_brest.equipe,
	author: 'Atlantic Robotic Club',
	preview:
		'Cet article présente les membres du club robotique de Brest.',
	body: (
		<div className="article">
            <div className="contents">
				<img src={images.club_brest.equipe} alt="backgroundTableOfContents" />
				<h1>Liste des membres</h1>
				<div>
                    {
                        team && Object.values(team.brest).map((person) => {
                            return <Link key={person.id + person.firstname} to={"person" + person.id}>{person.firstname + " " + person.lastname}</Link>
                        })
                    }
				</div>
			</div>
            {
                team && Object.values(team.brest).map((person) => {
                    return <div key={"person" + person.id} className="sideViewImage avatar" style={{flexDirection: person.id%2 === 0 ? 'row' : 'row-reverse'}}>
                            <div><img src={person.image} alt={"avatar"+person.id}></img></div>
                            <div><h2>{person.firstname + " " + person.lastname}</h2>
                            <p style={{color: colors.secondary}}>{person.nickname}</p>
                            <p style={{color: colors.grey}}>{person.taf}</p>
                            <br/>
                            <p>{person.description}</p></div>
                    </div>
                })
            }
		</div>
	)
};

export default article;
