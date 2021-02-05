import React, { Component } from 'react';
import axios from 'axios';
import Category from './category';

class CreateTest extends Component {
    state = {
        Question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAns: "", 
        callRender: "0"
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    questions = [];
    handleAddQuestion = event => {
        const data = {
            question: this.state.Question,
            optionA: this.state.optionA,
            optionB: this.state.optionB,
            optionC: this.state.optionC,
            optionD: this.state.optionD,
            answer: this.state.correctAns,
        };
        this.questions.push(data);
    };

    handleCreateTest = event => {
        event.preventDefault();

        axios.post('/api/createtest', this.questions )
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }; 

    render() {
        if(this.state.callRender === "0"){
            const newcallRender = "1";
            console.log("before: ", this.state.callRender);
            this.setState({callRender : newcallRender});
            console.log("after: ", this.state.callRender);
            return(
                <Category />
            );
        }
        else{
            return ( 
                <form onSubmit={ e => this.handleCreateTest(e)}>
                    <label>Question: <input type="text" name="Question" onChange={this.onChange} required/></label><br />
                    <label>A: <input type="text" name="optionA" onChange={this.onChange} required/></label><br />
                    <label>B: <input type="text" name="optionB" onChange={this.onChange} required/></label><br />
                    <label>C: <input type="text" name="optionC" onChange={this.onChange} required/></label><br />
                    <label>D: <input type="text" name="optionD" onChange={this.onChange} required/></label><br />
                    <label>Answer: <input type="text" name="correctAns" onChange={this.onChange} required/></label><br />
                    <button type="button" onClick={ this.handleAddQuestion }>Add Question</button>
                    <button type="submit">Create Test</button>
                </form>
            );
        }
    }
}
 
export default CreateTest;