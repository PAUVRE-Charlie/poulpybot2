/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: "Choix du matériel de la base roulante",
	image: images.equipment.wheels,
	author: 'Gerardo Nosthas',
	preview:
		'Nous avons évalué plusieurs options  de modèles et matériels pour les roues, on a comparé les prix et la performance des roues Sumo, Omni et des roues en forme de Pneu, ces dernières ayant le meilleur rapport qualité/prix.',
	body: (
		<div className="article">
            <div className="contents">
				<img src={images.equipment.wheels} alt="backgroundTableOfContents" />
				<h1>Sommaire</h1>
				<div>
                    <Link to="equipmentWheels">Choix des roues</Link>
                    <Link to="equipmentMotors">Les moteurs</Link>
                    <Link to="equipmentBase">Le matériel de la base</Link>
                    <Link to="equipmentBatteries">Les batteries</Link>
                </div>
			</div>
            <h2 id="equipmentWheels">1. Choix des roues</h2>
            <div className="sideViewImage">
                <span>Nous avons évalué plusieurs options  de modèles et matériels pour les roues, on a comparé les prix et la performance des roues Sumo, Omni et des roues en forme de Pneu, ces dernières ayant le meilleur rapport qualité/prix. Nous avons aussi considéré de fabriquer nos propres roues Sumo en polyuréthane en imprimant des moules à l’imprimante 3D. Le coût était trop élevé pour pas grande chose à part la possibilité de refaire autant de roues qu’on veut, mais c’était clairement pas la voie à prendre sachant qu’on utiliserait que 2 pour ce projet.</span>
                <br/><img src={images.equipment.wheels} style={{width:'30%', margin:'0 0 0 1rem'}} alt="wheels" />
            </div>
            <br/>
            <table className="tableProsAndCons">
                <tr>
                    <th>Roue</th>
                    <th>+</th>
                    <th>-</th>
                </tr>
                <tr>
                    <td>Omni</td>
                    <td>Plus de flexibilité dans le mouvement de la base et ses possibilités de déplacements spontanés</td>
                    <td>
                        <ul>
                            <li><span>Perte de traction  dû à la petite surface de contact des roues et donc perte de vitesse potentielle.</span></li>
                            <li><span>Impliquent l’installation de 4 moteurs au lieu de 2.</span></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Sumo</td>
                    <td>Plus grande surface de contact possible, on profite au max des moteurs</td>
                    <td>Coût élevé car souvent importées et contrainte de taille (les grandes roues sont rares)</td>
                </tr>
                <tr>
                    <td>Pneu</td>
                    <td>Bonne taille, matériaux durables et faible prix</td>
                    <td> </td>
                </tr>
            </table>
            <h2 id="equipmentMotors">2. Les moteurs</h2>
            <div className="sideViewImage">
                <span>Lors d’un inventaire du matériel laissé en salle robotique par les anciens clubs de l’école, nous avons retrouvé deux moteurs Maxon 118751 qui promettent un très bon rendement et qui nous feront économiser des centaines d'euros.</span>
                <br/><img src={images.equipment.motor} style={{width:'40%', margin:'0 0 0 1rem'}} alt="motor" />
            </div><br/>
            <p>Les deux pièces ont été trouvées couplées avec des codeurs incrémentaux de vitesse Faulhauber HEDL-5540 qui nous permettent non seulement de contrôler la vitesse de la base en construisant un asservissement en boucle fermée mais aussi calculer la position du robot à tout instant. Cependant, on s’est proposé d'implémenter aussi des roues codeuses pour assurer une mesure plus fiable, on se servirait en ce cas de codeurs rotatifs que l’on attachait à des roues libres pour avoir des données indépendantes des roues motrices.</p>
            <span>L’équipe a effectué une caractérisation des moteurs <a href={process.env.PUBLIC_URL + '/articles/robot/9'}>ici</a>.</span><br/>
            <h2 id="equipmentBase">3. Le matériel de la base</h2>
            <div className="sideViewImage">
                <span>Vu les contraintes de taille et donc de poids du robot, nous avons décidé qu’il fallait clairement faire une base en aluminium pour tenir tous les composants dans 3 appuis: les deux roues motrices dans les côtés et une roulette à bille dans l’arrière.</span>
                <br/><img src={images.equipment.base} style={{width:'40%', margin:'0 0 0 1rem'}} alt="base" />
            </div>
            <h2 id="equipmentBatteries">4. Les batteries</h2>
            <p>On a choisi une batterie Li-Poly de 5000mAh pour couvrir le besoin de 2.92Ah des deux moteurs en charge.Ce type de batterie est assez coûteuse mais elle offre une grande capacité de stockage dans un petit volume et est devenu très populaire dans le domaine du RC.</p>
        </div>
	)
};

export default article;
