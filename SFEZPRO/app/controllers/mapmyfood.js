var utils = require("utils");
function openVendorList() {
	utils.replaceCentralView({
		view : Alloy.createController('/vendorList').getView(),
		title : "Vendor List"
	});
}
