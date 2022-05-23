import { useState } from "react";
import AnswerFillInput from "./AnswerFillInput";
import AnswerBtnInputA from "./AnswerBtnInputA";
import AnswerBtnInputB from "./AnswerBtnInputB";
import QuestionSetTwo from "./QuestionSetTwo";
import Navigator from "./Navigator";

function QuestionSetOne({userInput, setUserInput}) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [fillAlert, setFillAlert] = useState(false);
    const [selectAlert, setSelectAlert] = useState(false);

    const questionsArr = [
        {
            question: 'What is your name?',
            options: null
        },
        {
            question: 'What programming language are you most interested in?',
            options: [
                'JavaScript',
                'Python',
                'C#',
                'Ruby'
            ]
        },
        {
            question: 'What industry are you most interested in working in?',
            options: [
                'B2B Software and Services',
                'Retail',
                'Gaming',
                'Healthcare',
                'Education',
                'Business / IT',
                'Government'
            ]
        },
        {
            question: 'What resources would you like to see to facilitate building your project?',
            options: [
                'YouTube Videos',
                'Completed Project Samples',
                'Links to Relevant Courses',
                'Links to Relevant Websites'
            ]
        },
        {
            question: 'How long do you want to spend on this project?',
            options: [
                '<3 Months',
                '3-6 months',
                '6-9 months',
                '>9 months'
            ]
        }
    ]

    const navigateNext = () => {
        if (questionIndex === 0 && userInput.userName === '') {
            setFillAlert(true);
            return
        } else {
            setFillAlert(false);
        }

        if (questionIndex === 1 && userInput.language === '') {
            setSelectAlert(true);
            return
        } else {
            setSelectAlert(false);
        }

        if (questionIndex === 2 && userInput.interest === '') {
            setSelectAlert(true);
            return
        } else {
            setSelectAlert(false);
        }

        if (questionIndex === 3 && userInput.resource === '') {
            setSelectAlert(true);
            return
        } else {
            setSelectAlert(false);
        }

        if (questionIndex === 4 && userInput.projectLength === '') {
            setSelectAlert(true);
            return
        } else {
            setSelectAlert(false);
        }

         if (questionIndex < 5) {
            setQuestionIndex(questionIndex + 1);
        }
    }


    const navigateBack = () => {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        const input = e.target.value;
        
        if (questionIndex === 0) {
            setUserInput(prevState => ({
                ...prevState,
                userName: input
            }));
        }
    }
    
    const handleSelect = (e) => {
        e.preventDefault();
        const input = e.target.value;
        if (questionIndex === 1) {
            setUserInput(prevState => ({
                ...prevState,
                language: input
            }));           
        }
        if (questionIndex === 2) {
            setUserInput(prevState => ({
                ...prevState,
                interest: input
            }));           
        }
        if (questionIndex === 3) {
            setUserInput(prevState => ({
                ...prevState,
                resource: input
            }));           
        }
        if (questionIndex === 4) {
            setUserInput(prevState => ({
                ...prevState,
                projectLength: input
            }));           
        }
    }

    return(
        <div>
            {questionIndex <= 4 ? 
            <>
                <div className="question-container wrapper">

                    <p>Question #{questionIndex + 1}</p>
                    <h1>{questionsArr[questionIndex].question}</h1>
                    
                        {questionIndex === 0 ? <AnswerFillInput handleChange={handleChange} fillAlert={fillAlert} userInput={userInput} index={questionIndex}/> : null}

                        {questionIndex === 1 ? <AnswerBtnInputA response={questionsArr} index={questionIndex} userInput={userInput} handleSelect={handleSelect} selectAlert={selectAlert}/> : null}  

                        {questionIndex === 2 ? <AnswerBtnInputB response={questionsArr} index={questionIndex} userInput={userInput} handleSelect={handleSelect} selectAlert={selectAlert} /> : null}       

                        {questionIndex === 3 ? <AnswerBtnInputB response={questionsArr} index={questionIndex} userInput={userInput} handleSelect={handleSelect} selectAlert={selectAlert}/> : null}        

                        {questionIndex === 4 ? <AnswerBtnInputB response={questionsArr} index={questionIndex} userInput={userInput} handleSelect={handleSelect} selectAlert={selectAlert}/> : null}  

                </div>
                <Navigator next={navigateNext} back={navigateBack} index={questionIndex}/>
            </>
            : null
        }   
        {questionIndex === 5 ? <QuestionSetTwo userInput={userInput} setUserInput={setUserInput}/> : null}
        </div>
    )
}

export default QuestionSetOne;