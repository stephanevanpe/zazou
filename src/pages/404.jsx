import React from 'react';
import { Row, Col, Card, Icon, Button } from 'react-materialize';

import Footer from '../components/footer';
import Background from '../image/images-et-photos-gratuites-libres-de-droits-téléchargement-gratuits120.jpg';
const Error = () => {
	return (
		<div
			style={{
				backgroundColor: 'black',
				marginLeft: '0px',
				marginRight: '0px',
				backgroundImage: `url(${Background})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				height: 'auto',
				width: '100%',
			}}
		>
			<Row></Row>
			<Row>
				<Col>
					<a href='/'>
						<Button className='pink lighten-5' floating icon={<Icon className='red-text'>arrow_back</Icon>} large node='button' waves='light' />
					</a>
				</Col>
			</Row>

			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>

			<Row>
				<Col s={1}></Col>
				<Col s={10}>
					<Col s={12}>
						<Card
							className='pink lighten-5'
							closeIcon={<Icon>close</Icon>}
							revealIcon={<Icon>more_vert</Icon>}
							textClassName='red-text'
							title="Oups cette page n'existe pas"
							style={{ borderRadius: '200px 200px 200px 200px' }}
						>
							La page que vous recherchez n'est pas disponible.
							<br />
						</Card>
					</Col>
				</Col>
				<Col s={1}></Col>
			</Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>

			<Footer />
		</div>
	);
};

export default Error;
