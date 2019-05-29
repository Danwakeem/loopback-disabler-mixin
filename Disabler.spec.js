const sandbox = require("sinon").createSandbox();
const Disabler = require("./Disabler");

describe("Disabler", () => {
  let Model;
  let disable;

  beforeEach(() => {
    disable = sandbox.spy();
    Model = {
      disableRemoteMethodByName: disable
    };
  });

  afterEach(() => sandbox.restore());

  it("should do nothing if the options are not set", () => {
    Disabler(Model);
    disable.callCount.should.equal(0);
  });

  it("should do nothing if the options object does not have a type", () => {
    Disabler(Model, {});
    disable.callCount.should.equal(0);
  });

  it("should do nothing if the options object has an invalid type", () => {
    Disabler(Model, { type: "invalid" });
    disable.callCount.should.equal(0);
  });

  it("should do call disable 7 times for limited", () => {
    Disabler(Model, { type: "limited" });
    disable.callCount.should.equal(7);
  });

  it("should do call disable 18 times for limited", () => {
    Disabler(Model, { type: "model" });
    disable.callCount.should.equal(18);
  });

  it("should call disable 8 times with relation for relation type", () => {
    Disabler(Model, { type: "relation", relation: "blah" });
    disable.callCount.should.equal(8);
  });

  it("should not call disable if relation is undefined for relation type", () => {
    Disabler(Model, { type: "relation" });
    disable.callCount.should.equal(0);
  });
});
