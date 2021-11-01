var $container = document.getElementById("IUAfinance29");
$container.style.width = "240";
$container.querySelector(".IUAfinance_block").style.backgroundColor = "rgb(238, 238, 238)";
$container.querySelector(".IUAfinance_block").style.borderColor = "rgb(17, 102, 204)";
$container.querySelector(".IUAfinance_block").style.color = "rgb(0, 0, 0)";
$container.querySelector(".IUAfinance_content").style.backgroundColor = "rgb(255, 255, 255)";
$container.querySelector(".IUAfinance_title").style.color = "rgb(17, 102, 204)";
$container.querySelector("#IUAfinanceLink").style.color = "rgb(17, 102, 204)";

if (typeof(iFinance) == "undefined") {
    if (typeof(iFinanceData) == "undefined") {
        document.write('<scr' + 'ipt src="//i.i.ua/js/i/finance_informer.js?1" type="text/javascript" charset = "windows-1251"></scr' + 'ipt>');
        iFinanceData = [];
    }
    iFinanceData.push({b:15, c:[840,978,643], enc:2, lang:0, p:29, ver2: true});
} else {
    window['oiFinance29'] = new iFinance(2);
    window['oiFinance29'].gogo({b:15, c:[840,978,643], enc:2, lang:0, p:29});
}