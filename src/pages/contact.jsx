import React, { Component } from 'react';
import { Row, Col, Card, Icon, Button } from 'react-materialize';

import Footer from '../components/footer';

import Background from '../image/images-et-photos-gratuites-libres-de-droits-téléchargement-gratuits120.jpg';


class Contact extends Component {
	constructor(props) {
		super(props);
		this.state= props.formFields;
	}


	render() {

		return (
			<div
				style={{
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
				</Row>
				<Row></Row>
				<Row></Row>
				<Row style={{ marginbottom: '0px' }}>
					<Col s={1}></Col>
					<Col s={10}>
						<Col s={12}>
							<Card
								className='pink lighten-5'
								closeIcon={<Icon>close</Icon>}
								revealIcon={<Icon>more_vert</Icon>}
								textClassName='red-text'
								title='Contact'
								margin-bottom='0px'
								style={{ borderRadius: '100px 100px 100px 100px' }}
							>
								<br />
								<div className='row'>
									<div className='col s12'>
										<a href='mailto:elsa.meli@icloud.com'>
											<Button
												node='button'
												floating
												tooltip='elsa.meli@icloud.com'
												tooltipOptions={{
													position: 'bottom',
												}}
												waves='light'
												className='red'
											>
												<Icon left>
													<span className='pink-text text-lighten-5'>email</span>
												</Icon>
											</Button>{' '}
										</a>
									</div>
								</div>
								<hr />
								<br />
								<form name='contact' method='post'>
									<input type='hidden' name='form-name' value='contact' />
									<p>
										<Icon>account_circle</Icon>
										<label>
											<input type='text' name='name' placeholder='Nom' />
										</label>
									</p>
									<p>
										<Icon>email</Icon>
										<label>
											<input type='email' name='email' placeholder='Email' />
										</label>
									</p>
									<p>
										<Icon>mode_edit</Icon>
										<label>
											<textarea name='message' placeholder='Message'></textarea>
										</label>
									</p>
									<p>
										<button type='submit' style={{ color: 'white', backgroundColor: 'red', borderRadius: '30px' }}>
											Envoyer
										</button>
									</p>
								</form>
							</Card>
						</Col>
					</Col>
					<Col s={1}></Col>
				</Row>

				<Footer />
			</div>
		);
	}
}


export default Contact;
