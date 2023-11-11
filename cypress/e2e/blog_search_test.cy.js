import { blogSearchElements } from '../support/elements/blog_search_elements';

describe('Pesquisa no Blog do Agi', () => {
  beforeEach(() => {
    cy.get(blogSearchElements.searchButton).click();
  });

  it('Pesquisa Básica', () => {
    cy.get(blogSearchElements.searchField).type(
      `${blogSearchElements.searchTermBasic}{enter}`,
      { force: true },
    );
    cy.url().should(
      'include',
      encodeURIComponent(blogSearchElements.searchTermBasic),
    );
    cy.get('.post').should('exist');
  });

  it('Pesquisa com Termo Não Encontrado', () => {
    cy.get(blogSearchElements.searchField).type(
      `${blogSearchElements.searchTermNotFound}{enter}`,
      { force: true },
    );
    cy.url().should('include', `/?s=${blogSearchElements.searchTermNotFound}`);
    cy.get(blogSearchElements.noResultTitle).should(
      'contain',
      blogSearchElements.noResultText,
    );
  });

  it('Pesquisa com Caracteres Especiais', () => {
    cy.get(blogSearchElements.searchField).type(
      `${blogSearchElements.searchTermSpecialCharacters}{enter}`,
    );
    cy.url().should(
      'include',
      encodeURIComponent(blogSearchElements.searchTermSpecialCharacters),
    );
    cy.get(blogSearchElements.noResultTitle).should(
      'contain',
      blogSearchElements.noResultText,
    );
  });

  it('Pesquisa Sensível a Maiúsculas e Minúsculas', () => {
    cy.get(blogSearchElements.searchField).type(
      `${blogSearchElements.searchTermCaseSensitive}{enter}`,
    );
    cy.url().should(
      'include',
      encodeURIComponent(blogSearchElements.searchTermCaseSensitive),
    );
    cy.get('.post').should('exist');
  });
});
