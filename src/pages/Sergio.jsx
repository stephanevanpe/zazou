import React from 'react';

import { Icon, Button, Col, Row, MediaBox } from 'react-materialize';
import Footer from '../components/footer';
import Background from '../image/images-et-photos-gratuites-libres-de-droits-téléchargement-gratuits120.jpg';
import  ScrollUpButton from 'react-scroll-up-button';
class Sergio extends React.Component {
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
						- Sergio Photography -
					</h4>
					<a href='tel:+41799613720'>
						<Button
							node='button'
							floating
							tooltip='+41 79 961 37 20'
							tooltipOptions={{
								position: 'left',
							}}
							waves='light'
							className='pink lighten-5'
						>
							<Icon left>
								<span className='red-text'>call</span>
							</Icon>
						</Button>
					</a>{' '}
					<a href='https://www.facebook.com/sinatraserge/' target='_blank' rel='noopener noreferrer'>
						<Button
							node='button'
							floating
							tooltip='https://www.facebook.com/sinatraserge/'
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/0b9f7392-e9f0-4c90-892d-316cc1ad617a.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/0d2cac47-d2e8-4e5a-b288-24a077b008c3.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/5a16d7e2-3a33-4442-8bdb-a71b24259b2c.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/1af07a84-7fc2-462e-a00e-f9195d4ce80c.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/1bd663c9-8907-48a1-843e-f8d7ccb7e489.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/1e2c7e61-8b9c-4985-80f8-58ab2461d7ed.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/3fe36ea5-d4d5-4344-aba2-2933b22253a0.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/4ed47f86-7012-4ec5-97c0-2d16ee2f535c.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/1a572277-6a5a-4c5c-bead-c3936177d585.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/5a9253ee-71df-4826-a14f-c7dca363a241.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/52c9ca5b-a121-4aba-811b-efeae997f942.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/89f1b73a-ab80-4c6a-8236-9fdc9cc6d544.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/5e101d03-22f8-4083-8a3e-aa514e15f9b5.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/5e98007f-735b-4faf-afbe-9a3123a65968.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/99ef8f4d-f3b0-49e8-8327-d3d9c914e176.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/2333f0be-31b5-40df-9a45-f7f3ad57e3bb.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/8269a6f3-14a0-4958-ada1-4386d0a7387e.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/9e3fbafc-3ce1-4064-b3c2-9257f42d1473.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/010bc4f9-9e37-42e4-83aa-f99e3d76ffd5.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/11b37e4a-4136-4a07-b8d8-52dde6c691a1.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/12efa2d1-9ace-421a-8ea2-0b469b45757e.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/15f125f3-4a3a-4676-814d-9e57b70d7da7.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/19eaf5c3-4882-4ba9-a800-1166c3996d5e.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/34b370d3-4375-469b-b8c5-794d2ec786b2.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/38b37d68-1094-40b9-a338-c03a05b6c08c.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/5c4b9f96-a5bc-49b6-808c-09eab1c725a2.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/88b7563e-7656-4d30-a44c-1e9c497c6118.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/5d312e53-2405-4302-bb2f-0783974f5459.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/92c9234d-5f6c-4a6f-a69f-b6e0a525fd22.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/5eeb1085-ca31-4e53-ac59-c64e4e431796.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/451d7c0e-1180-4f9a-8635-2d590c3ad580.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/462eeed1-7942-45c8-bd4b-66b50e0f3ac6.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/479df259-b8ed-4368-b595-e7b276acd528.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/7a5cd476-cc82-48c8-a150-9f2051ab4ee5.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/6071c0bf-2e33-47fd-88f3-a3e1b5044035.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/8b01c4f4-2598-409c-96fa-7d8975f65f5d.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/9186ce2b-47b3-44da-aa05-8949ef065e03.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/38574c54-9455-4373-a43c-95116bd82b50.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/841634a6-e2d2-4b15-95a0-75bf454b7149.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/267918d4-e871-4da6-9bd3-ea84fe34f5f3.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/61107a68-13ec-4ebd-b0e6-36c4a14c3344.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/a57a3861-67a8-4b13-bcad-500efd246db3.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/a98d9010-edf8-45ca-85ba-a7b0fa9b3e03.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/f8bf8018-c285-40e7-af97-a5c411d9798d.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/c456647f-e9da-4b52-bdfa-2d31de4d383c.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/b01e3223-cf33-4022-8c2d-32c304f03c2b.jpg')} width='150' />
						</MediaBox>
						<MediaBox
							id='MediaBox_67'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/a757d313-ebcb-44e4-9a2d-bee971c8d8c0.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/ae0a4a37-8895-4d7f-9b91-a2dacd405d49.jpg')} width='150' />
						</MediaBox>
						<MediaBox
							id='MediaBox_68'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/f1171080-5e38-45a9-972a-9becb11b8e48.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/ae3260dd-756c-4e4e-9384-3343d8d03948.jpg')} width='150' />
						</MediaBox>
						<MediaBox
							id='MediaBox_69'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/fba84c93-380d-445b-9650-54780c46ad6a.jpg')} width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/a108909f-df8c-4e11-bdc1-4cd677fe0fc5.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/b025c69a-cbcf-4ffc-8c7e-ff55fb6724fd.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/b61a90f7-f495-4a29-9f98-872e598e94ee.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/d376111d-e6dc-4637-81b2-09a5512ce378.jpg')} width='150' />
						</MediaBox>
					</Col>

					<Col>
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/e1cada35-f1d9-41fe-8ff3-45ad7e2d1afc.jpg')} width='150' />
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/a3926d6d-c964-4db4-b89f-70a76729a650.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/c1ae7d8b-a9f2-4476-957c-98e8bfa96b9f.jpg')} width='150' />
						</MediaBox>
					</Col>
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/c7427ebc-3840-4db5-a06e-da9f071db260.jpg')} width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
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
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/c13921e3-d7c1-4c81-a1b5-38771c04d0d2.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_58'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/bc5a269c-3d63-48db-932f-872f200a46c8.jpg')} width='150' />
						</MediaBox>
						<MediaBox
							id='MediaBox_70'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/fd28b47b-8491-4c03-bf54-0c20a389bc01.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_59'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/cc9466a5-15c7-4ce5-a19c-dfab04f672dc.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_60'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/d676edfd-8590-4b86-89d7-6c77e025fb9c.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_61'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/b73bc2ff-221d-444b-8d2a-2b1a90041bad.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_62'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/bbaafe4e-d292-46df-bb96-2c4dc5ad6a46.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_63'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/e27bdb47-93b5-4821-944b-4867e20c4239.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_64'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/e69ded29-14a5-4927-b9c7-3cfa68bf0aa8.jpg')} width='150' />
						</MediaBox>
					</Col>
				</Row>
				<Row style={{ align: 'center', marginLeft: '35px' }}>
					<Col>
						<MediaBox
							id='MediaBox_65'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/e860c0aa-7671-447c-bf74-d94f9da7ac21.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col>
						<MediaBox
							id='MediaBox_66'
							options={{
								inDuration: 275,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 200,
							}}
						>
							<img alt='Zazou by Serge Sinatra' src={require('../image/Sergio/eee80cba-5822-4aee-a19a-fb8f9d794c3d.jpg')} width='150' />
						</MediaBox>
					</Col>
					<Col></Col>
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

export default Sergio;
