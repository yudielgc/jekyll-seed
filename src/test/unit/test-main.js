var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/Specs\.js$/.test(file)) {
			tests.push(file);
		}
	}
}