import { useState, useEffect } from "react";
import { imageArray } from "./imageArray";
import { motion } from "framer-motion";
import { vehicleDescs } from "./vehicleDescriptions";

export function Container() {
	const [isActive, setActive] = useState(true);
	const [alsoActive, setAlsoActive] = useState(true);
	const [thirdActive, setThirdActive] = useState(true);
	const [fourthActive, setFourthActive] = useState(true);
	const [lastActive, setLastActive] = useState(true);
	const [yourImage, setYourImage] = useState(imageArray[0]);
	const [oppImage, setOppImage] = useState(imageArray[0]);
	const [move, setMove] = useState(false);
	const [yourSpeed, setYourSpeed] = useState(0);
	const [oppSpeed, setOppSpeed] = useState(0);
	const [startGame, setStartGame] = useState(true);
	const [startTimer, setStartTimer] = useState(false);
	const [seconds, setSeconds] = useState(3);
	const [result, setResult] = useState(true);
	const [greyOverlay, setGreyOverlay] = useState(true);
	const [winner, setWinner] = useState("");

	function Timer() {
		useEffect(() => {
			let myInterval = null;
			if (startTimer) {
				myInterval = setInterval(() => {
					if (seconds > 0) {
						setSeconds(seconds - 1);
					}
					if (seconds === 0) {
						clearInterval(myInterval);
					}
				}, 1000);
			}
			return () => {
				clearInterval(myInterval);
			};
		});
		return <p>{seconds === 0 ? "Go!" : seconds}</p>;
	}

	function showSpeed(you, opponent) {
		if (you === opponent) {
			setTimeout(() => {
				setWinner("It's a tie!");
				setResult(false);
				setGreyOverlay(false);
			}, you * 1000);
		}

		if (you < opponent) {
			setTimeout(() => {
				setWinner("You win!");
				setResult(false);
				setGreyOverlay(false);
			}, you * 1000);
		}
		if (you > opponent) {
			setTimeout(() => {
				setWinner("You lose!");
				setResult(false);
				setGreyOverlay(false);
			}, opponent * 1000);
		}
	}

	function toggleActive() {
		setActive(!isActive);
	}

	function toggleNone() {
		setAlsoActive(!alsoActive);
	}

	function toggleThird() {
		setThirdActive(!thirdActive);
	}

	function toggleFourth() {
		setFourthActive(!fourthActive);
	}

	function toggleLast() {
		setLastActive(!lastActive);
	}

	function toggleGame() {
		setStartGame(!startGame);
	}

	function toggleTimer() {
		setStartTimer(!startTimer);
	}

	function removeTimer() {
		setStartTimer(false);
	}

	function toggleOverlay() {
		setGreyOverlay(!greyOverlay);
	}
	function closeWindow() {
		setResult(true);
		setStartGame(true);
	}
	function replay() {
		window.location.reload();
	}
	function setYourCar(number) {
		setYourImage(imageArray[number]);
		if (number === 0) {
			setYourSpeed(7);
		} else if (number === 1) {
			setYourSpeed(2.5);
		} else if (number === 2) {
			setYourSpeed(2);
		} else if (number === 3) {
			setYourSpeed(6);
		} else if (number === 4) {
			setYourSpeed(7);
		} else if (number === 5) {
			setYourSpeed(4);
		} else if (number === 6) {
			setYourSpeed(3.5);
		} else if (number === 7) {
			setYourSpeed(3);
		} else if (number === 8) {
			setYourSpeed(4.5);
		} else if (number === 9) {
			setYourSpeed(18);
		} else if (number === 10) {
			setYourSpeed(15);
		} else if (number === 11) {
			setYourSpeed(11);
		} else if (number === 12) {
			setYourSpeed(10);
		} else if (number === 13) {
			setYourSpeed(20);
		} else if (number === 14) {
			setYourSpeed(12);
		} else if (number === 15) {
			setYourSpeed(1);
		}
	}

	function setOppCar(number) {
		setOppImage(imageArray[number]);
		if (number === 0) {
			setOppSpeed(7);
		} else if (number === 1) {
			setOppSpeed(2.5);
		} else if (number === 2) {
			setOppSpeed(2);
		} else if (number === 3) {
			setOppSpeed(6);
		} else if (number === 4) {
			setOppSpeed(7);
		} else if (number === 5) {
			setOppSpeed(4);
		} else if (number === 6) {
			setOppSpeed(3.5);
		} else if (number === 7) {
			setOppSpeed(3);
		} else if (number === 8) {
			setOppSpeed(4.5);
		} else if (number === 9) {
			setOppSpeed(18);
		} else if (number === 10) {
			setOppSpeed(15);
		} else if (number === 11) {
			setOppSpeed(11);
		} else if (number === 12) {
			setOppSpeed(10);
		} else if (number === 13) {
			setOppSpeed(20);
		} else if (number === 14) {
			setOppSpeed(12);
		} else if (number === 15) {
			setOppSpeed(1);
		}
	}

	return (
		<>
			<div className="container">
				<div className={isActive ? "car-container" : "no-display"}>
					<div className="navbar">
						<button className="inactive">&#60;</button>
						<h1>Choose Your Vehicle</h1>
						<button
							className="active"
							onClick={() => {
								toggleActive();
								toggleNone();
							}}>
							&#62;
						</button>
					</div>
					<div className="car-row row-one">
						<div className="car">
							<button
								onClick={() => {
									toggleActive();
									toggleThird();
									setYourCar(0);
								}}>
								<p className="car-title">Crossover</p>
								<img
									src={imageArray[0]}
									alt="Super Star Racing Audi Crossover"></img>
								<p className="description">{vehicleDescs(0)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleActive();
									toggleThird();
									setYourCar(1);
								}}>
								<p className="car-title">Sport Bike</p>
								<img
									src={imageArray[1]}
									alt="Super Star Racing Sport Bike"></img>
								<p className="description">{vehicleDescs(1)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleActive();
									toggleThird();
									setYourCar(2);
								}}>
								<p className="car-title">Supercar</p>
								<img
									src={imageArray[2]}
									alt="Super Star Racing Audi R8 Supercar"></img>
								<p className="description">{vehicleDescs(2)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleActive();
									toggleThird();
									setYourCar(3);
								}}>
								<p className="car-title">Off-Roader</p>
								<img
									src={imageArray[3]}
									alt="Super Star Racing Jeep Wrangler"></img>
								<p className="description">{vehicleDescs(3)}</p>
							</button>
						</div>
					</div>
					<div className="car-row">
						<div className="car">
							<button
								onClick={() => {
									toggleActive();
									toggleThird();
									setYourCar(4);
								}}>
								<p className="car-title">Hatchback</p>
								<img
									src={imageArray[4]}
									alt="Super Star Racing Hyundai Elantra Hatchback"></img>
								<p className="description">{vehicleDescs(4)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleActive();
									toggleThird();
									setYourCar(5);
								}}>
								<p className="car-title">Convertible</p>
								<img
									src={imageArray[5]}
									alt="Super Star Racing Buick Convertible"></img>
								<p className="description">{vehicleDescs(5)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleActive();
									toggleThird();
									setYourCar(6);
								}}>
								<p className="car-title">Sedan</p>
								<img
									src={imageArray[6]}
									alt="Super Star Racing BMW Sedan"></img>
								<p className="description">{vehicleDescs(6)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleActive();
									toggleThird();
									setYourCar(7);
								}}>
								<p className="car-title">Muscle Car</p>
								<img
									src={imageArray[7]}
									alt="Super Star Racing Muscle Car"></img>
								<p className="description">{vehicleDescs(7)}</p>
							</button>
						</div>
					</div>
				</div>
				<div className={alsoActive ? "no-display" : "car-container"}>
					<div className="navbar">
						<button
							className="active"
							onClick={() => {
								toggleActive();
								toggleNone();
							}}>
							&#60;
						</button>
						<h1>Choose Your Vehicle</h1>
						<button className="inactive">&#62;</button>
					</div>
					<div className="car-row row-one">
						<div className="car">
							<button
								onClick={() => {
									toggleNone();
									toggleThird();
									setYourCar(8);
								}}>
								<p className="car-title">Sport Hatch</p>
								<img
									src={imageArray[8]}
									alt="Super Star Racing Mini Cooper"></img>
								<p className="description">{vehicleDescs(8)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleNone();
									toggleThird();
									setYourCar(9);
								}}>
								<p className="car-title">Tractor</p>
								<img
									src={imageArray[9]}
									alt="Super Star Racing John Deere Tractor"></img>
								<p className="description">{vehicleDescs(9)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleNone();
									toggleThird();
									setYourCar(10);
								}}>
								<p className="car-title">Bicycle</p>
								<img src={imageArray[10]} alt="Super Star Racing Bicycle"></img>
								<p className="description">{vehicleDescs(10)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleNone();
									toggleThird();
									setYourCar(11);
								}}>
								<p className="car-title">Semi Truck</p>
								<img
									src={imageArray[11]}
									alt="Super Star Racing Semi Truck"></img>
								<p className="description">{vehicleDescs(11)}</p>
							</button>
						</div>
					</div>
					<div className="car-row">
						<div className="car">
							<button
								onClick={() => {
									toggleNone();
									toggleThird();
									setYourCar(12);
								}}>
								<p className="car-title">Bus</p>
								<img
									src={imageArray[12]}
									alt="Super Star Racing City Bus"></img>
								<p className="description">{vehicleDescs(12)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleNone();
									toggleThird();
									setYourCar(13);
								}}>
								<p className="car-title">Loader</p>
								<img
									src={imageArray[13]}
									alt="Super Star Racing Construction Machine"></img>
								<p className="description">{vehicleDescs(13)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleNone();
									toggleThird();
									setYourCar(14);
								}}>
								<p className="car-title">Tank</p>
								<img
									src={imageArray[14]}
									alt="Super Star Racing Army Tank"></img>
								<p className="description">{vehicleDescs(14)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleNone();
									toggleThird();
									setYourCar(15);
								}}>
								<p className="car-title">Helicopter</p>
								<img
									src={imageArray[15]}
									alt="Super Star Racing Army Helicopter"></img>
								<p className="description">{vehicleDescs(15)}</p>
							</button>
						</div>
					</div>
				</div>
				<div className={thirdActive ? "no-display" : "car-container"}>
					<div className="navbar">
						<button className="inactive no-click">&#60;</button>
						<h1>Choose Opponent Vehicle</h1>
						<button
							className="active"
							onClick={() => {
								toggleThird();
								toggleFourth();
							}}>
							&#62;
						</button>
					</div>
					<div className="car-row row-one">
						<div className="car">
							<button
								onClick={() => {
									toggleThird();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(0);
								}}>
								<p className="car-title">Crossover</p>
								<img
									src={imageArray[0]}
									alt="Super Star Racing Audi Crossover"></img>
								<p className="description">{vehicleDescs(0)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleThird();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(1);
								}}>
								<p className="car-title">Sport Bike</p>
								<img
									src={imageArray[1]}
									alt="Super Star Racing Sport Bike"></img>
								<p className="description">{vehicleDescs(1)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleThird();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(2);
								}}>
								<p className="car-title">Supercar</p>
								<img
									src={imageArray[2]}
									alt="Super Star Racing Audi R8 Supercar"></img>
								<p className="description">{vehicleDescs(2)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleThird();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(3);
								}}>
								<p className="car-title">Off-Roader</p>
								<img
									src={imageArray[3]}
									alt="Super Star Racing Jeep Wrangler"></img>
								<p className="description">{vehicleDescs(3)}</p>
							</button>
						</div>
					</div>
					<div className="car-row">
						<div className="car">
							<button
								onClick={() => {
									toggleThird();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(4);
								}}>
								<p className="car-title">Hatchback</p>
								<img
									src={imageArray[4]}
									alt="Super Star Racing Hyundai Elantra Hatchback"></img>
								<p className="description">{vehicleDescs(4)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleThird();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(5);
								}}>
								<p className="car-title">Convertible</p>
								<img
									src={imageArray[5]}
									alt="Super Star Racing Buick Convertible"></img>
								<p className="description">{vehicleDescs(5)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleThird();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(6);
								}}>
								<p className="car-title">Sedan</p>
								<img
									src={imageArray[6]}
									alt="Super Star Racing BMW Sedan"></img>
								<p className="description">{vehicleDescs(6)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleThird();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(7);
								}}>
								<p className="car-title">Muscle Car</p>
								<img
									src={imageArray[7]}
									alt="Super Star Racing Muscle Car"></img>
								<p className="description">{vehicleDescs(7)}</p>
							</button>
						</div>
					</div>
				</div>
				<div className={fourthActive ? "no-display" : "car-container"}>
					<div className="navbar">
						<button
							className="active"
							onClick={() => {
								toggleThird();
								toggleFourth();
							}}>
							&#60;
						</button>
						<h1>Choose Opponent Vehicle</h1>
						<button className="inactive no-click">&#62;</button>
					</div>
					<div className="car-row row-one">
						<div className="car">
							<button
								onClick={() => {
									toggleFourth();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(8);
								}}>
								<p className="car-title">Sport Hatch</p>
								<img
									src={imageArray[8]}
									alt="Super Star Racing Mini Cooper"></img>
								<p className="description">{vehicleDescs(8)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleFourth();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(9);
								}}>
								<p className="car-title">Tractor</p>
								<img
									src={imageArray[9]}
									alt="Super Star Racing John Deere Tractor"></img>
								<p className="description">{vehicleDescs(9)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleFourth();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(10);
								}}>
								<p className="car-title">Bicycle</p>
								<img src={imageArray[10]} alt="Super Star Racing Bicycle"></img>
								<p className="description">{vehicleDescs(10)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleFourth();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(11);
								}}>
								<p className="car-title">Semi Truck</p>
								<img
									src={imageArray[11]}
									alt="Super Star Racing Semi Truck"></img>
								<p className="description">{vehicleDescs(11)}</p>
							</button>
						</div>
					</div>
					<div className="car-row">
						<div className="car">
							<button
								onClick={() => {
									toggleFourth();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(12);
								}}>
								<p className="car-title">Bus</p>
								<img
									src={imageArray[12]}
									alt="Super Star Racing City Bus"></img>
								<p className="description">{vehicleDescs(12)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleFourth();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(13);
								}}>
								<p className="car-title">Loader</p>
								<img
									src={imageArray[13]}
									alt="Super Star Racing Construction Machine"></img>
								<p className="description">{vehicleDescs(13)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleFourth();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(14);
								}}>
								<p className="car-title">Tank</p>
								<img
									src={imageArray[14]}
									alt="Super Star Racing Army Tank"></img>
								<p className="description">{vehicleDescs(14)}</p>
							</button>
						</div>
						<div className="car">
							<button
								onClick={() => {
									toggleFourth();
									toggleLast();
									toggleGame();
									toggleOverlay();
									setOppCar(15);
								}}>
								<p className="car-title">Helicopter</p>
								<img
									src={imageArray[15]}
									alt="Super Star Racing Army Helicopter"></img>
								<p className="description">{vehicleDescs(15)}</p>
							</button>
						</div>
					</div>
				</div>
				<div className={lastActive ? "no-display" : "game-container"}>
					<motion.img
						src={yourImage}
						alt="Super Star Racing Player Car"
						animate={{ x: move && window.innerWidth - 100 }}
						transition={{ type: "tween", duration: yourSpeed }}></motion.img>
					<motion.img
						src={oppImage}
						alt="Super Star Racing Opponent Car"
						animate={{ x: move && window.innerWidth - 100 }}
						transition={{ type: "tween", duration: oppSpeed }}></motion.img>
				</div>
				<div className={startGame ? "no-display" : "start"}>
					<p>
						Welcome to Super Star Racing! Both cars that you selected will race
						towards the finish line and if your vehicle crosses first, you win!
						Try to figure out which of the sixteen vehicles is the fastest, and
						see which vehicles beat each other.
					</p>
					<button
						onClick={() => {
							setTimeout(() => {
								setMove(!move);
								toggleGame();
								toggleOverlay();
								removeTimer();
								showSpeed(yourSpeed, oppSpeed);
							}, 4000);
							toggleTimer();
						}}>
						Go
					</button>
				</div>
				<div className={startTimer ? "timer" : "no-display"}>
					<Timer />
				</div>
				<div className={greyOverlay ? "no-display" : "overlay"}></div>
				<div className={result ? "no-display" : "start"}>
					<p>{winner}</p>
					<div className="result-buttons">
						<button onClick={replay}>Play Again</button>
						<button
							onClick={() => {
								closeWindow();
								toggleOverlay();
							}}>
							Close
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
