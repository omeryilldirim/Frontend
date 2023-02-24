import { useEffect, useState } from "react";


const EditTutorial = ({getTutorials, info}) => {

  const [tutor, setTutor] = useState(info)


  const handleSaveChanges = ()=>{
    console.log(tutor);
  }
  const handleTitleChange = (e)=>{
    setTutor({...tutor, ["title"] : e.target.value})
  }
  const handleDescriptionChange = (e)=>{
    setTutor({...tutor, ["description"] : e.target.value})
  }
  return (
    <div className="modal" tabIndex="-1" id="edit-tutor">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Tutorial</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form action="#">
              <label className="form-label" htmlFor="title">Title</label>
              <input className="form-control mb-3" type="text" name="title" id="title" defaultValue={tutor.title} 
              onChange={handleTitleChange}/>
              <label className="form-label"  htmlFor="desc">Description</label>
              <input className="form-control" type="text" name="desc" id="desc" defaultValue={info.description}
              onChange={handleDescriptionChange} />
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              
            >
              Close
            </button>
            <button type="button" className="btn btn-primary"
            onClick={handleSaveChanges}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTutorial
