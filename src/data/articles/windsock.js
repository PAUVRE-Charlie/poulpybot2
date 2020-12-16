/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';
import MathJax from 'react-mathjax';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: 'Dispositif pour hisser les pavillons',
	image: images.windsock.blueprint,
	author: 'Alexis Hamel',
	preview:
		"L’objectif de ce dispositif est de hisser deux pavillons de surface supérieur à 30 cm2 chacun au-delà d’une hauteur de 35cm dans les 5 dernières secondes du match. Cette mission permet de rapporter 10 points lors de la coupe si elle est réussie.",
	body: (
        <MathJax.Provider>
            <div className="article">
                <div className="contents">
                    <img src={images.windsock.windsock} alt="backgroundTableOfContents" />
                    <h1>Sommaire</h1>
                    <div>
                        <Link to="windsockObjective">Objectif</Link>
                        <Link to="windsockPhysics">Considérations physiques</Link>
                        <Link to="windsockModelisation">Modélisation</Link>
                        <Link to="windsockExperiences">Expériences</Link>
                        <Link to="windsockConclusion">Conclusion et perspectives</Link>
                        <Link to="windsockLinks">Bibliographie</Link>
                    </div>
                </div>
                <h2 id="windsockObjective">1. Objectif</h2>
                <p>L’objectif de ce dispositif est de hisser deux pavillons de surface supérieur à 30 cm2 chacun au-delà d’une hauteur de 35cm dans les 5 dernières secondes du match. Cette mission permet de rapporter 10 points lors de la coupe si elle est réussie.</p>
                
                <h2 id="windsockPhysics">2. Considérations physiques</h2>
                <p>Pour atteindre cet objectif, nous allons mettre en œuvre un dispositif qui s’apparente à une glissière qui coulisse dans son support. Cette glissière sera projetée en l’air grâce à un ressort et maintenue en l’air grâce à un aimant. Commençons par modéliser théoriquement notre glissière. On assimilera cette glissière par un point matériel dans un premier temps de masse m posée sur un support de masse m’ et on ne prendra pas en compte les frottements. Le schéma suivant illustre la situation de départ à gauche et la situation finale à droite. On prendra comme origine la position à l’équilibre du système.</p>
                <br/><img src={images.windsock.blueprint} style={{width:'40%', margin: '0 30%'}} alt="blueprint" /><br/><br/>
                <br/><span>On appuie ensuite à <MathJax.Node inline formula={`t=0`} /> sur sur le plateau qui se déplace vers le bas d’une distance d et on le lâche sans vitesse initiale.</span>
                <br/><br/><span>L’allongement algébrique <MathJax.Node inline formula={`𝚫z_{eq}`} /> du ressort lorsque l’ensemble est à l’équilibre est:</span>
                <MathJax.Node formula={`𝚫z_{eq} = - \\frac{m+m'}{k}*g`}/>
                <span>L’équation différentielle régissant les oscillations est: </span><br/><br/>
                <MathJax.Node inline formula={`\\ddot{z} + \\frac{k}{m+m'}z = 0`} />
                <span> avec comme pulsation de référence: </span>
                <MathJax.Node inline formula={`\\omega_0^2=\\frac{k}{m+m'}`} />
                <br/><br/><span>La loi horaire est de la forme: </span>
                <MathJax.Node inline formula={`z(t)=-d \\cos{(\\omega_0t)}`} /><br/><br/>
                <span>Intéressons nous maintenant à la condition à laquelle la masse va quitter le support.</span>
                <br/><br/><span>La réaction du support prend la forme suivante: </span>
                <MathJax.Node inline formula={`R = m(d\\omega_0^2\\cos{(\\omega_0t)}+g)`} /><br/><br/>
                <span>La masse pourra décoller seulement si <MathJax.Node inline formula={`R=0`} />, ce qui revient à ce que </span>
                <MathJax.Node inline formula={`-1\\le -\\frac{g}{d\\omega_0^2} \\le 1`} /><br/><br/>
                <span>Ce qui revient à ce que </span>
                <MathJax.Node inline formula={`g < d\\omega_0^2`} /><br/><br/>
                <span>Cherchons maintenant à déterminer la distance <MathJax.Node inline formula={`d`} /> que l’on doit enfoncer le ressort pour pouvoir obtenir la hauteur <MathJax.Node inline formula={`H`} /> désirée.</span>
                <br/><br/><span>On utilise pour cela le théorème de l’énergie mécanique en supposant aucune force externe ni non conservative. On obtient les relations suivantes:</span>
                <MathJax.Node formula={`E_{m,initiale} = E_{m,finale}`}/>
                <MathJax.Node formula={`\\frac{k(d+\\frac{(m+m')*g}{k})^2}{2}-m*g*d=m*g*H`}/>
                <span>Il reste plus qu’à résoudre cette équation d’ordre 2 en imposant la condition d’obtenir une valeur positive de <MathJax.Node inline formula={`d`} />.</span>
        
                <h2 id="windsockModelisation">3. Modélisation</h2>
                <p>Nous avons modélisé sur le logiciel Autodesk Fusion 360 la glissière, son support et la structure permettant de la faire glisser. Il s’agit d’une première modélisation qui sera affinée par la suite en fonction des différents essais qui permettra de valider ou non la théorie. Les dimensions et le design sont amenés à changer en fonction de la base mobile finale. La modélisation à gauche représente la glissière totalement baissée alors que celle de droite montre la glissière relevée à la hauteur attendue. Sur cette modélisation ne sont pas représentés le ressort, le support et le moteur qui actionne le mécanisme qui libérera la glissière au moment attendu.</p>
                <br/><div className="multipleImages">
                    <img src={images.windsock.model1} alt="model1" style={{width: '40%'}}/>
                    <img src={images.windsock.model2} alt="model2" style={{width: '30%'}}/>
                </div><br/>

                <h2 id="windsockExperiences">4. Expériences</h2>
                <p>La première expérience consistera à vérifier la hauteur atteinte par la glissière grâce à l’impulsion initiale donnée au ressort ainsi que de vérifier le temps mis par la glissière pour atteindre cette hauteur. La seconde expérience consistera quant à elle à tester le mécanisme qui libérera la glissière grâce à l’action du moteur et à valider le mécanisme d’arrêt de la glissière à la hauteur souhaitée.</p>
                
                <h2 id="windsockConclusion">5. Conclusion et perspectives</h2>
                <p>En l’état actuel des choses, il reste à imprimer les pièces de la modélisation et à commander le matériel pour réaliser les expériences au mois de Janvier.</p>
                
                <h2 id="windsockLinks">6. Bibliographie</h2>
                <a href="https://www.camerecole.org/classes/135-correction-les-oscillateurs-mecaniques.html#les-oscillateurs-mecaniques-13">Concept théorique</a> (Exercice VII)
                <br/><br/><span>Modélisation librement inspirée de l'équipe des Karibous</span>
            </div>
        </MathJax.Provider>
		
	)
};

export default article;
