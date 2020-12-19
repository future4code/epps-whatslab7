import React from "react";

export default class App extends React.Component {
  state = {
    //---------------------------------------------------------
    // Array de usuario e mensagens
    mensagens: [],
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
    this.setState({ mensagens: novoMensagens , valorInputMensagem: "" });
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