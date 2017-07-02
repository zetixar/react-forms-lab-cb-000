import React from 'react';

function countWords(line){
  return line.split(' ').filter((l) => l).length;
}

function isValidPoem(poem){
  const poemLines = poem.split('\n').filter((l) => l);
  const isRightAmountOfLines = poemLines.length === 3;
  const hasRightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
  return isRightAmountOfLines && hasRightAmountOfWords;
}

export default class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      isValid: false,
    };

    this.updateText = this.updateText.bind(this);
  }

  updateText(ev){
    const content = ev.target.value;

    if(content){
      this.setState({
        content: content,
        isValid: isValidPoem(content),
      });
    }
  }


  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.updateText}/>
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}
