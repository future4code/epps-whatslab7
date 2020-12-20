import styled from 'styled-components'
import React from 'react'
// import './App.css';

const MainContainer = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
height: 100vh;
width: 70%;
box-sizing: border-box;
margin: 0 auto;
border: 2px solid black;
`

const AreaChat = styled.div`
flex-grow: 1;
display: flex;
flex-direction: column-reverse;
`

const AreaFormulario = styled.div`
display: flex;
height: 50px;
width: 100%;
`
const InputUsuario = styled.input`
width: 150px;

`
const InputMensagem = styled.input`
flex-grow: 1;
`

const BtnEnviar = styled.button`
width: 100px;
`

const ExibicaoMsg = styled.div`
box-sizing: border-box;
border:1px solid red;
margin: 8px;
`

const StyleUsuario = styled.p`
margin: 0;
`

const StyleMsg = styled.p`
margin: 0;
`

class App extends React.Component {
  state = {
    //---------------------------------------------------------
    // Array de usuario e mensagens
    mensagens: [
      {
        usuario: 'Bruno',
        textoMensagem: 'Mensagem'
      },
      {
        usuario: 'Monica',
        textoMensagem: 'Mensagem'
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
    const novoMensagens = [novaMensagem, ...this.state.mensagens];
    this.setState({ mensagens: novoMensagens, valorInputMensagem: '' });
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
        <ExibicaoMsg>
          <StyleUsuario>{mensagem.usuario}:</StyleUsuario>
          <StyleMsg>{mensagem.textoMensagem}</StyleMsg>
        </ExibicaoMsg>
      );
    });

    return (
      <MainContainer>
        <AreaChat>{componentesMensagens}</AreaChat>
        <AreaFormulario>
          <InputUsuario
            placeholder="Usuario"
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
          />
          <InputMensagem
            placeholder="Mensagem"
            value={this.valorInputMensagem}
            onChange={this.onChangeInputTexto}
          />
          <BtnEnviar onClick={this.adicionaMensagem}>Enviar</BtnEnviar>
        </AreaFormulario>
      </MainContainer>
    )
  };
}
export default App;
