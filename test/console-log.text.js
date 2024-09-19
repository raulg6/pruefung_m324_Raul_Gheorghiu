import { expect } from 'chai';
import sinon from 'sinon';
import chalk from 'chalk';

describe('Console log color test', function () {
  it('should log blue text to the console', function () {
    const consoleLogSpy = sinon.spy(console, 'log');
    const expectedText = 'it works';
    const blueText = chalk.blue(expectedText);

    console.log(blueText);

    const [loggedText] = consoleLogSpy.getCall(0).args;

    consoleLogSpy.restore();

    expect(loggedText).to.equal(blueText);
  });
});
