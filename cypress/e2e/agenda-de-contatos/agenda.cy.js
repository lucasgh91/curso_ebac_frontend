/// <reference types="cypress" />

describe('Testa as funcionalidades da aplicação "Agenda de Contatos"', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Teste de inclusão', () => {
        cy.get('input[type="text"]').type('João da Silva')
        cy.get('input[type="email"]').type('meu@email.com')
        cy.get('input[type="tel"]').type('48 99999-9999')
        cy.get('button[type="submit"]').click()
        cy.get('.contato').contains('João da Silva')
    })

    it('Teste de alteração', () => {
        cy.get('button[class="edit"]').first().click()
        cy.get('input[type="text"]').clear().type('Nome alterado')
        cy.get('input[type="email"]').clear().type('alterado@email.com')
        cy.get('input[type="tel"]').clear().type('48 11111-1111')
        cy.get('button[type="submit"][class="alterar"]').click()
        cy.contains('Nome alterado')
    })

    it('Teste de exclusão', () => {
        cy.get('.contato').should("have.length.at.least", 1)
        cy.get('button[class="delete"]').each((_, index) => {
            cy.get('button[class="delete"').eq(index).click()
        })
        cy.get('.contato').should("have.length", 0)
    })
})