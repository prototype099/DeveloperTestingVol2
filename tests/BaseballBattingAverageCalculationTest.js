

$(document).ready(function(){

	module("Part 1");

	test("打率が計算できる（打率=安打数/打数）", function(){
		equal( baseball.calcBattingAverage(3,2,1), "0.500", "3打席2打数1安打 = 打率0.500");
	});

	test("打率は小数第四位で四捨五入される（切り捨てる場合）", function(){
		equal(baseball.calcBattingAverage(3,3,1), "0.333", "3打席3打数1安打 = 打率0.333");
	});

	test("打率は小数第四位で四捨五入される(切り上げる場合)", function(){
		equal(baseball.calcBattingAverage(3,3,2), "0.667", "3打席3打数2安打 = 打率0.667");
	});

});
