import React, {useState} from "react";
import data from "../Tandem_Apprentice_Challenge_2020/Apprentice_TandemFor400_Data.json";
function Play() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const answers = [data[currentQuestion].correct, ...data[currentQuestion].incorrect].sort(() => Math.random() - 0.5)
	
	const handleAnswerOptionClick = (answer) => {
	
	
	
		if (answer===data[currentQuestion].correct) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < data.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='center mw6 tc'>
			{showScore ? (
				<div className='pa3 pa4-ns'>
					<h1>You scored {score} out of {data.length}</h1>
					
				</div>
			) : (
				<>
				<div className='lh-title pa4 mt0'>
					<div className='f3 b mt4'>{data[currentQuestion].question}</div>
				</div>
					<div className='flex flex-column'>
						{answers.map((answer) => (
							
							<button className="f6  link dim br3 ph3 pv2 mb2  white bg-dark-blue" onClick={() => handleAnswerOptionClick(answer)}>{answer}</button>
							
						))}
						
					</div>
					<div className='lh-title pa4 mt0'>
						<div className='f4 b'>
							<span className="mr5">Question {currentQuestion + 1}/{data.length}</span>
							<span>Correct {score} out of </span>{data.length}.
						</div>
						
					</div>
					
				</>
				
			)}
			
		</div>
		
	);
}
export default Play;
