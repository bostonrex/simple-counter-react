import React from "react";


//create your first component
const Home = ({ first, second, third, fourth, fifth, sixth }) => {

	return (
		<div className="row bg-black col-7 text-center d-flex justify-content-center mx-auto p-2 mt-3 ">
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 m-2" ><i class="far fa-clock"></i></div>
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 border border-1 m-2">{sixth}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 border border-1 m-2">{fifth}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 border border-1 m-2">{fourth}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 border border-1 m-2">{third}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 border border-1 m-2">{second}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 border border-1 m-2">{first}</div>
		</div>
	);

};


export default Home;
