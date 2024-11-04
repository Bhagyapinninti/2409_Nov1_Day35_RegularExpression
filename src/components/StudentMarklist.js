import React, { useRef }  from 'react'

function StudentMarklist() {

  let telInputRef = useRef();
  let hinInputRef = useRef();
  let engInputRef = useRef();
  let matInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();

  let telSpanRef = useRef();
  let engSpanRef = useRef();
  let hinSpanRef = useRef();
  let matSpanRef = useRef();
  let sciSpanRef = useRef();
  let socSpanRef = useRef();

  let FirstnameInputRef = useRef();
  let LastnameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();

  let firstNameSpanRef= useRef();
  let lastNameSpanRef= useRef();
  let emailSpanRef= useRef();
  let passwordSpanRef= useRef();

  let resultLabelref = useRef();

  let nameRegex = /^[A-Za-z\s]{2,30}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



let inputOnFocus =(inputRef)=>{
  inputRef.current.style.backgroundColor = "lightblue";
};


let inputOnBlur =(inputRef)=>{
  inputRef.current.style.backgroundColor = "  ";
}; 


let inputOnChange =(inputRef,spanRef)=>{
  let marks = inputRef.current.value;
  if (marks >= 0 && marks <= 100) {
    if (marks >= 35) {
      spanRef.current.innerHTML = "Pass";
      spanRef.current.style.color = "green";
    } else {
      spanRef.current.innerHTML = "Fail";
      spanRef.current.style.color = "red";
    }
  } else {
    spanRef.current.innerHTML = "Invalid";
    spanRef.current.style.color = "orange";
  }
}

let validateName=(inputRef, spanRef)=>{
    let nameResult= nameRegex.test(inputRef.current.value);
    if(nameResult==true){
      spanRef.current.innerHTML="valid";
      spanRef.current.style.color = "green";
    }
    else{
      spanRef.current.innerHTML="Invalid";
      spanRef.current.style.color = "red";
    }
  }

  let validateEmail=(inputRef, spanRef)=>{
    let emailResult= emailRegex.test(inputRef.current.value);
    if(emailResult==true){
      spanRef.current.innerHTML="valid";
      spanRef.current.style.color = "green";
    }
    else{
      spanRef.current.innerHTML="Invalid";
      spanRef.current.style.color = "red";
    }
  }
  
  let validatePassword=(inputRef, spanRef)=>{
    let passwordResult= passwordRegex.test(inputRef.current.value);
    if(passwordResult==true){
      spanRef.current.innerHTML="valid";
      spanRef.current.style.color = "green";
    }
    else{
      spanRef.current.innerHTML="Invalid";
      spanRef.current.style.color = "red";
    }
  }
  
  return (
    <div  className='container'>
      <form>
        <h2>Student Mark Sheet</h2>
        <fieldset>
          <legend>Personal Details</legend>
          <div>
            <label>First Name</label>
            <input ref={FirstnameInputRef}
             onChange={()=>{
                validateName(FirstnameInputRef,firstNameSpanRef);
              }}
            ></input>
            <span ref={firstNameSpanRef}></span>
          </div>

          <div>
            <label>Last Name</label>
            <input ref={LastnameInputRef}
            onChange={()=>{
                validateName(LastnameInputRef,lastNameSpanRef);
              }}
            ></input>
            <span ref={lastNameSpanRef}></span>
          </div>
          <div>
            <label>Email</label>
            <input ref={emailInputRef}
            onChange={()=>{
                validateEmail(emailInputRef,emailSpanRef);
              }}
            ></input>
            <span ref={emailSpanRef}></span>
          </div>
          <div>
            <label>Password</label>
            <input ref={passwordInputRef}
            onChange={()=>{
                validatePassword(passwordInputRef,passwordSpanRef);
              }}
            ></input>
            <span ref={passwordSpanRef}></span>
          </div>
        </fieldset>
        <fieldset>
          <legend>Marks Details</legend>
          <div>
            <label>Telugu</label>
            <input
              type="number"
              ref={telInputRef}
              onFocus={() => {
                inputOnFocus(telInputRef);
              }}
              onChange={() => {
                inputOnChange(telInputRef,telSpanRef);
              }}
              onBlur={() => {
                inputOnBlur(telInputRef);
              }}
            ></input>
            <span ref={telSpanRef}></span>
          </div>

          <div>
            <label>English</label>
            <input
              type="number"
              ref={engInputRef}
              onFocus={() => {
                inputOnFocus(engInputRef);
              }}
              onChange={() => {
                inputOnChange(engInputRef,engSpanRef);
              }}
              onBlur={() => {
                inputOnBlur(engInputRef);
              }}
            ></input>
            <span ref={engSpanRef}></span>
          </div>

          <div>
            <label>Hindi</label>
            <input
              type="number"
              ref={hinInputRef}
              onFocus={() => {
                inputOnFocus(hinInputRef);
              }}
              onChange={() => {
                inputOnChange(hinInputRef,hinSpanRef);
              }}
              onBlur={() => {
                inputOnBlur(hinInputRef);
              }}
            ></input>
            <span ref={hinSpanRef}></span>
          </div>

          <div>
            <label>Maths</label>
            <input
              type="number"
              ref={matInputRef}
              onFocus={() => {
                inputOnFocus(matInputRef);
              }}
              onChange={() => {
                inputOnChange(matInputRef,matSpanRef);
              }}
              onBlur={() => {
                inputOnBlur(matInputRef);
              }}
            ></input>
            <span ref={matSpanRef}></span>
          </div>

          <div>
            <label>Science</label>
            <input
              type="number"
              ref={sciInputRef}
              onFocus={() => {
                inputOnFocus(sciInputRef);
              }}
              onChange={() => {
                inputOnChange(sciInputRef,sciSpanRef);
              }}
              onBlur={() => {
                inputOnBlur(sciInputRef);
              }}
            ></input>
            <span ref={sciSpanRef}></span>
          </div>

          <div>
            <label>Social</label>
            <input
              type="number"
              ref={socInputRef}
              onFocus={() => {
                inputOnFocus(socInputRef);
              }}
              onChange={() => {
                inputOnChange(socInputRef,socSpanRef);
              }}
              onBlur={() => {
                inputOnBlur(socInputRef);
              }}
            ></input>
            <span ref={socSpanRef}></span>
          </div>
        </fieldset>

        <div>
          <button
            type="button"
            onClick={() => {
              let Firstname = FirstnameInputRef.current.value;
              let Lastname = LastnameInputRef.current.value;
              let telMarks = Number(telInputRef.current.value);
              let engMarks = Number(engInputRef.current.value);
              let hinMarks = Number(hinInputRef.current.value);
              let matMarks = Number(matInputRef.current.value);
              let sciMarks = Number(sciInputRef.current.value);
              let socMarks = Number(socInputRef.current.value);
              let totalMarks =
                telMarks + engMarks + hinMarks + matMarks + sciMarks + socMarks;
              let perc = (totalMarks / 600) * 100;

              alert(
                `${Firstname} ${Lastname} Total Marks are ${totalMarks} with ${perc.toFixed(
                  2
                )}%`
              );
              resultLabelref.current.innerHTML = `${Firstname} ${Lastname} Total Marks are ${totalMarks} with ${perc.toFixed(
                2
              )}%`;
            }}
          >
            Result
          </button>
        </div>
        <div className="resultLabel"> 
          <label ref={resultLabelref}></label>
        </div>
      </form>
    </div>
  );
}

export default StudentMarklist
