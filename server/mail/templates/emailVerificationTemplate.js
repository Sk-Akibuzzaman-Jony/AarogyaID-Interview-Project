const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
		<style>
		</style>
	
	</head>
	
	<body>
		<div class="container">
			${otp}
	</body>
	
	</html>`;
};
module.exports = otpTemplate;