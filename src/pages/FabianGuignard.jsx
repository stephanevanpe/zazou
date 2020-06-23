import React from 'react';

import { Icon, Button, Col, Row, MediaBox } from 'react-materialize';
import Footer from '../components/footer';
import Background from '../image/images-et-photos-gratuites-libres-de-droits-téléchargement-gratuits120.jpg';

class FabianGuignard extends React.Component {
	render() {
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
				<br />
				<Row>
					<Col>
						<a href='/'>
							<Button className='pink lighten-5' floating icon={<Icon className='red-text  '>arrow_back</Icon>} large node='button' waves='light' />
						</a>
					</Col>
					<h4 className='pink-text   text-lighten-5' style={{ marginTop: '0px', fontFamily: 'Chalkduster, fantasy', fontSize: '85px' }}>
						Fabian Guignard
					</h4>
					<a href='mailto:info@fabian-guignard.ch'>
						<Button
							node='button'
							floating
							tooltip='info@fabian-guignard.ch'
							tooltipOptions={{
								position: 'left',
							}}
							waves='light'
							className='pink lighten-5'
						>
							<Icon left>
								<span className='red-text'>email</span>
							</Icon>
						</Button>{' '}
					</a>
					<a href='tel:+41792035313'>
						<Button
							node='button'
							floating
							tooltip='+41 792 03 53 13'
							tooltipOptions={{
								position: 'top',
							}}
							waves='light'
							className='pink lighten-5'
						>
							<Icon left>
								<span className='red-text'>call</span>
							</Icon>
						</Button>
					</a>{' '}
					<a href='https://www.facebook.com/exposed-144286756204' target='_blank' rel='noopener noreferrer'>
						<Button
							node='button'
							floating
							tooltip='https://www.facebook.com/exposed-144286756204'
							tooltipOptions={{
								position: 'right',
							}}
							waves='light'
							className='pink lighten-5'
						>
							<Icon left>
								<span className='red-text' style={{ fontFamily: 'klavika', fontSize: '35px' }}>
									f
								</span>
							</Icon>
						</Button>
					</a>
					<p className='pink-text   text-lighten-5'>
						<a href='https://exposed.viewbook.com/fg/portfolio' target='_blank' rel='noopener noreferrer'>
							www.exposed.viewbook.com/fg/portfolio
						</a>
					</p>
				</Row>
				<br />
				<hr />
				<br />
				<br />
				<Row style={{ align: 'center', marginLeft: '35px' }}>
					<Col style={{}}>
						<MediaBox
							id='MediaBox_1'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fabian Guignard' src='https://drive.google.com/uc?export=view&id=1Du6tJv2_W4uPtoveeK8jfA3ZMKsQYCZa' width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_2'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fabian Guignard' src='https://drive.google.com/uc?export=view&id=19frIet__SLEd878b5k2qGrx5QdgD3pzF' width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_3'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fabian Guignard' src='https://drive.google.com/uc?export=view&id=11gdvQbwyjNplzBAmLJUwPRaKfDoacWxp' width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_4'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Stéphane Urquizar' src='https://drive.google.com/uc?export=view&id=1eWN9XUaJFkbbxp6yYWcsY-futz2n69mW' width='150' />
						</MediaBox>
					</Col>

					<Col>
						<MediaBox
							id='MediaBox_5'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Stéphane Urquizar' src='https://drive.google.com/uc?export=view&id=1z3xTIleU9uY9NXtb_RbKAzBes5XzPLwC' width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_6'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Stéphane Urquizar' src='https://drive.google.com/uc?export=view&id=13sAAtugriHnYDrfT16LtPudFobQNRYWs' width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_7'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Stéphane Urquizar' src='https://drive.google.com/uc?export=view&id=1qHSfWtijW2u2IlPV7j75k7BRm9Ntsfct' width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_8'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Stéphane Urquizar' src='https://drive.google.com/uc?export=view&id=1nYQXwM1SbLM2uLMxavFFIIc7REsaAVYU' width='150' />
						</MediaBox>
					</Col>
				</Row>
				<br />
				<hr />
				<br />
				<Footer />
			</div>
		);
	}
}

export default FabianGuignard;
