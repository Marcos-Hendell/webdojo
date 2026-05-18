import { getTodayDate } from "../support/utils"

// Agrupa os testes relacionados à funcionalidade de Login
describe('Login', () => {


  // Define um caso de teste com o nome "Deve logar com sucesso"
  it('Deve logar com sucesso', () => {
    // Executa um comando customizado chamado "submeterLogin"
    // passando dois parâmetros: email e senha
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana123')

    // Seleciona o elemento que possui o atributo data-cy="user-name"
    cy.get('[data-cy="user-name"]')

      // Verifica se o elemento está visível na tela
      .should('be.visible')

      // Verifica se o texto exibido é exatamente "Fernando Papito"
      .and('have.text', 'Fernando Papito')

    // Seleciona o elemento que possui o atributo data-cy="welcome-message"
    cy.get('[data-cy="welcome-message"]')

      // Verifica se o elemento está visível
      .should('be.visible')

      // Verifica se o texto exibido é exatamente o esperado
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
////////////////////////////////////////////////////////////////////////////////
    cy.getCookie('login_date').should((cookie) => {
      expect(cookie.value).to.eq(getTodayDate())
    })

    cy.window().then((win) => {
      const token = win.localStorage.getItem('token')
      expect(token).to.match(/^[a-fA-F0-9]{32}$/)
    })

  })
///////////////////////////////////////////////////////////////////////////////////
  it('Não deve logar com a senha inválida', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'atana123')
    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })
  it('Não deve logar com e-mail não cadastrado ', () => {
    cy.start()
    cy.submitLoginForm('400@webdojo.com', 'katana123')
    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
})

