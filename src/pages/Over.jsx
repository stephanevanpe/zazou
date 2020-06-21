import React from 'react';

import { Icon, Button, Col, Row, MediaBox } from 'react-materialize';
import Footer from '../components/footer';
import Background from '../image/images-et-photos-gratuites-libres-de-droits-téléchargement-gratuits120.jpg';
import ScrollUpButton  from 'react-scroll-up-button';

class Over extends React.Component {
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
					<h4 className='pink-text   text-lighten-5' style={{ marginTop: '0px', fontFamily: 'Sablon Up', fontSize: '85px' }}>
						- Alexey Melnikov -
					</h4>
					<a href='https://www.facebook.com/aleksey.melnikov.549' target='_blank' rel='noopener noreferrer'>
						<Button
							node='button'
							floating
							tooltip='https://www.facebook.com/aleksey.melnikov.549'
							tooltipOptions={{
								position: 'top',
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
						{' '}
						Vintage collection par{' '}
						<a href='https://www.facebook.com/solo.matine.9' target='_blank' rel='noopener noreferrer'>
							Solo Mâtine
						</a>
						.
					</p>
					<p className='pink-text   text-lighten-5'>
						<a href='http://www.pinterest.com/lappartv/maillots-de-bain-vintage/' target='_blank' rel='noopener noreferrer'>
							http://www.pinterest.com/lappartv/maillots-de-bain-vintage/
						</a>
						.
					</p>
				</Row>
				<br />
				<hr />
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
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/1a0d0c208a31ce88c6bd220adc6d1822.jpg')} width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/7ce52022cc56314e896b81faf7bd360f--triumph-look.jpg')} width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/8e62fdef4fcc05d43f04203743bb8657--look.jpg')} width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/54f336cc3d9a5eaeaaeba90ed4f421c3--look.jpg')} width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/78de87fc1d4ac1fca03949b9e1fd3ad1--look.jpg')} width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/126a6d403405a7220ed4c32b5ab51574--bikinis.jpg')} width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/719ccd69632f19bbd3d96f511d140c12--bikinis.jpg')} width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/855a890ba6901071cd16d80cda8502f7--bikini-babes-roses.jpg')} width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
					<Col style={{}}>
						<MediaBox
							id='MediaBox_9'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/3338bd454ad338949ba01e0b5f8a7966--look.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_10'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/GIF_LOOK 15_LOGO.gif')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_11'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/be33ef59e93860fd31c623c6412465f2--look.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_12'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/d3c3054eea35dcc7a084d3a96c568113--bikinis.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_13'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/d9d06afaf1650c805fb03979a448b9a4--bikinis.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_14'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/d685e8a6fa588a6fe6aca108ecf5a506--look.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_15'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/dbdaf4913b47687486e782cd7d84dda5--look.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_16'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/f1b33987865b87b50369599ea74693c2--marie-look.jpg')} width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
					<Col style={{}}>
						<MediaBox
							id='MediaBox_17'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/79596390_101648768003350_2669736415469764608_n.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_18'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Alexey Melnikov' src={require('../image/Over/1511716_613595728728659_8547156339227815813_o.jpg')} width='150' />
						</MediaBox>
					</Col>
				</Row>
				<div>
					<ScrollUpButton ContainerClassName='AnyClassForContainer' TransitionClassName='AnyClassForTransition'>
						<Button
							style={{ backgroundColor: '#fce4ec' }}
							floating
							icon={<Icon className='red-text  '>arrow_upward</Icon>}
							large
							node='button'
							waves='light'
						/>
					</ScrollUpButton>
				</div>
				<br />
				<hr />
				<br />
				<Footer />
			</div>
		);
	}
}

export default Over;
