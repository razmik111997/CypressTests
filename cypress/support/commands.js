//
//
// -- This is a parent command --


//function for random name generation
// //Cypress.Commands.add('generateRandomName', (length) => { 
//      let result = '';
//       const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//       const charactersLength = characters.length;
//       let counter = 0;
//       while (counter < length) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         counter += 1;
//       }
//       return `test${result}`;
//   }) 
  

// //Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { 

// //})
// //
// //
// // -- This will overwrite an existing command --
// //  Cypress.Commands.overwrite('visit', (originalFn, url, options) => { 


// //  })
Cypress.Commands.add('openHomePage', () => {
    cy.visit(Cypress.env("globalUrl"));
})