describe("Employee Directory [000]", function(){
  context("Home 'page' [001]", function(){
    beforeEach(function(){
      cy.visit('http://localhost:8081');
    })

    it("Load the page [002]", function(){
    })

    it("Have a header [003]", function(){
      cy.get("h1").should("contain", "Employee Directory")
    })

    it("Have the search box [004]", function(){
      cy.get("input[type='search']").should("exist")
    })

    it("Can search for James King [005]", function(){
      cy
        .get("input[type='search']")
          .type("James King", {delay: 200})
          .should("have.value", "James King")
    })
  })

  context("Employee Detail 'Page' (James King) [006]", function() {
    beforeEach(function(){
      cy.visit('http://localhost:8081/#employees/0');
    })

    it("Has proper header [007]", function(){
      cy.get("h1")
        .should("contain", "Employee")
    })

    it("Has employee name [008]", function(){
      cy.get("h1").eq(1)
        .should("contain", "James")
        .should("contain", "King")
    })

    it("Has employee photo [009]", function(){
      cy.get("img")
        .should("have.attr", "src")
        .and("match", /King/)
    })

    it("Has employee office number that is hyperlinked [00a]", function(){
      var phoneNumber = '781-000-0001'
      cy.get("ul.table-view li:nth-child(2)")
        .should("contain", phoneNumber)
        .find("a[href='tel:" + phoneNumber + "']")
    })

    it("Has employee mobile number that is hyperlinked [00b]", function(){
      var mobileNumber = '617-000-0001'
      cy.get("body > div > div > div > ul > li:nth-child(3)  a > div > p")
        .should("contain", mobileNumber)
      cy.get("body > div > div > div > ul > li:nth-child(3) a[href='tel:" + mobileNumber + "']") 
    })

    it("Has employee SMS number that is hyperlinked [00c]", function(){
      var smsNumber = '617-000-0001'
      cy.get("body > div > div > div > ul > li:nth-child(4)  a > div > p")
        .should("contain", smsNumber)
      cy.get("body > div > div > div > ul > li:nth-child(4) a[href='sms:" + smsNumber + "']") 
    })

  });
});