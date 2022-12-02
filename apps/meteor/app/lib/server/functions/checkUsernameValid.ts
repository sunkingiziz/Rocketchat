const phoneRegex = new RegExp('^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$');

export const checkUsernameValid = (username: string) => {
	if (!phoneRegex.test(username)) {
		// throw new Meteor.error('error-blocked-username', 'Not valid phonenumber'),{
		// 	method: 'checkUserNameValid',
		// 	field: username,
		// }
		return false;
	}
	return true;
};
