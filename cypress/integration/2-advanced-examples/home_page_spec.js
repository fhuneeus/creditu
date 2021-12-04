describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/'),

      //Testing if the About us and Home buttons work properly
      //When clicking on About us route should redirect to /about, and clicking on home should 
      //redirect to /
      cy.get('.navigationlinks').get('#aboutUs').click().url().should('include','/about');
      cy.get('.navigationlinks').get('#Home').click().url().should('not.contain', '/about');

    
      //Testing the Next and previous buttons
      //Next button starting from the beginning should show players 21-40 and 41-60
      //Prev button starting from page 3 should show players 21-40 and 1-20
      cy.get('#nextButton').click().get('#dataTable').should('contain','21').should('contain','40');
      cy.get('#nextButton').click().get('#dataTable').should('contain','41').should('contain','60');

      cy.get('#prevButton').click().get('#dataTable').should('contain','21').should('contain','40');
      cy.get('#prevButton').click().get('#dataTable').should('contain','1').should('contain','20');

      //Loading all players and testing the search for two different keywords
      cy.get('.loadallplayers').click();
      cy.wait(4000);

      //Testing sjlzxeo keyword and finding exact coincidence
      cy.get('#searchValue').type('sjlzxeo');
      cy.get('#searchBtn').click();
      cy.get('#dataTable').should('contain','sjlzxeo');

      //Testing fzpusgc keyword and finding exact coincidence
      cy.get('#searchValue').clear().type('fzpusgc');
      cy.get('#searchBtn').click();
      cy.get('#dataTable').should('contain','fzpusgc');

      //Testing asd keyword
      cy.get('#searchValue').clear().type('asd');
      cy.get('#searchBtn').click();
      cy.get('#dataTable').should('contain','asd');

      
    

    })
  })