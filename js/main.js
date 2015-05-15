// Closes the sidebar menu
$("#menu-close").click(function (e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function (e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
/*
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
*/

//ajax get water reservoir data
$(function () {
	$.ajax({
		type: "GET",
		url: "http://128.199.223.114:10080",
		dataType: "jsonp",
		success: function (data) {

            //data.data[0] 石門水庫(新北、桃園、新竹)
            //data.data[1] 新山水庫(基隆)
            //data.data[2] 翡翠水庫(台北、新北)
            //data.data[3] 寶山水庫(新竹)
            //data.data[4] 寶山第二水庫(新竹)
            //data.data[5] 永和山水庫(新竹、苗栗)
            //data.data[6] 明德水庫(苗栗)
            //data.data[7] 鯉魚潭水庫(苗栗、台中)
            //data.data[8] 德基水庫(台中)
            //data.data[9] 石岡壩(台中)
            //data.data[10] 霧社水庫(南投)
            //data.data[11] 日月潭水庫(南投)
            //data.data[12] 仁義潭水庫(嘉義)
            //data.data[13] 蘭潭水庫(嘉義)
            //data.data[14] 烏山頭水庫(台南)
            //data.data[15] 曾文水庫(嘉義、台南)
            //data.data[16] 南化水庫(台南、高雄)
            //data.data[17] 阿公店水庫(高雄)
            //data.data[18] 牡丹水庫(屏東)

            var config = liquidFillGaugeDefaultSettings();
            for (var i = 0; i < data.data.length; i++) {
                  if(data.data[i].immediateStorage.replace('%','') <= 30){
            	// if(data.data[i].immediatePercentage.replace('%','') <= 30){
            		config.circleColor = "#FF7777";
            		config.textColor = "#FF4444";
            		config.waveTextColor = "#FFAAAA";
            		config.waveColor = "#FFDDDD";
            	}                  // else if(data.data[i].immediatePercentage.replace('%','') <= 60){
                        else if(data.data[i].immediateStorage.replace('%','') <= 60){
                          config.circleColor = "#808015";
                          config.textColor = "#555500";
                          config.waveTextColor = "#FFFFAA";
                          config.waveColor = "#AAAA39";
                    }
                    else {
                          config = liquidFillGaugeDefaultSettings();
                    }
                    config.waveAnimateTime = 2000;
                    config.waveHeight = 0.3;
                    config.waveCount = 1;
                  // loadLiquidFillGauge('fillgauge'+i, Number(data.data[i].immediatePercentage.replace('%','')), config);
                  loadLiquidFillGauge('fillgauge'+i, Number(data.data[i].immediateStorage.replace('%','')), config);
            };
            // var config1 = liquidFillGaugeDefaultSettings();
            // if(data.data[1].immediatePercentage.replace('%','') <= 30){
            // 	config1.circleColor = "#FF7777";
            // 	config1.textColor = "#FF4444";
            // 	config1.waveTextColor = "#FFAAAA";
            // 	config1.waveColor = "#FFDDDD";
            // }
            // else if(data.data[1].immediatePercentage.replace('%','') <= 60){
            // 	config1.circleColor = "#808015";
            // 	config1.textColor = "#555500";
            // 	config1.waveTextColor = "#FFFFAA";
            // 	config1.waveColor = "#AAAA39";
            // }
            // loadLiquidFillGauge("fillgauge1", Number(data.data[1].immediatePercentage.replace('%','')), config1);

            // var config2 = liquidFillGaugeDefaultSettings();
            // if(data.data[2].immediatePercentage <= 30){
            // 	config2.circleColor = "#FF7777";
            // 	config2.textColor = "#FF4444";
            // 	config2.waveTextColor = "#FFAAAA";
            // 	config2.waveColor = "#FFDDDD";
            // }
            // else if(data.data[2].immediatePercentage <= 60){
            // 	config2.circleColor = "#808015";
            // 	config2.textColor = "#555500";
            // 	config2.waveTextColor = "#FFFFAA";
            // 	config2.waveColor = "#AAAA39";
            // }
            // loadLiquidFillGauge("fillgauge2", Number(data.data[2].immediatePercentage.replace('%','')), config2);

            // var config3 = liquidFillGaugeDefaultSettings();
            // if(data.data[3].immediatePercentage <= 30){
            // 	config3.circleColor = "#FF7777";
            // 	config3.textColor = "#FF4444";
            // 	config3.waveTextColor = "#FFAAAA";
            // 	config3.waveColor = "#FFDDDD";
            // }
            // else if(data.data[3].immediatePercentage <= 60){
            // 	config3.circleColor = "#808015";
            // 	config3.textColor = "#555500";
            // 	config3.waveTextColor = "#FFFFAA";
            // 	config3.waveColor = "#AAAA39";
            // }
            // loadLiquidFillGauge("fillgauge3", Number(data.data[3].immediatePercentage.replace('%','')), config3);

            // var config4 = liquidFillGaugeDefaultSettings();
            
            // config4.circleColor = "#808015";
            // config4.textColor = "#555500";
            // config4.waveTextColor = "#FFFFAA";
            // config4.waveColor = "#AAAA39";
            
            // loadLiquidFillGauge("fillgauge4", Number(data.data[4].immediatePercentage.replace('%','')), config4);
            
            // var config5 = liquidFillGaugeDefaultSettings();
            // config5.circleColor = "#FF7777";
            // config5.textColor = "#FF4444";
            // config5.waveTextColor = "#FFAAAA";
            // config5.waveColor = "#FFDDDD";
            // loadLiquidFillGauge("fillgauge5", Number(data.data[5].immediatePercentage.replace('%','')), config5);
            // var config6 = liquidFillGaugeDefaultSettings();
            // config6.circleColor = "#FF7777";
            // config6.textColor = "#FF4444";
            // config6.waveTextColor = "#FFAAAA";
            // config6.waveColor = "#FFDDDD";
            // loadLiquidFillGauge("fillgauge6", Number(data.data[6].immediatePercentage.replace('%','')), config6);
            // var config7 = liquidFillGaugeDefaultSettings();
            // config7.circleColor = "#FF7777";
            // config7.textColor = "#FF4444";
            // config7.waveTextColor = "#FFAAAA";
            // config7.waveColor = "#FFDDDD";
            // loadLiquidFillGauge("fillgauge7", Number(data.data[7].immediatePercentage.replace('%','')), config7);
            // var config8 = liquidFillGaugeDefaultSettings();
            // config8.circleColor = "#808015";
            // config8.textColor = "#555500";
            // config8.waveTextColor = "#FFFFAA";
            // config8.waveColor = "#AAAA39";
            // loadLiquidFillGauge("fillgauge8", Number(data.data[8].immediatePercentage.replace('%','')), config8);
            // var config9 = liquidFillGaugeDefaultSettings();
            // config9.circleColor = "#808015";
            // config9.textColor = "#555500";
            // config9.waveTextColor = "#FFFFAA";
            // config9.waveColor = "#AAAA39";
            // loadLiquidFillGauge("fillgauge9", Number(data.data[9].immediatePercentage.replace('%','')), config9);
            // var config10 = liquidFillGaugeDefaultSettings();
            // if(data.data[10].immediatePercentage.replace('%','') <= 30){
            // 	config10.circleColor = "#FF7777";
            // 	config10.textColor = "#FF4444";
            // 	config10.waveTextColor = "#FFAAAA";
            // 	config10.waveColor = "#FFDDDD";
            // }
            // else if(data.data[10].immediatePercentage.replace('%','') <= 60){
            // 	config10.circleColor = "#808015";
            // 	config10.textColor = "#555500";
            // 	config10.waveTextColor = "#FFFFAA";
            // 	config10.waveColor = "#AAAA39";
            // }
            // loadLiquidFillGauge("fillgauge10", Number(data.data[10].immediatePercentage.replace('%','')), config10);
            // var config11 = liquidFillGaugeDefaultSettings();
            // loadLiquidFillGauge("fillgauge11", Number(data.data[11].immediatePercentage.replace('%','')), config11);
            // var config12 = liquidFillGaugeDefaultSettings();
            // loadLiquidFillGauge("fillgauge12", Number(data.data[12].immediatePercentage.replace('%','')), config12);
            // var config13 = liquidFillGaugeDefaultSettings();
            // loadLiquidFillGauge("fillgauge13", Number(data.data[13].immediatePercentage.replace('%','')), config13);
            // var config14 = liquidFillGaugeDefaultSettings();
            // loadLiquidFillGauge("fillgauge14", Number(data.data[14].immediatePercentage.replace('%','')), config14);
            // var config15 = liquidFillGaugeDefaultSettings();
            // loadLiquidFillGauge("fillgauge15", Number(data.data[15].immediatePercentage.replace('%','')), config15);
            // var config16 = liquidFillGaugeDefaultSettings();
            // loadLiquidFillGauge("fillgauge16", Number(data.data[16].immediatePercentage.replace('%','')), config16);
            // var config17 = liquidFillGaugeDefaultSettings();
            // loadLiquidFillGauge("fillgauge17", Number(data.data[17].immediatePercentage.replace('%','')), config17);
            // var config18 = liquidFillGaugeDefaultSettings();
            // loadLiquidFillGauge("fillgauge18", Number(data.data[18].immediatePercentage.replace('%','')), config18);
            // var config19 = liquidFillGaugeDefaultSettings();
            // loadLiquidFillGauge("fillgauge19", Number(data.data[19].immediatePercentage.replace('%','')), config19);
            // var config70 = liquidFillGaugeDefaultSettings();
            // loadLiquidFillGauge("fillgauge20", Number(data.data[20].immediatePercentage.replace('%','')), config70);








            // var config60 = liquidFillGaugeDefaultSettings();
            // config60.circleColor = "#FF7777";
            // config60.textColor = "#FF4444";
            // config60.waveTextColor = "#FFAAAA";
            // config60.waveColor = "#FFDDDD";
            // config60.circleThickness = 0.2;
            // config60.textVertPosition = 0.2;
            // config60.waveAnimateTime = 1000;
            // loadLiquidFillGauge("fillgauge60", Number(data.data[0].immediatePercentage.replace('%','')), config60);

            // var config70 = liquidFillGaugeDefaultSettings();
            // config70.circleColor = "#D4AB6A";
            // config70.textColor = "#553300";
            // config70.waveTextColor = "#805615";
            // config70.waveColor = "#AA7D39";
            // config70.circleThickness = 0.1;
            // config70.circleFillGap = 0.2;
            // config70.textVertPosition = 0.8;
            // config70.waveAnimateTime = 2000;
            // config70.waveHeight = 0.3;
            // config70.waveCount = 1;
            // loadLiquidFillGauge("fillgauge70", Number(data.data[2].immediatePercentage.replace('%','')), config70);

            // var config30 = liquidFillGaugeDefaultSettings();
            // config30.textVertPosition = 0.8;
            // config30.waveAnimateTime = 5000;
            // config30.waveHeight = 0.15;
            // config30.waveAnimate = false;
            // config30.waveOffset = 0.25;
            // config30.valueCountUp = false;
            // config30.displayPercent = false;
            // loadLiquidFillGauge("fillgauge30", Number(data.data[3].immediatePercentage.replace('%','')), config30);

            // var config40 = liquidFillGaugeDefaultSettings();
            // config40.circleThickness = 0.15;
            // config40.circleColor = "#808015";
            // config40.textColor = "#555500";
            // config40.waveTextColor = "#FFFFAA";
            // config40.waveColor = "#AAAA39";
            // config40.textVertPosition = 0.8;
            // config40.waveAnimateTime = 1000;
            // config40.waveHeight = 0.05;
            // config40.waveAnimate = true;
            // config40.waveRise = false;
            // config40.waveOffset = 0.25;
            // config40.textSize = 0.75;
            // config40.waveCount = 3;
            // loadLiquidFillGauge("fillgauge40", Number(data.data[14].immediatePercentage.replace('%','')), config40);

            // var config50 = liquidFillGaugeDefaultSettings();
            // config50.circleThickness = 0.4;
            // config50.circleColor = "#6DA398";
            // config50.textColor = "#0E5144";
            // config50.waveTextColor = "#6DA398";
            // config50.waveColor = "#246D5F";
            // config50.textVertPosition = 0.52;
            // config50.waveAnimateTime = 5000;
            // config50.waveHeight = 0;
            // config50.waveAnimate = false;
            // config50.waveCount = 2;
            // config50.waveOffset = 0.25;
            // config50.textSize = 1.2;
            // config50.minValue = 30;
            // config50.maxValue = 150
            // config50.displayPercent = false;
            // loadLiquidFillGauge("fillgauge50", Number(data.data[15].immediatePercentage.replace('%','')), config50);
      }
});
});
