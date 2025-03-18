import { Instagram, Twitter, Facebook, Mail, YouTube } from '@mui/icons-material';
import navIcons from '../data/navIcons';



const HomeLarge = () => {

	return (
		<div className="flex justify-center w-[100vw] h-[100vh] px-2">
			<ProfileIconContainer />
			<div className="flex justify-center items-center w-[55%] h-[80%] gap-10 px-10 py-5">
				{navIcons.map((value) => (
					<div
						key={value.title}
						className="flex flex-col justify-center items-center h-[500px] w-[180px] border border-[#602136] py-4 rounded-lg cursor-pointer hover:scale-105 bg-[#602136]">
						<img className="w-24 h-24 mb-4" src={value.url} alt={value.name} />
						<p className="text-white text-sm font-medium ">{value.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

const ProfileIconContainer = () => {
	return (
		<div className="flex flex-row justify-center items-center h-[80%] w-[45%] max-w-[350px] px-5">
			<p className='px-5'>A <br /> R <br /> E<br /> X<br /> U<br /></p>
			<img src={'/public/profile.png'} className="h-48 w-48 border-red border rounded-[50%]" />
			<div className="flex flex-col items-center justify-center w-12 gap-4 p-2 rounded-lg">
				<Mail className="cursor-pointer transition-transform duration-200 hover:scale-125 text-white" />
				<Twitter className="cursor-pointer transition-transform duration-200 hover:scale-125 text-white" />
				<Facebook className="cursor-pointer transition-transform duration-200 hover:scale-125 text-white" />
				<Instagram className="cursor-pointer transition-transform duration-200 hover:scale-125 text-white" />
				<YouTube className="cursor-pointer transition-transform duration-200 hover:scale-125 text-white" />
			</div>
		</div>
	)
}

export default HomeLarge;
