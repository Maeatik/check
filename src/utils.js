export function wait(delay) {
	return new Promise(function(resolve) {
		setTimeout(resolve, delay);
	});
}


export function formatDate(date) {
	let DD = date.getDate();
	if (DD < 10)
		DD = '0' + DD;
	let MM = date.getMonth() + 1;
	if (MM < 10)
		MM = '0' + MM;
	let YYYY = date.getFullYear();
	let mm = date.getMinutes();
	if (mm < 10)
		mm = '0' + mm;
	let hh = date.getHours();
	if (hh < 10)
		hh = '0' + hh;

	return `${YYYY}-${MM}-${DD} ${hh}:${mm}`;
}

export function formatInputTime(date) {
	let mm = date.getMinutes();
	if (mm < 10)
		mm = '0' + mm;
	let hh = date.getHours();
	if (hh < 10)
		hh = '0' + hh;
	return `${hh}:${mm}`;
}
