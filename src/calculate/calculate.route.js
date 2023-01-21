const { Router } = require("express");
const app = Router();

app.post("/calculate", async (req, res) => {
  const { AnnualInstalmentAmount, RateofInterest, TotalNumberofYears } =
    req.body;
  try {

     let i=RateofInterest/100
     let  s=(1+i)
      let p=(s**TotalNumberofYears)-1
    let TotalMaturityValue = AnnualInstalmentAmount*(p/i);
     
    let TotalInvestmentAmount = AnnualInstalmentAmount * TotalNumberofYears;
    TotalInterestGained = TotalMaturityValue - TotalInvestmentAmount;

    return res.send(
     { TotalMaturityValue,
      TotalInvestmentAmount,
      TotalInterestGained
    }
    );
  } catch (e) {
    res.send(e.message);
  }
});

module.exports=app;