/* This file store an article used in this website */

/* Data imports */
import images from '../images';

const article = {
	title: 'Electronique',
	image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
	author: 'Alexis Hamel',
	preview:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec viverra placerat sapien, sed feugiat elit',
	body: (
		<div className="article">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
			placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient montes,
			nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur nibh. Duis ornare
			ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc quis venenatis orci,
			vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum vitae ornare sapien.<br />Integer
			semper imperdiet justo, quis viverra ipsum ultricies vel. Donec viverra placerat sapien, sed feugiat elit
			elementum gravida. Sed eu tempus urna. Quisque accumsan interdum risus et elementum. Etiam non diam vitae
			quam faucibus suscipit. Vivamus feugiat consequat sapien in pretium. Duis auctor pellentesque mauris, sed
			aliquet nunc condimentum vitae. Sed sed odio orci. Proin quis ligula risus. Sed porta metus eget porta
			laoreet.<br />Sed suscipit felis et tempus fermentum. Suspendisse a enim sit amet enim facilisis sodales vel
			in lorem. Pellentesque a mi vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam
			tempus. Praesent eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero
			et vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />
			<img
				style={{ height: '20%', width: '80%', margin: '1rem 10%' }}
				src={images.electronique}
				alt="electronique"
			/>
			<br />
			Cras ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
			sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce molestie
			ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis semper dolor, nec
			vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus. Curabitur et elit sed ante
			volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet viverra lectus ultricies. Aliquam
			tincidunt leo venenatis lectus lacinia rhoncus quis nec erat. Vestibulum ante ipsum primis in faucibus orci
			luctus et ultrices posuere cubilia curae; Proin tortor leo, vehicula eget nisi eget, pharetra aliquet diam.
			Pellentesque vehicula est ac vehicula consequat. Curabitur vitae tristique enim. Nulla sodales ultricies
			dolor, non finibus dui blandit vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum
			posuere diam, a euismod ante iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes,
			nascetur ridiculus mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante
			velit laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
			aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat tempus,
			nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed imperdiet
			congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum primis in faucibus
			orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel lobortis ligula mollis nec.
			Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin maximus lacinia. Phasellus lacinia
			leo ex, ut placerat ligula placerat eu.
		</div>
	)
};

export default article;
