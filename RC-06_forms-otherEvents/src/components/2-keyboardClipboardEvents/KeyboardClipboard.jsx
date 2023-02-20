import { useState } from "react"

const KeyboardClipboard = () => {
  
  const [inputData, setInputData] = useState("")

  const handleChange = (e) =>{
    e.target.value = e.target.value.toUpperCase()
    setInputData(e.target.value)
  }
  const handleKeyDown = (e) =>{
    // console.log(e.keyCode);
    if (e.keyCode >= 48 && e.keyCode <= 57){
      e.preventDefault() //? prevents printing number
    }
  }
  const handleAreaPaste = (e)=>{
    e.target.style.color="red"
    e.target.value += e.clipboardData.getData("text").toLocaleUpperCase()
    e.preventDefault()
  }
  const handleParCopy = (e)=>{
    e.preventDefault()
  }
  return (
    <div className="container text-center">
      <h2 className="display-5 text-danger">Keyboard-Clipboard Event</h2>

      <input type="text" className="form-control" onChange={handleChange} onKeyDown={handleKeyDown} />

      <div className="text-start mt-4">
        <h6>Copied Input Data</h6>
        <p onCopy={handleParCopy}>{inputData.toLowerCase()}</p>
      </div>

      <textarea className="form-control" name="textarea" id="textarea" cols="30" rows="10" onPaste={handleAreaPaste}></textarea>
    </div>
  )
}

export default KeyboardClipboard
