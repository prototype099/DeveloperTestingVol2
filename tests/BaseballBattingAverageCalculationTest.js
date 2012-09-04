

$(document).ready(function(){

	module("BaseballBattingAverageCalculationTest.js");

	// Part 1
	test("打率が計算できる（打率=安打数/打数）", function(){
		equal( baseball.calcBattingAverage(3,2,1), "0.500", "3打席2打数1安打 = 打率0.500");
		equal( baseball.calcBattingAverage(3,2,0), "0.000", "3打席2打数0安打 = 打率0.000");
	});

	test("打率は小数第四位で四捨五入される（切り捨てる場合）", function(){
		equal(baseball.calcBattingAverage(3,3,1), "0.333", "3打席3打数1安打 = 打率0.333");
	});

	test("打率は小数第四位で四捨五入される(切り上げる場合)", function(){
		equal(baseball.calcBattingAverage(3,3,2), "0.667", "3打席3打数2安打 = 打率0.667");
	});


	// Part2
	test("打席数が0の場合、打率計算しない（undefined）", function(){
		equal(baseball.calcBattingAverage(0,1,1), undefined, "打席数が0のときはundefinedを返す");
	});


	// Part3
	test("打席数が0でなく打数が0の場合は0.000と計算", function(){
		equal(baseball.calcBattingAverage(3,0,0), "0.000", "打席数が0でなく打数が0の場合 = 0.000");
		equal(baseball.calcBattingAverage(3,0,1), "0.000", "打席数が0でなく打数が0の場合2 = 0.000");
	});


	// Part4
	test("選手の打率を整形表示（0.333 -> .333）",function(){
		equal(baseball.toStringBattingAverage(3,3,1), ".333", "打率を整形表示（0.333 -> .333）");
	});

	test("選手の打率を整形表示（10割の場合は 1.00）", function(){
		equal(baseball.toStringBattingAverage(1,1,1), "1.00", "打率を整形表示（打率10割 -> 1.00）");
	});	
	
	test("選手の打率を整形表示（打率計算しない場合は ---- と出力）", function(){
		equal(baseball.toStringBattingAverage(0,0,0), "----", "打率を整形表示(打率計算しない場合 -> ----）");
	});	


	
});
