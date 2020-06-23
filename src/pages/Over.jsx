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
					<h4 className='pink-text   text-lighten-5' style={{ marginTop: '0px', fontFamily: 'Chalkduster, fantasy', fontSize: '85px' }}>
						Alexey Melnikov
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=146ZrYG83Kp8-jQz2AhI6tUnNG7_kkXOy' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=19gL8iAY5hSc4xCEV6F83VSGdp8YMLewq' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=1BRyrSfUty9YQh-gmveigboTRKK2sN0VK' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=1cFqMtZ4hVbBF45kI_c5MFQdqzXhrfPfh' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=15hPR-U_6o-7GtMN5FljA0Up-p6SxQVtK' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=1kl2RT6IZjpMTtg7qy_QlXGEs9C9KKrV-' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=1KbU9e0HEsvNI74n78A7uWu74uWTev1BP' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=1Kzrs6_E5pmWGkpZbGQOYOP9N2Q6IAVNt' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=13PEbvUwGQGgaxdKbyTcUTTqMN7gvj1bZ' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=19d90UnNdY_dvKlc5gx4R11FYUfBR5v-i' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=12ngD22-QNaC0oWEHp_Ll26xVvqLYdMv0' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=16jxTCm2vdL_l3shU4AmwD92syGP1HC_J' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=1GaSWHFV4dKj5UWzKBofRwUk9gkor21uR' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=1dpsy4ooxkLYmCSQ1yN9XafhX1b8kcflO' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=1oCbXHIwdAyRG6jC8vpQJQEiSXF6JEbpw' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=1kEwfmxHD59lD_b_3A5pVq6yVTQU2BLvO' width='150' />
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
							<img alt='Zazou by Alexey Melnikov' src='https://drive.google.com/uc?export=view&id=1MdXNBFBNSeXRIkNlXIjfPf1TBWNftT4C' width='150' />
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
							<img
								alt='Zazou by Alexey Melnikov'
								src='https://drive.google.com/uc?export=view&id=1qLPj8SFWeELxL5WwJpPbv-_2A7BqzK_O'
								width='150'
							/>
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
