import React, { Fragment, useState } from "react";
import axios from "axios";
import "../CSS/EmojiUploader.css";




const EmojiUploader = () => {

  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});


 const onChange = event => {
    if (event.target.files[0].type !== "image/png"){
      event.target.value = null;
    } else
    setFile(event.target.files[0]); 
    setFileName(event.target.files[0].name); //this will actually be input from the emoji name 
  }

  const onSubmit =  async event => {
    event.preventDefault();
    const data = new FormData();
    data.append('file', file);
    // data.append('name', fileName);
    console.log("data =", data);
    try {
      const res = await axios.post('http://localhost:8000/upload', data, {
        headers: {
          'Content-Type':'multipart/form-data'
        }
      });
      const {fileName, filePath} = res.data;
      setUploadedFile({fileName, filePath});
    } catch (err) {
      console.log("catching an error", err);
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }
  };
return (
    <Fragment>
      <form onSubmit={onSubmit}>
      <div className="custom-file mt-4">
        <input type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
        <label className="custom-file-label" htmlFor="customFile">
        {fileName}
          </label>
      </div>
      <input type="submit" className="btn btn-primary btn-block mt-4" value="Upload"></input>
      </form>
    </Fragment>
);

    // <div className="add-emoji-form">
    //   <h3> Add a new Emoji </h3>
    //   <Form action="" onSubmit={this.onFormSubmit}>
    //   <Form.Group controlId="formBasicEmail">
    //     <Form.Label> Emoji Name </Form.Label>
    //     <Form.Control type="text" placeholder="Name your emoji file" onChange={this.fileNameChanged.bind(this)}/>
    //     {/* <FormControl.Feedback type="invalid"> Name is required </FormControl.Feedback> */}
    //   </Form.Group>

    //   <Form.Group controlId="Upload">
    //     <Form.Label>Upload an Image</Form.Label>
    //     <Form.Control type="file" onChange={this.inputFileChanged.bind(this)}/>
    //     <div>
    //       <p className={!this.state.fileValid ? '' : 'hidden'}> Images must be png only</p>
    //     </div>
    //   </Form.Group>

    //   <Button variant="primary" type="submit" disabled={!this.state.selectedFile&&!this.state.fileName}>
    //     Upload
    //   </Button>
    // </Form> 
    // </div>
};

export default EmojiUploader;