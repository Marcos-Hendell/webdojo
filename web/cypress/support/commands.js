

import { getTodayDate } from './utils'
import 'cypress-real-events' // Importa plugin para simular eventos reais (mouse, teclado)
import './actions/consultancy.actions'
Cypress.Commands.add('start', () => {


    cy.visit('/') // Abre a aplicação no navegador

})

Cypress.Commands.add('submitLoginForm', (email, senha) => {

    cy.get('#email').type(email) // Digita o email no campo

    cy.get('#password').type(senha) // Digita a senha no campo

    cy.contains('button', 'Entrar').click() // Clica no botão "Entrar"

})

Cypress.Commands.add('goTo', (buttonName, pageTitle) => {
    cy.contains('h4', buttonName) // Procura um h4 com o nome do botão/menu
        .should('be.visible') // Verifica se está visível
        .click() // Clica nele

    cy.contains('h1', pageTitle) // Procura um h1 com o título da página
        .should('be.visible') // Verifica se a página carregou
})



// Helpers
Cypress.Commands.add('login', (ui = false) => {
    if (ui == true) {
        cy.start() // Inicia o app
        cy.submitLoginForm('papito@webdojo.com', 'katana123') // Faz login com dados fixos  
    } else {
        const token = 'e1033d63a53fe66c0fd3451c7fd8f617'
        const loginDate = getTodayDate()


        cy.setCookie('login_date', loginDate)
        cy.visit('/dashboard', {
            onBeforeLoad(win) {
                win.localStorage.setItem('token', token)
            }
        })
    }


})