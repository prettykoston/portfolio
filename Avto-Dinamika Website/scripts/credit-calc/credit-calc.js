const infoInitialFee = document.querySelector(".info--initial-fee");
const totalFee = document.getElementById("fee-total");

const updateCreditInfo = function () {
  totalFee.addEventListener("input", function () {
    infoInitialFee.innerText = totalFee.value;
  });
};

export default updateCreditInfo;
