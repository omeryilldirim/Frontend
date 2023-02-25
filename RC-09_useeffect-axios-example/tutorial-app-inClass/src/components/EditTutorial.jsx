import { useEffect, useState } from "react";


const EditTutorial = ({getTutorials, info}) => {
  const [title, setTitle] = useState(info.title)
  const [desc, setDesc] = useState(info.description)
  // const [tutor, setTutor] = useState(info)

  // tutor !== info && setTutor(info)

  useEffect(() => {

    setTitle(info.title)
    setDesc(info.description)
    
  }, [info])

  const handleSaveChanges = (e)=>{
    ;
  }
  const handleTitleChange = (e)=>{
    setTitle(e.target.value)
  }
  const handleDescriptionChange = (e)=>{
    setDesc(e.target.value)
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
              <input className="form-control mb-3" type="text" name="title" id="title" value={title || ""} 
              onChange={handleTitleChange}
              />
              <label className="form-label"  htmlFor="desc">Description</label>
              <input className="form-control" type="text" name="desc" id="desc" value={desc || ""}
              onChange={handleDescriptionChange}
               />
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
            onClick={handleSaveChanges}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTutorial
