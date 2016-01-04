describe("Employee Directory [000]", function(){
  context("Home 'page' [001]", function(){
    beforeEach(function(){
      cy.visit('http://localhost:8081');
    })

    it("Should load the page [002]", function(){
    })

    it("Should have a header [003]", function(){
      cy.get("h1").should("contain", "Employee Directory")
    })

    it("Should have the search box [004]", function(){
      cy.get("input[type='search']").should("exist")
    })

    it("Should be able to search for James King [005]", function(){
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

    it("Employee detail page has proper header [007]", function(){
      cy.get("h1")
        .should("contain", "Employee")
    })

    it("Should have employee name [008]", function(){
      cy.get("h1").eq(1)
        .should("contain", "James")
        .should("contain", "King")
    })

    it("Should have employee photo [009]", function(){
      cy.get("img[src='pics/James_King.jpg']").should("exist")
    })

    it("Should have employee office number that is hyperlinked [00a]", function(){
      var phoneNumber = '781-000-0001'
      cy.get("body > div > div > div > ul > li:nth-child(2)  a > div > p")
        .should("contain", phoneNumber)
      cy.get("body > div > div > div > ul > li:nth-child(2) a[href='tel:" + phoneNumber + "']").should("exist") 
    })

    it("Should have employee mobile number that is hyperlinked [00b]", function(){
      var mobileNumber = '617-000-0001'
      cy.get("body > div > div > div > ul > li:nth-child(3)  a > div > p")
        .should("contain", mobileNumber)
      cy.get("body > div > div > div > ul > li:nth-child(3) a[href='tel:" + mobileNumber + "']").should("exist") 
    })

    it("Should have employee SMS number that is hyperlinked [00c]", function(){
      var smsNumber = '617-000-0001'
      cy.get("body > div > div > div > ul > li:nth-child(4)  a > div > p")
        .should("contain", smsNumber)
      cy.get("body > div > div > div > ul > li:nth-child(4) a[href='sms:" + smsNumber + "']").should("exist") 
    })

  });
});