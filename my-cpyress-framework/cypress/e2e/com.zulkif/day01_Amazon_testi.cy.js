describe('Amazon Testi', ()=>{
    it('Test 1', ()=>{

    cy.visit('https://amazon.com/')
    // sayfaya gider

    cy.get('#twotabsearchtextbox').type('iphone')
    //type() yazı gondermek ıcın kullanılır
    // arama kutusuna iphone yaz 

    cy.get('#nav-search-submit-button').click()
    //click ledik

})











})