import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import HtmlRender from './components/htmlrender';
import Input from './components/input';
import { render } from '@testing-library/react';

const loadText = `# Welcome to my React Markdown Previewer!

## Oui oui c'est vraiment énorme

Voici le lien vers mon [site]("https://delahpl.com")

Voici un code intéressant : \`<div></div>\` 

Et un auter plus gros

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

Et une liste de courses : 
- Coquillettes
- Jambon
- Gruyère

> Il n'y pas de fumée sans feu

Et **oui**

![React Logo w/ Text](https://goo.gl/Umyytc)

`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textRendered: loadText,
      fullScreenInput: false,
      fullScreenRender: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.fullScreenInputOnOff = this.fullScreenInputOnOff.bind(this);
    this.fullScreenRenderOnOff = this.fullScreenRenderOnOff.bind(this);

  };

  handleChange(e) {
    this.setState({
      textRendered: e.target.value,
    })
  }
  
  fullScreenInputOnOff() {
    this.setState({
      fullScreenInput: !this.state.fullScreenInput,
      fullScreenRender: false
    })
  }

  fullScreenRenderOnOff() {
    this.setState({
      fullScreenRender: !this.state.fullScreenRender,
      fullScreenInput: false
    })
  }

  render() {
    return (
      <div className="layout">
        <Input screenChange={this.state.fullScreenInput} screenChangeFunction={this.fullScreenInputOnOff} changeValue={this.state.textRendered} handleChangeManagement={this.handleChange}/>
        <HtmlRender renderSizeChange={this.state.fullScreenRender} renderSizeFunction={this.fullScreenRenderOnOff} changeValue={this.state.textRendered} />
      </div>
    );  
  }
  
}

export default App;
