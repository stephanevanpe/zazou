import React, {Component} from 'react';
import { Icon, Row, Col, Card } from 'react-materialize';
import Footer from '../components/footer';
import '../App.css';
import Background from '../image/images-et-photos-gratuites-libres-de-droits-téléchargement-gratuits120.jpg';




class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { Over:false };
	}

	render() {
		function changeBackground(e) {
			e.target.style.color = 'red';
		}
		function initialBackground(e) {
			e.target.style.color = 'black';
		}
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
					<h1 className='pink-text   text-lighten-5' style={{ marginTop: '0px', fontFamily: 'Priscilla', fontSize: '85px' }}>
						<b>Zazou</b>
					</h1>
					<h4 className='pink-text   text-lighten-5'>Modèle photo amateur</h4>
					<br />
				</Row>
				<Row>
					<Col l={3} s={12}></Col>
					<Col l={3} s={12}>
						<Card
							closeIcon={<Icon>close</Icon>}
							revealIcon={<Icon>more_vert</Icon>}
							style={{
								backgroundColor: '#fce4ec',
								borderRadius: '200px 200px 200px 200px',
							}}
						>
							{' '}
							<a href='/photographe/AlexeyMelnikov' style={{ color: 'black' }} onMouseOver={changeBackground} onMouseLeave={initialBackground}>
								<b>Alexey Melnikov</b>
							</a>
						</Card>
					</Col>
					<Col l={3} s={12}>
						<Card
							closeIcon={<Icon>close</Icon>}
							revealIcon={<Icon>more_vert</Icon>}
							style={{
								backgroundColor: '#fce4ec',
								borderRadius: '200px 200px 200px 200px',
							}}
						>
							<a href='/photographe/FabianGuignard' style={{ color: 'black' }} onMouseOver={changeBackground} onMouseLeave={initialBackground}>
								<b>Fabian Guignard</b>
							</a>
						</Card>
					</Col>

					<Col l={3} s={12}></Col>
				</Row>
				
				<Row>
					<Col l={3} s={12}></Col>
					<Col l={3} s={12}>
						<Card
							closeIcon={<Icon>close</Icon>}
							revealIcon={<Icon>more_vert</Icon>}
							style={{
								backgroundColor: '#fce4ec',
								borderRadius: '200px 200px 200px 200px',
							}}
						>
							<a href='/photographe/FredTreidel' style={{ color: 'black' }} onMouseOver={changeBackground} onMouseLeave={initialBackground}>
								<b>Fred Treidel</b>
							</a>
						</Card>
					</Col>
					<Col l={3} s={12}>
						<Card
							closeIcon={<Icon>close</Icon>}
							revealIcon={<Icon>more_vert</Icon>}
							style={{
								backgroundColor: '#fce4ec',
								borderRadius: '200px 200px 200px 200px',
							}}
						>
							{' '}
							<a href='/photographe/Sergio-Photography' style={{ color: 'black' }} onMouseOver={changeBackground} onMouseLeave={initialBackground}>
								<b>Sergio Photography</b>
							</a>
						</Card>
					</Col>
					<Col l={3} s={12}></Col>
				</Row>
				<Row>
					<Col l={3} s={12}></Col>
					<Col l={3} s={12}>
						<Card
							closeIcon={<Icon>close</Icon>}
							revealIcon={<Icon>more_vert</Icon>}
							style={{
								backgroundColor: '#fce4ec',
								borderRadius: '200px 200px 200px 200px',
							}}
						>
							{' '}
							<a href='/photographe/StephaneUrquizar' style={{ color: 'black' }} onMouseOver={changeBackground} onMouseLeave={initialBackground}>
								<b>Stéphane Urquizar</b>
							</a>
						</Card>
					</Col>
					<Col l={3} s={12}></Col>
					<Col l={3} s={12}></Col>
				</Row>

				<Row>
					<Col l={1} s={12}></Col>
					<Col l={10} s={12}>
						<Card
							style={{
								backgroundColor: '#fce4ec',
							}}
						>
							<a href='/contact' style={{ color: 'black' }} onMouseOver={changeBackground} onMouseLeave={initialBackground}>
								<b>Contact</b>
							</a>
						</Card>
					</Col>

					<Col l={1} s={12}></Col>
				</Row>
				<br />
				<Footer />
			</div>
		);
	}
}

export default Home;
