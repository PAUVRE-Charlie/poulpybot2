/* This file store an article used in this website */

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: 'Actionneurs',
	image: images.actuator.blueprint,
	author: 'Gerardo Nosthas',
	preview:
		"Pour cette édition de la Coupe de Robotique, le but principal est de récupérer un maximum d'éco cups que l’on ramène de notre côté de la table, il nous faut donc un système qui nous permettra de capturer et transporter les gobelets de façon fiable.",
	body: (
		<div className="article">
			
            <p>Pour cette édition de la Coupe de Robotique, le but principal est de récupérer un maximum d'éco cups que l’on ramène de notre côté de la table, il nous faut donc un système qui nous permettra de capturer et transporter les gobelets de façon fiable. La solution est simple: on se servira d’un assemblage de pompes à air couplées avec des ventouses qui saisissent les ecocups par suction et les tiennent en place avec sécurité jusqu'à qu'ils soient relâchés. Pour se faire, le système mécanique sera composé de pompes et électrovannes qui bloquent la pression dans les ventouses à une valeur constante. On a identifié les différentes parties de l’actionneur qu’on a décidé de séparer en cartes électroniques indépendantes. L’actionneur suit donc le diagramme suivant:</p>
            <br/><img src={images.actuator.blueprint} style={{width:'100%', margin:'0'}} alt="blueprint" />
            <br/>
            <span>Explicitement, chaque carte a les caractéristiques suivantes:</span>
            <ul>
                <li>Carte USB:
                    <ul>
                        <li><span>Génération de 3.3V depuis le 5V</span></li>
                        <li><span>Alimentation externe pour le bus</span></li>
                        <li><span>Communication avec le bus LIN en tant que master</span></li>
                        <li><span>Communique avec un PC via USB</span></li>
                    </ul>
                    <span>Cette carte sert comme interface entre l’ordinateur et l’actionneur, elle permet donc de     téléverser la configuration de l’interface robot pour calibrer son fonctionnement lors de la phase de réalisation du système. Il  faut donc du hardware permettant de recevoir des données par USB, on peut penser à une carte Arduino (a voir si on peut trouver des cartes plus simples)</span>
                </li>
                <li>Interface Robot:
                    <ul>
                        <li><span>Est master du bus LIN des pompes</span></li>
                        <li><span>Communication via une interface (CAN, UART, I2C)</span></li>
                    <span>Cette interface transmet les commandes de haut niveau de l’IA du robot vers la partie mécanique du système. Elle commande donc le comportement de bas niveau de la carte pompes. Conversement, elle sert aussi pour faire remonter à l’IA les informations de l’état du système observé par des capteurs de courant pour adapter la stratégie en temps réel.</span>
                    </ul>
                </li>
                <li>Carte Pompes:
                    <ul>
                        <li><span>Pilote les pompes et électrovannes</span></li>
                        <li><span>Communique via le bus LIN</span></li>
                        <li><span>Mesure le courant sur une pompe (Capteur de type <a href="https://www.ti.com/lit/ds/symlink/ina139.pdf?ts=1606010238037&ref_url=https%253A%252F%252Fwww.ti.com%252Fproduct%252FINA139">INA139</a>)</span></li>
                    </ul>
                    <span>Cette carte peut être structurée autour d’un microcontrôleur du type <a href="https://www.microchip.com/wwwproducts/en/ATtiny44">ATtiny44</a>.</span>
                </li>
            </ul>



        </div>
	)
};

export default article;
