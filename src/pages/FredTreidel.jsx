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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /1A7259CF-41FC-44F7-A198-13069CEB4099.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /8BCDB729-FBEB-4765-A4DA-DBB7726474BC.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /19B2A1D5-B7BC-45A9-8F2D-0C55E487A8FB.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /223B83B6-D3E9-4AD5-90F3-FEFBBD0D10B4.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /B1E35F3E-209E-44BA-A058-7C9332288C08.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /BB277577-A208-45F3-ADE2-14DC5EE26276.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /F8B03CDB-9E0C-49B0-8626-035C4DA9A413.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7883-TLr-TPs-M-S.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7883-TLr-TPs-S.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7889-TLr-TPs-M-S.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7889-TLr-TPs-S.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7901-TLr-TPs-M-S.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7901-TLr-TPs-S.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7909-TLr-TPs-S.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7921-TLr-TPs-S.jpg')} width='150' />
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7923-TLr-TPs-M-S.jpg')} width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
					<Col style={{}}>
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7912-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7912-TLr-TPs-M-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_20'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7926-TLr-TPs-M-S.jpg')} width='150' />
						</MediaBox>
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
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7966-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_22'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8071-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
						<MediaBox
							id='MediaBox_21'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8071-TLr-TPs-NB-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_23'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8082-TLr-TPs-C85-S.jpg')} width='150' />
						</MediaBox>
						<MediaBox
							id='MediaBox_24'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8093-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_49'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8087-TLr-TPs-M-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_50'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8087-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_51'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7942-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_57'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /fullsizeoutput_2f8c.jpeg')} width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
					<Col style={{}}>
						<MediaBox
							id='MediaBox_25'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7948-TLr-TPs-M-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_26'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7950-TLr-TPs-M-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_27'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8032-1-TLr-TPs--S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_28'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7960-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_29'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7963-TLr-TPs-M-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_30'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7923-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_31'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8030-TLr-TPs-M-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_32'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8030-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
					<Col>
						<MediaBox
							id='MediaBox_33'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8032-TLr-TPs-M-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_34'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8032-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_35'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8043-TLr-TPs-C85-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_36'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8043-TLr-TPs-NB-S.jpg')} width='150' />
						</MediaBox>
					</Col>

					<Col>
						<MediaBox
							id='MediaBox_37'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8049-TLr-TPs-C85-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_38'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8049-TLr-TPs-NB-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_39'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8059-TLr-TPs-C85-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_40'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8059-TLr-TPs-M-S.jpg')} width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
					<Col>
						<MediaBox
							id='MediaBox_41'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8059-TLr-TPs-NB-M-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_42'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8059-TLr-TPs-NB-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_43'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8066-TLr-TPs-C85-M-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_44'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7931-TLr-TPs-M-S.jpg')} width='150' />
						</MediaBox>
					</Col>

					<Col>
						<MediaBox
							id='MediaBox_45'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7931-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_46'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8075-TLr-TPs-C85-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_47'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8075-TLr-TPs-NB-C85-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_48'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_7938-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
					<Col>
						<MediaBox
							id='MediaBox_56'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8118-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
						<MediaBox
							id='MediaBox_55'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8118-TLr-TPs-NB-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_54'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8112-TLr-TPs-NB-M-S.jpg')} width='150' />
						</MediaBox>
						<MediaBox
							id='MediaBox_53'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8112-TLr-TPs-M-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_52'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src={require('../image/ Fred Treidel /FTR_8110-TLr-TPs-S.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col></Col>
					<Col></Col>
					<Col></Col>
					<Col></Col>
					<Col></Col>
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
