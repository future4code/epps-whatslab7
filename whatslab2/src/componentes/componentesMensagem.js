import React from "react";

export default class ComponentesMensagens extends React.Component {
  state = {
    //---------------------------------------------------------
    // Array de usuario e mensagens
    mensagens: [
      {
        usuario: "Bruno",
        textoMensagem: "mensagem 1"
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
    this.setState({ pessoas: novoMensagens });
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
    return <div className="App">{componentesMensagens}</div>;
  }
}
