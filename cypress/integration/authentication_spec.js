///<reference types='cypress'/>

import * as Start from '../support/tasks/Start';

describe('Login', () => {
  it('Login User', () => {
    Start.withLogin();
  });
});
