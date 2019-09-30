import React from "react"
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import '../styles/about.css'

const About = () => {
  return (
		<>
			<Navbar />
			<Header componentName={'about'} text={'Get To Know Me'}/>
			<div className='about'>
				<div className='about-me-grid-col about-padding'>
					<div className='about-picture'>
						<div className='cartagena-picture'></div>
					</div>
					<div>
						<div className='about-details'>
							<div></div>
							<h1 className='body-header'>About me</h1>
							<h2 className='about-title right'>General</h2>
							<p className='about-content'>
								I grew up in Cambridge, MA.  I have also lived in Boulder, Colorado and Barranquilla, Colombia.  I love projects, playing games, making friends and generally having fun.  I am always looking to progress, learn new skills and continue growing to be a better person.  Most of all I love life and I want to make the most of it.
							</p>
						</div>
						<div className='about-details'>
							<h2 className='about-title right'>My personality</h2>
							<p className='about-content'>
								I am a social and outgoing person but also enjoy quiet time to myself.  I like a good conversation but I am also content all alone with my computer or a book.  I’m always looking for a good project to work on because I get the most satisfaction out of producing and being creative.  Simply put, I like to learn things and then use what I learn to make things.
							</p>
						</div>
					</div>
				</div>
				<div className='background-grey about-padding'>
					<h1 className='body-header padding-top '>Professional & personal philosophies</h1>
					<div className='about-grid-col-row'>
						<div className='about-grid-col-gap'>
							<div>
								<h2 className='about-title'>Work smarter... and harder</h2>
								<p className='about-philosophies-content'>
									I consider myself to be intelligent, but I also know that intelligence is useless without applying it.  In my professional life (as well as anything that I do), I am a hard worker and I always strive to give my 100% in everything that I do.  I hold to the proverb "any job worth doing is a job worth doing well".  If I am going to put my time and energy into something, I am going to see it through properly; otherwise I am just wasting my time and energy.  Therfore, I take pride in everything I do and I do everything to the best of my ability.
								</p>
							</div>
							<div>
								<h2 className='about-title'>Do what you love and love what you do</h2>
								<p className='about-philosophies-content'>
									Time is the most valuable thing that we have and we need to take advantage of it as much as possible to be happy.  To take advantage of our time, it is important to work doing something that you love to do, otherwise you are wasting your time doing things that don't contribute to your happiness.  Many people work to make money but don't have the time to enjoy it, this is counter-intuitive.  Enjoying what you do is the key to a &quot;successful&quot; lifestyle, not just making money (although money is nice to have too).
								</p>
							</div>
						</div>
						<div className='about-grid-col-gap'>
							<div>
								<h2 className='about-title'>Create and be creative</h2>
								<p className='about-philosophies-content'>
									Growing up, my father was a carpenter and an architect so we had a woodshop in the basement of our house.  I spent a lot of my childhood in the basement making things (including my own toys or boxes to store my toys).  Among other expriences, I believe that this largely shaped my desire to be creative and build things.  I get a lot of satisfaction out of planning a project, executing it and seeing the desired result in the end.  This has played a big part for me becoming a web developer.  I really enjoy the creative process of building web sites and web apps from the beginning to the end.  I read a quote recently that really got my attention: "Be a creator, not a consumer".  Every day people are consuming more information and entertainment online; I want to be a part of creating it, not only consuming it.
								</p>
							</div>
							<div>
								<h2 className='about-title'>Be a lifelong learner</h2>
								<p className='about-philosophies-content'>
									I love to learn and I know that learning is the best use of my time.  I believe that if I am not learning (and enjoying what I am learning), I am wasting my time.  While studying Applied Linguistics to become a teacher, I learned how to be a good student.  By nature I am interested in everything and that drives my desire to always learn more.  My curiousity has helped me to achieve higher in everything that I do professionally and personally.  The desire to learn is what drives me to get up in the morning and processing what I learn helps me sleep at night.  I firmly believe that if you're not learning, you're dying.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='about-interests'>
					<h1 className='body-header'>Personal Interests</h1>
					<div className='about-interests-grid-col'>
						<div>
							<div>
								<h2 className='about-title'>Travel</h2>
								<p className='about-content'>
									I love to travel because I love to see and experience new things.  The world has so much beauty and I want to see all of it.  Travelling also allows me to experience other cultures and ways of thinking.  I often learn new customs while travelling that I can adapt to my own lifestyle.  I believe that this helps me improve who I am as a person and always continue becoming a better person.
									<br />
									<br />
									Another aspect that drives me to travel is that I never know what I will see or experience next.  Travelling excites me because of the unknown aspect of going to a new place.  It&#39;s nice to see something that is beautiful, but to be surprised by it is even more delightful.
								</p>
								<h2 className='about-title'>Music</h2>
								<p className='about-content'>
									I love listening to music.  I am a music collector.  I have an extensive collection of music that I grew up with and music, music that fellow music addicts have told me about and music that I have acquired while travelling.  My love for music goes hand-in-hand with my love for travelling.  While living in Colombia for 4 years, I was fascinated by the abundance of music and rhythms that come from Colombia.  I became especially immersed in the local Champeta music, which is a Colombian/Afro-Caribbean music that is hard not to like.
									<br />
									<br />
									In addition to listening to and collecting music, I am a DJ and I play guitar.  Like the chicken and the egg, I&#39;m not sure which came first, being a DJ or a music collector.  Either way, the two obviously compliment each other.  My favorite music to DJ is Afro-Caribbean music (Reggae, Soca, Champeta, etc.).  The songs that I play on guitar are mostly by Red Hot Chili Peppers and Jimi Hendrix.
									<br />
									<br />
									While living in Barranquilla, Colombia, I was involved in the opening ceremony of the Barranquilla film festival (FICBAQ).  I was a member of a band playing live music for a silent movie called "Maria" by the Colombian director Enrique Grau.  I performed in the band doing scratch DJing and sound effects.  Below is a link to a video of the performance.
									<br />
									<a href='https://www.youtube.com/watch?v=Xb9LfKriE1k' target='_blank' rel='noopener noreferrer'>
										{`https://www.youtube.com/watch?v=Xb9LfKriE1k`}
									</a>
								</p>
								<h2 className='about-title'>Languages</h2>
								<p className='about-content'>
									I grew up speaking English and after finishing my undergraduate degree, I decided that I wanted to take some time to really learn Spanish.  I was determined to not just learn Spanish but master it.  After learning some Spanish, my interest in language let me to teach English and get a masters degree in Applied Linguistics at UMass Boston.  Once I completed my masters degree, I lived in Barranquilla, Colombia for four years teaching English and polishing my Spanish.  While living there, I learned Spanish and Coste&#241;ol (caribbean style Spanish).  Learning Spanish as well as I did gave me supreme confidence that I can learn anything as long as I put the time and effort forward.  I am now fluent in Spanish and I have studied Portuguese.  Most recently I have learned JavaScript which although not a human language, I still consider learning another language.  While learning JavaScript, I found that computer languages are more similar to human languages than I had thought.  All languages, human or computer, fascinate me.
								</p>
								<h2 className='about-title'>Photography</h2>
								<p className='about-content'>
									I like to take pictures.  I am definitely a hobby photography and I take pictures with my phone; however, I really do enjoy taking pictures to capture beautiful scenes and moments.  All pictures on this site are taken by me other than the pictures that have me in them.
								</p>
							</div>
						</div>
						<div className='about-picture'>
							<div className='dj-picture'></div>
							<div className='sunset-picture'></div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
  )
}

export default About
