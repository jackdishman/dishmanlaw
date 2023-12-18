import Image from "next/image";
import FacebookIcon from "./components/FacebookIcon";
import LinkedinIcon from "./components/LinkedinIcon";
import YelpIcon from "./components/YelpIcon";
import GoogleIcon from "./components/GoogleIcon";
import PhoneIcon from "./components/PhoneIcon";
import EmailIcon from "./components/EmailIcon";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-[#e4dac4] pt-20">
			<div className="flex flex-col items-center justify-center pb-10 relative h-64 w-full">
				<Image
					src="/lw.jpeg"
					alt="Lewis Wharf"
					objectFit="cover"
					fill
					objectPosition="center"
					className="opacity-25 absolute w-full h-screen top-0 left-0"
				/>
				<div className="z-10 flex flex-col items-center">
					<a
						href="https://maps.app.goo.gl/JNtkiWR3ZYKEwbVm9"
						target="_blank"
						className="text-center mb-5 font-semibold">
						<h5>224 Lewis Wharf</h5>
						<h5>Boston, Massachusetts 02110</h5>
					</a>
					<a href="tel:6177675252" className="underline mb-5">
						617-767-5252
					</a>
					<a
						href="mailto:david@dishmanlaw.com"
						target="_blank"
						className="italic">
						david@dishmanlaw.com
					</a>
				</div>
			</div>
			<section className="w-full flex flex-col sm:flex-row bg-primary text-white items-center justify-around p-10">
				<h3 className="text-3xl font-bold">Press Release: </h3>
				<p className="text-lg italic font-semibold m-5">
					Tips belong to you, not anyone in management.
				</p>
				<a
					href="/press-release.pdf"
					className="hover:underline rounded-xl bg-white text-primary font-bold underline-offset-4 shadow-xl px-10 py-4"
					target="_blank">
					Read more
				</a>
			</section>
			<section className="p-10 flex w-full justify-center">
				<article className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
					<h2 className="text-3xl font-bold text-center mb-5">
						Practice Areas
					</h2>
					<p className="text-lg">
						David has been a litigation attorney in Massachusetts for over 35
						years. His area of practice focuses on serious accident injuries and
						employment law. David’s concentration in employment law has been
						class action cases involving failure to pay minimum wage, shared
						tips, and misclassification of workers as independent contractors.
						He has successfully handled numerous individual cases for sexual
						harassment, discrimination, and retaliation in the workplace. David
						has been involved in numerous class actions against strip club
						owners in Massachusetts for violation of the Wage Acts, illegal tip
						sharing, and requiring dancers to pay “house fees” to work. David
						was part of what is believed to be the the largest class action
						lawsuit against an adult entertainment venue in Massachusetts. For
						his work in the suit, David Dishman was featured in the Boston
						Globe. David has also been a strong advocate on behalf of homeowners
						who were force-placed into expensive, and often unnecessary, hazard
						insurance by various lenders including JPMorgan Chase, Wells Fargo,
						Bank of America, and Green Tree / Ditech in cases pending before the
						United States District Court in the Southern District of Florida and
						the Eleventh Circuit Court of Appeals.
					</p>
				</article>
			</section>
			<section className="flex justify-center px-10">
				<article className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
					<ServiceItem
						title="Serious Accidents"
						desc="David has over 35 years of experience in representing individuals who suffered serious injuries as a result of auto accidents, motorcycle accidents, code violations, and dangerous / defective products."
					/>
					<ServiceItem
						title="Tips + Service Charges"
						desc="Employers cannot require you to share your tips or service charges with certain employees, including managerial staff. If you've been required or encouraged to share your tips with management or non-service employees you have the right to seek compensation."
					/>
					<ServiceItem
						title="Commissions"
						desc="Commission plans are often overly complicated and confusing. If you haven't received all of your earned commissions contact us to review your plan."
					/>
					<ServiceItem
						title="Sexual Harassment"
						desc="Sexual advances, requests for sexual favors, and unwanted physical conduct are all examples of sexual harassment in the workplace and are illegal under Federal and state law. If you have been the victim of any of the above, you have the right to seek compensation."
					/>
					<ServiceItem
						title="Retaliation"
						desc="You have the right to question your employer about any work place practice you believe violate the law. If you have been punished for questioning the legality of a workplace practice your employer may be in violation of Massachusetts law, and entitle you to compensation."
					/>
					<ServiceItem
						title="Failure to pay minumum wage & overtime"
						desc="Your employer may be violating Massachusetts law if you are not getting paid minimum wage, which is currently $12 per hour for non-service employees, and $3.75 per hour for service employees. If you are a non-tipped hourly employee, your employer is required to pay you $18 per hour for all hours worked over 40 hours per week. Your employer must also pay for all of the hours that you've spent working, such as attending mandatory meetings outside of work, doing pre-shift and post-shift work. If you have been subject to any of these practices, you may be eligible to receive 3 times the amount you are owed, plus attorney’s fees."
					/>
				</article>
			</section>
			<section className="bg-white w-full py-10">
				<h2 className="text-3xl font-bold text-center mb-5">In the Press</h2>
				<article className="w-full flex justify-center">
					<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<a
							href="https://www.bostonglobe.com/business/2012/11/30/suit-says-strip-club-flouts-wage-law-cheats-dancers/64M2idsZ6U26gXYAmEs06M/story.html"
							target="_blank"
							className="hover:shadow-xl transition hover:duration-300 ease-in-out rounded-xl w-64 h-64 flex items-center hover:opacity-100 opacity-50">
							<Image
								src="/globe.png"
								width={450}
								height={450}
								alt="Boston Globe"
							/>
						</a>
						<a
							href="https://www.businesswire.com/news/home/20160128006125/en/Dishman-Law-Offices-Urge-Victims-Predatory-Force-placed"
							target="_blank"
							className="hover:shadow-xl transition hover:duration-300 ease-in-out rounded-xl w-64 h-64 flex items-center hover:opacity-100 opacity-50">
							<Image
								src="/bw.png"
								width={450}
								height={450}
								alt="Boston Globe"
							/>
						</a>
						<a
							href="https://www.salemnews.com/news/local_news/dancers-sue-strip-club-over-fee-tip-sharing/article_237b9861-6907-5f9d-a8fe-63791707a2ec.html?psid=5Dctm"
							target="_blank"
							className="hover:shadow-xl transition hover:duration-300 ease-in-out rounded-xl w-64 h-64 flex items-center hover:opacity-100 opacity-50">
							<Image
								src="/salem.png"
								width={450}
								height={450}
								alt="Salem News"
							/>
						</a>
						<a
							href="https://patch.com/massachusetts/peabody/two-former-dancers-file-lawsuits-against-peabody-strip-club"
							target="_blank"
							className="hover:shadow-xl transition hover:duration-300 ease-in-out rounded-xl w-64 h-64 flex items-center hover:opacity-100 opacity-50">
							<Image
								src="/patch.jpeg"
								width={450}
								height={450}
								alt="Boston Globe"
							/>
						</a>
					</div>
				</article>
			</section>
			<section>
				<article className="flex flex-col sm:flex-row p-10 h-full items-center">
					<ul className="pr-10 flex-shrink-0 mb-5">
						<h2 className="text-3xl font-bold mb-5">About David</h2>
						<li className="font-bold">B.A. University of New Hampshire 1979</li>
						<li className="font-bold">J.D. Vermont Law School 1983</li>
					</ul>
					<p>
						David is a member of the Massachusetts bar, and is admitted to
						practice in the United States District Court in Massachusetts, and
						the Eleventh Circuit Court of Appeals. A large portion of David’s
						cases are referrals from other attorneys.
					</p>
				</article>
				<article></article>
				<div className="z-10 flex justify-center gap-3 sm:gap-10 items-center mb-10">
					<a href="tel:6177675252">
						<PhoneIcon />
					</a>
					<a href="mailto:david@dishmanlaw.com" target="_blank">
						<EmailIcon />
					</a>

					<a href="https://maps.app.goo.gl/JNtkiWR3ZYKEwbVm9" target="_blank">
						<GoogleIcon />
					</a>
					<a
						href="https://www.facebook.com/profile.php?id=100069038361251"
						target="_blank"
						className="w-12 h-12">
						<FacebookIcon />
					</a>
					<a
						href="https://www.linkedin.com/company/law-office-of-david-dishman/about/"
						target="_blank"
						className="w-12 h-12">
						<LinkedinIcon />
					</a>
					<a
						href="https://www.yelp.com/biz/dishman-law-boston"
						target="_blank"
						className="w-12 h-12">
						<YelpIcon />
					</a>
				</div>
			</section>
		</main>
	);
}

interface IServiceProps {
	title: string;
	desc: string;
}

function ServiceItem(props: IServiceProps) {
	return (
		<div className="p-5">
			<div className="flex items-center">
				<SheildIcon />
				<h6 className="text-primary text-2xl font-semibold ml-2">
					{props.title}
				</h6>
			</div>
			<p className="mt-2 pt-2 border-primary border-t-2">{props.desc}</p>
		</div>
	);
}

const SheildIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="w-6 h-6 text-primary flex-shrink-0">
		<path
			fillRule="evenodd"
			d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
			clipRule="evenodd"
		/>
	</svg>
);
