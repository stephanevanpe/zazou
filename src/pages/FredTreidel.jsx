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
					<h4 className='pink-text   text-lighten-5' style={{ marginTop: '0px', fontFamily: 'Chalkduster, fantasy', fontSize: '85px' }}>
						Fred Treidel
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
					<Col></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
					<Col style={{}}></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
					<Col></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
					<Col></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
					<Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
					<Col></Col>
					<Col></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
					<Col style={{}}></Col>
					<Col></Col>
					<Col></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
					<Col></Col>
					<Col></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
					<Col></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
					<Col></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
					<Col></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
					<Col></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
					<Col></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>

					<Col></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
					<Col></Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
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
