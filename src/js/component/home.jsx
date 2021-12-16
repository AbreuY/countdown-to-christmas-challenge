import React from "react";

//include images into your bundle

import * as Snow from "../snow.js";
//create your first component
const Home = () => {
	window.onload = () => {
		//create new snow
		var snow = new Snow.default({
			id: "snow",
			theme: "colors",
			min_size: 1,
			max_size: 5,
		});
		snow.start();
		/* https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/ */

		function getTimeRemaining(endtime) {
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor((t / 1000 / 60) % 60);
			var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			return {
				total: t,
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds,
			};
		}

		function initializeClock(id, endtime) {
			var clock = document.getElementById(id);
			var daysSpan = clock.querySelector(".days");
			var hoursSpan = clock.querySelector(".hours");
			var minutesSpan = clock.querySelector(".minutes");
			var secondsSpan = clock.querySelector(".seconds");

			function updateClock() {
				var t = getTimeRemaining(endtime);

				daysSpan.innerHTML = t.days;
				hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
				minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
				secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

				if (t.total <= 0) {
					clearInterval(timeinterval);
				}
			}

			updateClock();
			var timeinterval = setInterval(updateClock, 1000);
		}

		var deadline = "2021-12-24";
		initializeClock("clockdiv", deadline);
	};
	return (
		<>
			<div id="snow"></div>

			<div id="clockdiv">
				<div className="inner">
					<span className="days"></span>
					<div className="smalltext">Days</div>
				</div>
				<div className="inner">
					<span className="hours"></span>
					<div className="smalltext">Hours</div>
				</div>
				<div className="inner">
					<span className="minutes"></span>
					<div className="smalltext">Minutes</div>
				</div>
				<div className="inner">
					<span className="seconds"></span>
					<div className="smalltext">Seconds</div>
				</div>
			</div>
			<h1>Until Christmas</h1>
		</>
	);
};

export default Home;
