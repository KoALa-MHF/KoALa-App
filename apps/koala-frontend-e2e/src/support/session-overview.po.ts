export const getCreateSessionNameField = () => cy.get('[data-cy="create-session-name-input"');
export const pressCreateSessionButton = () => getCreateSessionButton().click();
export const getCreateSessionButton = () => cy.get('[data-cy="session-create-btn"]');
export const pressDialogCreateSessionButton = () => getDialogCreateSessionButton().click();
export const getDialogCreateSessionButton = () => cy.get('[data-cy="session-create-dialog-create-btn"]');

//table operations
export const getSessionOverviewTableRows = () => cy.get('[data-cy="session-overview-table"]').find('tr');
export const getSessionOverviewTableRow = (row: number) => getSessionOverviewTableRows().eq(row);

export const pressAllDeleteSessionButtons = () => {
  getSessionOverviewTableRows().then((rows) => {
    if (rows.length > 1) {
      cy.get('[data-cy="session-overview-delete-btn"]', {}).each((button) => {
        cy.wrap(button).click();
      });
    }
  });
};

export const pressDeleteOneSession = (row: number) => {
  let counter = 0;
  cy.get('[data-cy="session-overview-delete-btn"]', {}).each((button) => {
    if (counter === row) {
      cy.wrap(button).click();
    }
    counter++;
  });
};

export const pressEditOnSession = (row: number) => {
  let counter = 0;
  cy.get('[data-cy="session-overview-settings-btn"]', {}).each((button) => {
    if (counter === row) {
      cy.wrap(button).click();
    }
    counter++;
  });
};
