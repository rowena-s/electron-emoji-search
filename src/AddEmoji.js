import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap'
import axios from "axios";
import "./AddEmoji.css";

export default class AddEmoji extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFile: null,
      fileValid: true,
      fileName: ""
    }
  }
  componentDidUpdate() {
    setInterval(this.inc, 1000);
  }
  fileNameChanged = event => {
    console.log(event.target.value)
    this.setState({
      fileName: event.target.value
    })
  }

  inputFileChanged = event => {
    if (event.target.files[0].type !== "image/png"){
      this.setState({
        fileValid: false
      })
      event.target.value = null;
    } else
    this.setState({
      selectedFile: event.target.files[0],
      fileValid: true
    })
  }

  onFormSubmit = () => {
    let data = new FormData();
    data.append('file', this.refs.uploadEmojiName);
    data.append('name', this.refs.uploadFile);
    console.log("data =", data);
    axios.post('http://localhost:8000/upload', data).then((response) => {
      console.log(response.statusText);
    }).catch(err =>{
      console.log(err)
    });
    }

  render() {
    return (
    <div className="add-emoji-form">
      <h3> Add a new Emoji </h3>
      <Form action="" onSubmit={this.onFormSubmit.bind(this)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label> Emoji Name </Form.Label>
        <Form.Control type="text" placeholder="Name your emoji file" onChange={this.fileNameChanged.bind(this)}/>
        {/* <FormControl.Feedback type="invalid"> Name is required </FormControl.Feedback> */}
      </Form.Group>

      <Form.Group controlId="Upload">
        <Form.Label>Upload an Image</Form.Label>
        <Form.Control type="file" onChange={this.inputFileChanged.bind(this)}/>
        <div>
          <p className={!this.state.fileValid ? '' : 'hidden'}> Images must be png only</p>
        </div>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!this.state.selectedFile&&!this.state.fileName}>
        Upload
      </Button>
    </Form> 
    </div>
    )
  }
}