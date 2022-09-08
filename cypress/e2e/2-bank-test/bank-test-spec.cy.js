describe('bank test', () => {
    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/')
    })

    it('username or password is invalid', () => {
        //preenche campos de email e senha.
        cy.get('input[name="email"]').first().type('teste@teste.com');
        cy.get('input[name="password"]').first().type('teste123');

        //clica do botão de acessar
        cy.get('button[type="submit"]').first().click();

        //valida de a messagem de erro foi presentada.
        cy.contains('Usuário ou senha inválido.');
    })
})