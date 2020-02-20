// const ampUrl =
//   "http://localhost/pf/sample-page/?outputType=amp";
// describe("Amp validation", () => {
//   it("should be AMP compliant", () => {
//     cy.visit(ampUrl, {
//       onBeforeLoad: win => {
//         win.onerror = null;
//       }
//     })
//       .window()
//       .then(win => {
//         const amphtmlValidator = require("amphtml-validator");
//         const html = win.document.documentElement.outerHTML;
//         return amphtmlValidator.getInstance().then(validator => {
//           return validator.validateString(html);
//         });
//       })
//       .then(results => {
//         expect(results.errors.length).to.equal(0);
//       });
//   });
// });
