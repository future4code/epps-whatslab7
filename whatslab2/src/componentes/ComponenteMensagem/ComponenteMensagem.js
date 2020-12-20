import React from "react";

export default class ComponenteMensagem extends React.Component {
  state = {
    //---------------------------------------------------------
    // Array de usuario e mensagens
    mensagens: [],
    //---------------------------------------------------------
    //Valores de estado dos inputs
    valorInputUsuario: "",
    valorInputMensagem: ""
  };
  
  render() {
    const componentesMensagens = this.state.mensagens.map((mensagem) => {
      return (
        <p>
          {mensagem.usuario}: {mensagem.textoMensagem}
        </p>
      );
    });
    return <div></div>;
  }
}
