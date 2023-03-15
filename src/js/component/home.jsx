import React from "react";


//create your first component
const Home = ({ first, second, third, fourth, fifth, sixth }) => {

	return (
		<div className="row bg-black col-7 text-center d-flex justify-content-center mx-auto p-2 mt-3 ">
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 border border-1 m-2 fw-bold" ><i class="far fa-clock"></i></div>
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 border border-1 m-2 fw-bold ">{sixth}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 border border-1 m-2 fw-bold">{fifth}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 border border-1 m-2 fw-bold">{fourth}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 border border-1 m-2 fw-bold">{third}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 border border-1 m-2 fw-bold">{second}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-4 rounded-1 border border-1 m-2 fw-bold">{first}</div>
		</div>
	);

};


export default Home;
