describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  });

  it('loginAndCompra', function() {
    describe('Automação de Testes - Swag Labs', () => {
      
      beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
      })
    
      it('Cenário 1: Login com sucesso e verificação visual', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        
        cy.get('[data-test="login-button"]').click()
    
        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text', 'Products')
        
        cy.screenshot('resultado-login') 
      })
    
      it('Cenário 2: Adicionar item ao carrinho de compras', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    
        cy.get('.shopping_cart_badge').should('have.text', '1')
        
        cy.get('.shopping_cart_link').click()
        cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
        
        cy.screenshot('resultado-carrinho')
      })
    
      it('Cenário 3: Fluxo de Logout', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
    
        cy.get('[data-test="login-button"]').should('be.visible')
        
        cy.screenshot('resultado-logout')
      })
    })
  });
})