describe('My First Test', ()=>{

    it('URL Testi', ()=>{
        cy.visit('https://www.google.com/')

        cy.url().should('include', 'www.google.com')    
    })

    
    it('Title Test', ()=>{
        cy.visit('https://www.google.com/')
        cy.title().should('eq', 'Google')
    })
})