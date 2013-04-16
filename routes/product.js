
/*
 * GET images listing.
 */

exports.list = function(req, res){
	var images = [];
	for(var i=1; i<= 10; i++) {
		images.push("images/image_" + i + ".jpg");
	}
	res.json(images)
};