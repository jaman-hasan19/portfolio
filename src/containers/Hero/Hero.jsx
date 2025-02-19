import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { skillsIcons } from "./data";
import "./Hero.scss";

function Hero() {
	return (
		<>
			<section id='home' className='hero'>
				<div className='container'>
					<div className='content'>
						<div className='hero-main'>
							<div className='hero-text'>
								<h1>Frontend Software Developer 💻</h1>
								<p>
								  Hey, I'm Parvez. I'm a Frontend Software Developer, from Sylhet, Bangladesh 🗺
								</p>
								<span>
									<a
										aria-label='linkedin'
										rel='noreferrer'
										target='_blank'
										href='https://www.linkedin.com/in/mhparvezdev/'>
										<AiOutlineLinkedin
											width={32}
											height={32}
										/>
									</a>
									<a
										aria-label='github'
										rel='noreferrer'
										target='_blank'
										href='https://github.com/mh-parvez'>
										<AiOutlineGithub
											width={32}
											height={32}
										/>
									</a>
								</span>
							</div>

							<div className='hero-img'></div>
						</div>

						{/*  */}
						<div className='skills'>
							<p>Tech Stack</p>
							<div className='logos'>
								<ul>
									{skillsIcons.map((icon) => (
										<li key={icon.id}>
											<img
												src={icon.img}
												alt='skill-icon'
											/>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
