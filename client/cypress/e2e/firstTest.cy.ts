describe('Login Form', () => {
  it('successfully logs in', () => {
    // Visit the page where the login form is located
    cy.visit('http://localhost:5173/');

    // Fill in the email and password fields
    // Replace 'user@example.com' and 'yourpassword' with the credentials you want to test
    cy.get('input[name="email"]').type('gabe@mata.com');
    cy.get('input[name="password"]').type('gabe');

    // Submit the form
    // This can be done either by clicking the login button or by submitting the form directly
    // If the button has a unique identifier, use it. Otherwise, you can submit the form as shown below.

    // Option 1: Click the login button if it has a unique identifier (e.g., id, class, data-testid)
    // cy.get('button').click(); // Adjust the selector as needed to target the login button specifically

    // Option 2: Submit the form directly if the button does not have a unique identifier or as an alternative approach
    // This assumes the form has a unique class name or other identifiable attribute
    cy.get('.auth-form').submit();

    
    // Wait for the URL to change to the dashboard
    cy.url().should('include', '/dashboard');

    // Add assertions here to verify the login was successful
    // This could be checking for the presence of a logout button, a welcome message, or any other element that indicates a successful login
    // Example:
    // cy.get('[data-testid="logout-button"]').should('exist');
    cy.contains('button', 'Add recipe', { timeout: 3000 }).should('be.visible');

    cy.contains('button', 'Add recipe').click();

    // Wait for the URL to change to /create-recipe
    cy.url().should('include', '/create-recipe');

    // Assert that the text "on the menu" is visible on the page
    cy.contains('on the menu').should('be.visible');
  });
});
