// src/components/Carriers.jsx
import React, { useState } from 'react';
import truck1 from '../assets/truck1.jpg';

const positions = [
	{
		id: 'company-driver',
		title: 'Company Driver',
		subtitle: 'CANADA/US LONG HAUL',
		description:
			'Join our fleet of professional drivers operating state-of-the-art equipment across Canada and the United States. We offer stable employment with excellent benefits and competitive compensation.',
		requirements: [
			'Minimum 2 years of Class 1/AZ driving experience',
			'Minimum 1 year of Commercial Flat Deck/Open Deck experience preferred',
			'Minimum 1 year of Load Securement experience preferred',
		],
		offer: [
			'Competitive pay',
			'Full benefit package effective immediately after orientation',
			'Loaded & Empty miles paid equally',
			'Frequent home time',
			'Dedicated fleet manager',
			'Monthly mileage incentive bonus',
			'Referral bonus program',
			'Paid orientation and training',
			'Paid FAST/TWIC cards',
		],
		lookingFor: [
			'2 years over‑the‑road experience',
			'Clean abstract',
			'Ability to cross the border',
			'Positive attitude',
			'FAST approved or eligible considered an asset',
			'Flatbed Experience',
		],
		fields: [
			{ name: 'firstName', label: 'First Name', type: 'text', required: true },
			{ name: 'lastName', label: 'Last Name', type: 'text', required: true },
			{ name: 'postalCode', label: 'Postal Code', type: 'text', required: true },
			{ name: 'email', label: 'Email', type: 'email', required: true },
			{ name: 'homePhone', label: 'Home Phone', type: 'tel' },
			{ name: 'cellPhone', label: 'Cell Phone', type: 'tel', required: true },
			{
				name: 'validLicense',
				label: 'Do you have a valid Class 1/AZ Licence?',
				type: 'radio',
				options: ['Yes', 'No'],
				required: true,
			},
			{
				name: 'preventableAccidents',
				label: 'Number of Preventable Accidents last 3 years?',
				type: 'select',
				options: ['0', '1', '2', '3+'],
				required: true,
			},
			{
				name: 'movingViolations',
				label: 'Number of Moving Violations last 3 years?',
				type: 'select',
				options: ['0', '1', '2', '3+'],
				required: true,
			},
			{
				name: 'hasTWIC',
				label: 'Do you have a TWIC card?',
				type: 'radio',
				options: ['Yes', 'No'],
				required: true,
			},
			{
				name: 'hasFastCard',
				label: 'Do you have a FAST card?',
				type: 'radio',
				options: ['Yes', 'No'],
				required: true,
			},
			{
				name: 'convictedDWI',
				label:
					'Have you ever been convicted of driving while intoxicated (DWI) or driving under the influence (DUI)?',
				type: 'radio',
				options: ['Yes', 'No'],
				required: true,
			},
			{
				name: 'testedPositive',
				label:
					'Have you ever tested positive for Drug/Alcohol in the last 5 years?',
				type: 'radio',
				options: ['Yes', 'No'],
				required: true,
			},
			{
				name: 'canCrossBorder',
				label: 'Are you able to cross the Canada/US border?',
				type: 'radio',
				options: ['Yes', 'No'],
				required: true,
			},
			{
				name: 'heardAbout',
				label: 'Where did you hear about Searcy Trucking?',
				type: 'text',
			},
			{
				name: 'equipmentOperated',
				label: 'What types of equipment did you operate?',
				type: 'text',
			},
		],
	},
	{
		id: 'owner-operator',
		title: 'Owner Operator',
		subtitle: 'CANADA/US LONG HAUL',
		description:
			'Partner with us and maintain your independence while benefiting from our extensive network, competitive rates, and comprehensive support services.',
		requirements: [
			'Minimum 2 years of Class 1/AZ driving experience',
			'Minimum 1 year of Commercial Flat Deck/Open Deck experience preferred',
			'Minimum 1 year of Load Securement experience preferred',
		],
		offer: [
			'Competitive contract',
			'Full benefit package effective immediately after orientation',
			'Fuel Subsidy Program (calculated monthly, currently at .80¢)',
			'Loaded & Empty miles paid equally',
			'Frequent home time',
			'Dedicated fleet manager',
			'Referral bonus program',
			'Paid orientation and training',
			'Paid FAST/TWIC cards',
			'Discounted tire rates',
		],
		lookingFor: [
			'2 years over‑the‑road experience',
			'Clean abstract',
			'Ability to cross the border',
			'Positive attitude',
			'FAST approved or eligible considered an asset',
			'Flatbed/Stepdeck experience',
			'Well maintained, ELD compatible tractor',
		],
		fields: [
			{ name: 'firstName', label: 'First Name', type: 'text', required: true },
			{ name: 'lastName', label: 'Last Name', type: 'text', required: true },
			{ name: 'postalCode', label: 'Postal Code', type: 'text', required: true },
			{ name: 'email', label: 'Email', type: 'email', required: true },
			{ name: 'homePhone', label: 'Home Phone', type: 'tel' },
			{ name: 'cellPhone', label: 'Cell Phone', type: 'tel', required: true },
			{
				name: 'validLicense',
				label: 'Do you have a valid Class 1/AZ Licence?',
				type: 'radio',
				options: ['Yes', 'No'],
				required: true,
			},
			{
				name: 'canCrossBorder',
				label: 'Are you able to cross the Canada/US border?',
				type: 'radio',
				options: ['Yes', 'No'],
				required: true,
			},
			{
				name: 'yearsInTransport',
				label: 'How many years in transportation?',
				type: 'number',
			},
			{
				name: 'heardAbout',
				label: 'Where did you hear about Searcy Trucking?',
				type: 'text',
			},
			{
				name: 'vehiclesOwned',
				label: 'How many vehicles do you own?',
				type: 'number',
			},
			{
				name: 'governedAt105',
				label: 'Are your vehicle(s) governed at 105?',
				type: 'radio',
				options: ['Yes', 'No'],
			},
			{
				name: 'emissionsDeleted',
				label: 'Are the emissions deleted for your vehicle(s)?',
				type: 'radio',
				options: ['Yes', 'No'],
			},
			{
				name: 'eLogCompatible',
				label: 'Are your vehicle(s) eLog compatible?',
				type: 'radio',
				options: ['Yes', 'No'],
			},
			{
				name: 'wheelbase',
				label: 'What is the wheelbase(s)?',
				type: 'text',
			},
			{
				name: 'tareWeight',
				label: 'What is the Tare Weight(s)?',
				type: 'text',
			},
			{
				name: 'equipmentOperated',
				label: 'What types of equipment did you operate?',
				type: 'text',
			},
		],
	},
];

