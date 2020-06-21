import React from 'react';
import {  Button, Icon, Row, Col} from 'react-materialize';
import swal from 'sweetalert';
 
const Fouter = () => {
	return (
		<footer className='navbar-fixed-botom transparent ' fixed='true'>
			<p>
				<Row style={{ align: 'center', marginLeft: '530px' }}>
					<Col></Col>
					<Col></Col>
					<Col></Col>
					<Col></Col>
					<Col>
						<a href='https://www.facebook.com/ZazouModele' target='_blank' rel='noopener noreferrer'>
							<Button node='button' floating waves='light' className='pink lighten-5 right'>
								<Icon left>
									<span className='red-text' style={{ fontFamily: 'klavika', fontSize: '35px' }}>
										f
									</span>
								</Icon>
							</Button>
						</a>
					</Col>
					<Col></Col>
					<Col></Col>
					<Col>
						<a href='https://www.instagram.com/zazoumodele/' target='_blank' rel='noopener noreferrer'>
							<Button node='button' floating waves='light' className='pink lighten-5 right'>
								<Icon left className='red-text'>
									camera_alt
								</Icon>
							</Button>
						</a>
					</Col>
					<Col></Col>
					<Col></Col>
					<Col></Col>
					<Col></Col>
				</Row>
			</p>
			<p className='pink-text   text-lighten-5'>
				© 2020 Copyright Zazou Modèle - Réalisé par{' '}
				<a className='pink-text text-lighten-5' href='https://www.linkedin.com/in/stephane-van-pe/' target='_blank' rel='noopener noreferrer'>
					<u>Stéphane Van-Pé</u>{' '}
				</a>
				<span onClick={() => swal({ text: 'https://pngtree.com/so/watercolor et https://fotomelia.com/' })}>
					- <u>Crédit Photos</u>
				</span>
			</p>
			<br />
		</footer>
	);
};

export default Fouter;
