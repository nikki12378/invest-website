document.getElementById("investNow").addEventListener("click", () => {
    const paytmNumber = "8148574815";
    const redirectUrl = navigator.userAgent.match(/Mobi/i) 
        ? `paytmmp://pay?pa=${paytmNumber}&pn=OurCompany` 
        : `https://paytm.com/qr?pa=${paytmNumber}&pn=OurCompany`;

    window.location.href = redirectUrl;
});
