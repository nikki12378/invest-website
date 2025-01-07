// Paytm Button Functionality
document.getElementById("paytmBtn").addEventListener("click", function() {
  const paytmUrl = `https://paytm.me/8148574815`;
  window.open(paytmUrl, "_blank");
});

// Google Pay Button Functionality
document.getElementById("googlePayBtn").addEventListener("click", function() {
  const upiId = "8148574815@upi";
  const googlePayUrl = `upi://pay?pa=${upiId}&pn=Investment&cu=INR`;
  window
