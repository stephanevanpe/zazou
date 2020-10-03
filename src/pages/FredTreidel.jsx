import React from 'react';

import { Icon, Button, Col, Row, MediaBox } from 'react-materialize';
import Footer from '../components/footer';
import Background from '../image/images-et-photos-gratuites-libres-de-droits-téléchargement-gratuits120.jpg';
import ScrollUpButton  from 'react-scroll-up-button';

class FredTreidel extends React.Component {

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
						- Fred Treidel -
					</h4>
					<a href='mailto:fredphotos@bluewin.ch'>
						<Button
							node='button'
							floating
							tooltip='fredphotos@bluewin.ch'
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
					<a href='tel:+41798193606'>
						<Button
							node='button'
							floating
							tooltip='+41 79 819 36 06'
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
					<a href='https://www.facebook.com/fred.treidel/' target='_blank' rel='noopener noreferrer'>
						<Button
							node='button'
							floating
							tooltip='https://www.facebook.com/fred.treidel/'
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
						<a href='http://www.treidel.com/' target='_blank' rel='noopener noreferrer'>
							www.treidel.com
						</a>
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1n7_GKTDuz0p0WadPtznnbJiDeIqY5TxG' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1U5O0KRPjo6mgfhq7ZojZUXhddjUHUzmo' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1l2CNwDs8qJlZOVyNRR32I9pJ8BsvQ5Lu' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1lrLo0VGYTnNNh0VzbMRKva2In9sY0_J8' width='150' />
						</MediaBox>
						<br />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1U2mQZNaSXa48ac_AWtLNKv7tbV1Z-jQF' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1xGqO2-p_VHbqoGlHRM7d31jC3PNjMlZd' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1CWREmcSjGwNQW92raVmkoW29Jp8Sw_am' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1DOp7ZAj73lrLaCuD7JcETrwqTdl_pkZj' width='150' />
						</MediaBox>
					</Col>
					<Col>
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1ufCrdqcxUVmeenN19MAhC1B_7HPs7KHq' width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '208px' }}>
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1vU9rss8egjn_e61WGqOSdFx5yMpefh6d' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=140MKFcMzgn3VppRaXpeU2iVZDSwzaALK' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1_9nh4kyUl5TEDuKt9wme6rfOKWUQ-lw9' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1KT-8XVNEuyJZLmfcRqfwqYFmbkElDeBe' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1RS3yRvoKJJM3mTGnJ1x-uOfMyFmCrOH_' width='150' />
						</MediaBox>
					</Col>
					<Col>
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=180xnWAsdp35Fv7LzJscEMtvDGiZkaGmN' width='150' />
						</MediaBox>
						<br/>
						<MediaBox
							id='MediaBox_19'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1JkaGgpfN4m0AJLRH-VXpSaPC94Lc6doi' width='150' />
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

;

export default FredTreidel;
