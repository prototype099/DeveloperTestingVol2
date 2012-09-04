
// Global Object
window.baseball = {}

/**
	box : 打席数
	bat : 打数
	hit : 安打数
**/
baseball.calcBattingAverage = function(box, bat, hit){

	if (box == 0)
		return undefined;

	if (bat == 0)
		return 0.000;
	
	var avg = hit / bat;

	return avg.toFixed(3);
	
}

baseball.toStringBattingAverage = function(box, bat, hit) {
	
	var avg = this.calcBattingAverage(box, bat, hit);

	if (avg === undefined)
		return "----";
	
	if (avg == 1)
		return 1.00;

	return avg.replace(/^0\./, ".");
}