const benefits = [
	{ icon: '💰', title: 'Competitive Pay', description: 'Top industry rates with performance bonuses and fuel surcharge programs.' },
	{ icon: '🏥', title: 'Health Benefits', description: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
	{ icon: '🚛', title: 'Modern Equipment', description: 'Well-maintained, late-model trucks with the latest safety technology.' },
	{ icon: '🏠', title: 'Home Time', description: 'Flexible scheduling options to ensure proper work-life balance.' },
	{ icon: '📞', title: '24/7 Support', description: 'Round-the-clock dispatch and roadside assistance when you need it.' },
	{ icon: '🎓', title: 'Training Programs', description: 'Ongoing professional development and safety training opportunities.' },
];

const opportunities = [
	{ title: 'Career Advancement', description: 'Move up from driver to trainer, dispatcher, or management positions with our internal promotion program.' },
	{ title: 'Specialized Freight', description: 'Opportunities to haul specialized loads including refrigerated, flatbed, and oversized cargo.' },
	{ title: 'Regional Routes', description: 'Choose from dedicated lanes, regional routes, or long-haul options to fit your lifestyle.' },
	{ title: 'Owner-Operator Support', description: 'Transition from company driver to owner-operator with our lease-purchase program.' },
	{ title: 'Safety Recognition', description: 'Earn bonuses and recognition through our driver safety and performance awards program.' },
	{ title: 'Technology Integration', description: 'Work with cutting-edge logistics technology and electronic logging systems.' },
];

const Carriers = () => {
	const formRef = React.useRef(null);
	const [selected, setSelected] = useState(null);
	const [formData, setFormData] = useState({});
	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const onApply = (id) => {
		setSelected(id);
		setFormData({ position: id });
		setSubmitted(false);
		// Use setTimeout to ensure the form is rendered before scrolling
		setTimeout(() => {
			if (formRef.current) {
				formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}, 100);
	};

	const onChange = (e) => {
		const { name, value, type } = e.target;
		setFormData((f) => ({
			...f,
			[name]: type === 'number' ? (+value || '') : value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setSubmitting(true);
		
		// Show success message immediately
		setSubmitted(true);
		setFormData({});
		
		// Send the API request in the background
		const endpoint = selected === 'company-driver' ? 'driver' : 'operator';
		fetch(`http://localhost:3000/api/${endpoint}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		}).catch(error => {
			console.error('Error:', error);
			// Since we already showed success message and cleared the form,
			// we'll just log the error if the API call fails
		}).finally(() => {
			setSubmitting(false);
		});
	};

	// -- APPLY FORM VIEW --
	if (selected) {
		const job = positions.find((p) => p.id === selected);
		return (
			<div className="w-full lg:w-screen px-0 py-0 relative shadow-2xl border border-blue-200 min-h-[700px] overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
				<img src={truck1} alt="Truck" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" style={{zIndex:0}} />
				<div className="relative z-10 flex flex-col lg:flex-row gap-8 w-full h-full">
					{/* Left: Job Details */}
					<div className="flex-1 p-12 text-black">
						<button onClick={() => setSelected(null)} className="mb-4 text-blue-600">
							← Back to Job Listings
						</button>
						<h2 className="text-3xl font-bold mb-2 text-black">
							{job.title.toUpperCase()} — {job.subtitle}
						</h2>
						<p className="mb-6 text-black">{job.description}</p>

						<div className="mb-6">
							<h4 className="font-semibold text-black">Requirements:</h4>
							<ul className="list-disc list-inside space-y-1 text-black">
								{job.requirements.map((r) => <li key={r}>{r}</li>)}
							</ul>
						</div>

						<div className="mb-6">
							<h4 className="font-semibold text-black">What we offer:</h4>
							<ul className="list-disc list-inside space-y-1 text-black">
								{job.offer.map((o) => <li key={o}>{o}</li>)}
							</ul>
						</div>

						<div>
							<h4 className="font-semibold text-black">What we’re looking for:</h4>
							<ul className="list-disc list-inside space-y-1 text-black">
								{job.lookingFor.map((l) => <li key={l}>{l}</li>)}
							</ul>
						</div>
					</div>
					{/* Right: Application Form */}
					<div className="flex-1 p-12 text-black">
						<h3 className="text-3xl font-extrabold mb-6 text-blue-700 text-center tracking-tight">Apply Now</h3>
						<div className="mb-6 border-b border-blue-100"></div>
						{submitted ? (
							<>
								<div className="text-green-600 font-semibold text-center text-lg">
									🎉 Your application has been received!
								</div>
								<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
									<div className="bg-white p-8 border border-blue-200 shadow-xl text-center">
										<h4 className="text-2xl font-bold mb-4 text-blue-700">Thank You!</h4>
										<p className="text-lg text-black mb-6">We will soon reach out to you through our mail.</p>
										<button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold" onClick={() => setSubmitted(false)}>
											Close
										</button>
									</div>
								</div>
							</>
						) : (
							<form ref={formRef} onSubmit={onSubmit} className="space-y-6">
								{job.fields.map((fld) => {
									if (fld.type === 'radio') {
										return (
											<div key={fld.name} className="text-black">
												<p className="font-semibold text-black mb-2">
													{fld.label}{fld.required && <span className="text-red-500">*</span>}
												</p>
												<div className="flex gap-4 mt-1">
													{fld.options.map((opt) => (
														<label key={opt} className="inline-flex items-center text-black cursor-pointer">
															<input
																type="radio"
																name={fld.name}
																value={opt}
																onChange={onChange}
																required={fld.required}
																className="mr-2 accent-blue-600 focus:ring-2 focus:ring-blue-400"
															/>
															{opt}
														</label>
													))}
												</div>
											</div>
										);
									}
									if (fld.type === 'select') {
										return (
											<label key={fld.name} className="block text-black">
												<span className="font-semibold text-black mb-2 block">
													{fld.label}{fld.required && <span className="text-red-500">*</span>}
												</span>
												<select
													name={fld.name}
													onChange={onChange}
													required={fld.required}
													className="mt-1 block w-full border border-blue-200 rounded-lg text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
												>
													<option value="">Select…</option>
													{fld.options.map((o) => (
														<option value={o} key={o}>{o}</option>
													))}
												</select>
											</label>
										);
									}
									return (
										<label key={fld.name} className="block text-black">
											<span className="font-semibold text-black mb-2 block">
												{fld.label}{fld.required && <span className="text-red-500">*</span>}
											</span>
											<input
												type={fld.type}
												name={fld.name}
												onChange={onChange}
												required={fld.required}
												className="mt-1 block w-full border border-blue-200 rounded-lg px-3 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
											/>
										</label>
									);
								})}
								<div className="mt-8">
									<button
										type="submit"
										disabled={submitting}
										className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 font-bold text-lg shadow-lg hover:from-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-200 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
									>
										{submitting ? 'Submitting…' : 'Submit Application'}
									</button>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		);
	}

	// -- MAIN LANDING VIEW --
	return (
		<div className="font-sans leading-relaxed text-gray-800">
			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
				<img src={truck1} alt="Truck" className="absolute inset-0 w-full h-full object-cover opacity-100 z-0" />
				<div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>
				<div className="relative z-10 max-w-4xl mx-auto px-6">
					<h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg" >

						Join Our <span className='text-blue-400'>Professional Team</span>
					</h1>
					<p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
						Drive your career forward with Canada's premier transportation company. 
						Competitive pay, excellent benefits, and opportunities for growth await.
					</p>
				</div>
			</section>

			{/* Available Positions */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
						Available Positions
					</h2>
					<div className="grid lg:grid-cols-2 gap-10 mb-16">
						{positions.map((pos) => (
							<div
								key={pos.id}
								className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:transform hover:-translate-y-3 transition-all duration-300 relative overflow-hidden"
							>
								<div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
									{pos.title}
								</h3>
								<p className="text-lg text-blue-600 font-semibold mb-6">
									{pos.subtitle}
								</p>
								<p className="text-gray-600 mb-8 leading-relaxed">
									{pos.description}
								</p>
								<div className="mb-8">
									<h4 className="text-lg font-semibold text-gray-900 mb-4">
										Requirements:
									</h4>
									<ul className="space-y-3">
										{pos.requirements.map((r, i) => (
											<li key={i} className="flex items-start text-gray-600">
												<span className="text-green-500 font-bold mr-3 mt-1">✓</span>
												{r}
											</li>
										))}
									</ul>
								</div>
								<button
									onClick={() => onApply(pos.id)}
									className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-800 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
								>
									Apply Now
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
						Why Choose Us?
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{benefits.map((b, i) => (
							<div
								key={i}
								className="bg-white p-8 rounded-2xl shadow-lg text-center hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
							>
								<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-6">
									{b.icon}
								</div>
								<h3 className="text-xl font-semibold mb-4 text-gray-900">{b.title}</h3>
								<p className="text-gray-600 leading-relaxed">{b.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Career Opportunities */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
						Career Opportunities
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						{opportunities.map((o, i) => (
							<div
								key={i}
								className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500 hover:bg-blue-50 hover:transform hover:translate-x-2 transition-all duration-300"
							>
								<h3 className="text-xl font-semibold mb-3 text-gray-900">{o.title}</h3>
								<p className="text-gray-600 leading-relaxed">{o.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white text-center">
				<div className="max-w-4xl mx-auto px-6">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Ready to Drive Your Career Forward?
					</h2>
					<p className="text-xl md:text-2xl mb-12 opacity-90">
						Join our team of professional drivers and start earning competitive pay with excellent benefits today.
					</p>
					<button
						onClick={() => window.open('tel:368-599-9677')}
						className="bg-blue-600 text-white py-5 px-10 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:transform hover:-translate-y-1 transition-all duration-300"
					>
						📞 Call Now: 368‑599‑9677
					</button>
				</div>
			</section>
		</div>
	);
};

export default Carriers;