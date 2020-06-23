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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1Akn7fgZN-Og1_lOp1snZb2h-LREO6KPH' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1TJT4hWb8SPdYyUsPG1TyqHsZAaDUJjB_' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1TluF8Vi0MSpT42hqSmDAT7aFVZTvl9iz' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=14E-7wEY3O4DbDiMxn8926jXzdKtF-eOE' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1Ksb7IWBPSSwxprf39qkzA4PnV1E7sCvo' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1uiBKsy5JeuIQST93gP97bTP7DDgpn_LX' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1PpCwv6CmMHfT4vHQ1NCEo81b813ldjg1' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1sm6S3L14iPHx4vnmG4ZLSXap4YkorGrT' width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=18lb2s1nXxjFTyU1ZF-vnlsBDChTmWsTs' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1vJmgney6h28KZdZjp876AeZJAtUFnqRW' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1hYNv_jJA4r0vm7MXUbx44o9IvEkaw2iH' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1Zo0Q_aKouDtYXSnU54hDJ7CmrGE12QZH' width='150' />
						</MediaBox>
						<MediaBox
							id='MediaBox_12bis'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1rvYqtcpjrr7CGGVpEsaA33ru_Er5v32T' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=18SMVdmtQOtVhQ4PSunH8ZLk2PIWRofNo' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1ThP6vdcQPx51c7TOXgV43zqZKXeZDXQu' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=18iNOPA4Kd8SahUr80CL3_nq_bl-vTt_I' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1cz_BR8_5YQ67ZDs93_h1OIhMyuq5-6Ff' width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=10CzQUg1wVi8zwKzSXoYAQmuF87-8hJBE' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1d4gM982lxzxKDLEMM7lIZZz8SaRtYJm1' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1joX0yJdrsaIuITXhyTVZqcPYN73JUuDR' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1O_n8mJIk7Ji5M29gKdbw2CKCwzYXL30r' width='150' />
						</MediaBox>
					</Col>
					<Col>
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=13rl8Caj1Jk0XZZjwnOGBCJE0MR1CzJ2K' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=113Yu4BwyWf4mCJEN62dMl70rdsLDzzhx' width='150' />
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1iPGGRndPuEPWkUUUvnjMDsUqZWX13PwC' width='150' />
						</MediaBox>
					</Col>
					<Col>
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
							<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1re1ZHPNl7kw4vT4UNypSagVXSZYAEzMA' width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
					<Col>
						<Col>
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
								<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1gpczA_kl11zHei-CF9q4jaPmtbos7nYG' width='150' />
							</MediaBox>
						</Col>
					</Col>
					<Col>
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
								<img alt='Zazou by Fred Treidel' src='https://drive.google.com/uc?export=view&id=1E8vKQPeui5dB6FC1DHdar67XlPhu04E4' width='150' />
							</MediaBox>
						</Col>
					</Col>
					<Col>
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
								<img
									alt='Zazou by Fred Treidel'
									src='https://drive.google.com/uc?export=view&id=1NETOqd_1h5vQ7oX0e4d1bqzdR9fNgMq9'
									width='150'
								/>
							</MediaBox>
						</Col>
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
							<img alt='Zazou by Fred Treidel' src='!#' width='150' />
						</MediaBox>
					</Col>
					<Col>
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
						</Col>
					</Col>
					<Col>
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
						</Col>
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
