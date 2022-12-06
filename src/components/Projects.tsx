import LineGradient from './LineGradient';
import { motion } from 'framer-motion';
import Project from './Project';
import project1 from '../assets/project-1.jpeg';
import project2 from '../assets/project-2.jpeg';
import project3 from '../assets/project-3.jpeg';
import project4 from '../assets/project-4.jpeg';
import project5 from '../assets/project-5.jpeg';
import project6 from '../assets/project-6.jpeg';
import project7 from '../assets/project-7.jpeg';

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
	},
};

const Projects = () => {
	return (
		<section id='projects' className='pt-48 pb-48'>
			{/* Heading */}
			<motion.div
				className='md:w-2/4 mx-auto text-center'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }}
			>
				<div>
					<p className='font-playfair font-semibold text-4xl uppercase'>
						<span className='text-red'>pro</span>jects
					</p>
					<div className='flex justify-center mt-5'>
						<LineGradient width='w-1/3' />
					</div>
				</div>
				<p className='mt-10 mb-10'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sunt eum eligendi earum minima nemo, voluptates eveniet sequi id molestiae.
				</p>
			</motion.div>

			{/* Projects */}
			<div className='flex justify-center'>
				<motion.div
					className='sm:grid sm:grid-cols-3'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					variants={container}
				>
					{/* Row 1*/}
					<div className='uppercase flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
						beautiful user interfaces
					</div>
					<Project title='Project 1' img={project1} />
					<Project title='Project 2' img={project2} />

					{/* Row 2*/}
					<Project title='Project 3' img={project3} />
					<Project title='Project 4' img={project4} />
					<Project title='Project 5' img={project5} />

					{/* Row 3*/}
					<Project title='Project 6' img={project6} />
					<Project title='Project 7' img={project7} />
					<div className='uppercase flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
						smooth user experience
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
