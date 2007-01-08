function day() {
	this.toString = dayToString;
	this.toDate = dayToDate;

	var sysDate = new Date();
        var localSince1970 = sysDate.getTime() - 60 * 1000 * sysDate.getTimezoneOffset();
	this.date = Math.floor(localSince1970 / (24 * 60 * 60 * 1000));
}

function dayToDate() {
        var sysDate = new Date();
	sysDate.setTime(this.date * (24 * 60 * 60 * 1000) + 60 * 1000 * sysDate.getTimezoneOffset());
	return sysDate;	
}

function dayToString() {
	return this.toDate().toString();
}
function getDay() {
	var aDay = new day();
	return aDay.toString()
}
