import React from "react";

export default class App extends React.Component {
  state = {
    //---------------------------------------------------------
    // Array de usuario e mensagens
    mensagens: [
      {
        usuario: "Bruno",
        textoMensagem: "mensagem1"
      },
      {
        usuario: "Monica",
        textoMensagem: "mensagem2"
      }
    ],
    //---------------------------------------------------------
    //Valores de estado dos inputs
    valorInputUsuario: "",
    valorInputMensagem: ""
  };

  //-----------------------------------------------------------
  // Funcionalidade chamada ao clicar no botao "Enviar"
  adicionaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      textoMensagem: this.state.valorInputMensagem
    };

    // Copia o array original e adiciona novo usuario e nova mensagem
    // criando um novo array "mensagens"
    const novoMensagens = [...this.state.mensagens, novaMensagem];
    this.setState({ mensagens: novoMensagens });
  };

  onChangeInputUsuario = (event) => {
    // Funcionalidade de verificação de mudança no input usuario
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputTexto = (event) => {
    // Funcionalidade de verificação de mudança no input mensagem
    this.setState({ valorInputMensagem: event.target.value });
  };
  render() {
    const componentesMensagens = this.state.mensagens.map((mensagem) => {
      return (
        <p>
          {mensagem.usuario}: {mensagem.textoMensagem}
        </p>
      );
    });
    return (
      <div className="App">
        <div>{componentesMensagens}</div>
        <div>
          <input
            placeholder="Usuario"
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
          />
          <input
            placeholder="Mensagem"
            value={this.valorInputMensagem}
            onChange={this.onChangeInputTexto}
          />
          <button onClick={this.adicionaMensagem}>ENVIAR</button>
        </div>
      </div>
    );
  }
}




/*import React from 'react'
import './App.css';

import{Botao} from "./form/input"; //importando input.js

export default class  extends Component {
  state = {
    TesteH1:"",
  };


onChangeH1 = (event) => {
  this.setState({TesteH1:event.target.value});
}

onclickBotao = () => {
  console.log(this.state.TesteH1);
  this.setState({
    TesteH1: "",
  });
};

  render() {
    return (
      <div className="App">
        <h1>Texto do H1: {this.state.TesteH1}</h1>
        <input onChange={this.onChangeH1} value={this.state.TesteH1} />
        <button onClick={this.onclickBotao}>Clique</button>
      </div>
    );
  }
}
/*
function App() {
  return (
    <div className="App">
      <header>
        <h1>teste</h1>
      </header>
      <form>

      </form>
    </div>
  );
}

export default App;
*/