$(document).ready(function() {

	var ad = '<iframe border="0" scrolling="no" style="border:none" width="200" height="200" src="http://upload.wikimedia.org/wikipedia/en/8/86/Shift_MSNBC_logo.jpg"><iframe>';

	// Example logic to serve ad 50% of the time.
	var rand = parseInt(Math.random() * 2);
	if (rand == 1) {
		$('.ad-target').html(ad);
		parent.$(parent.document).trigger("adserve", ['ad1']);
	}
});

