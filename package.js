Package.describe({
	summary: "D3-based renderer for Dagre",
	version: "1.0.3",
	git: "https://github.com/perak/dagre-d3.git"
});

// Before Meteor 0.9?
if(!Package.onUse) Package.onUse = Package.on_use;

Package.onUse(function (api) {
	if(api.versionsFrom) {
		api.versionsFrom('METEOR@0.9.0');
	}

	api.use("d3");

	api.add_files('lib/dagre-d3.js', "client");
	api.export('dagreD3', "client");
});
