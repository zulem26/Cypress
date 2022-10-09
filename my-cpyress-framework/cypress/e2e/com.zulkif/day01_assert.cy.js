describe('Amazon', () =>{

it('Test Case 1', () =>{

    cy.visit('https://amazon.com')


    cy.get('#twotabsearchtextbox').type('iphone')
    //type() yazı gondermek ıcın kullanılır
    // arama kutusuna iphone yaz 

    cy.get('#nav-search-submit-button').click()
    //click ledik

    //ASSERT

    //'include'
    cy.url().should('include', "iphone")
    // url 'iphone' iceriyor mu

    //'be.visible'
    cy.get('.a-color-state').should('be.visible')
    //locate edilen yerde metin var mı veya gorunur mu

    //'have.text'
    cy.get('#p_n_cpf_eligible-title > .a-size-base').should('have.text', 'Climate Pledge Friendly')
    //locate edilen yerdeki metinde 'Climate' yazıyor mu

    //should('eq')
    cy.title().should('eq', 'Amazon.com : iphone')


    //should('include.text'
    cy.get('#p_n_cpf_eligible-title > .a-size-base').should('include.text', 'Climate Pledge Friendly')



})





})