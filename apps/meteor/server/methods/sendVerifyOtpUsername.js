import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

import { Users } from '../../app/models/server';
import { settings } from '../../app/settings/server';
import { SystemLogger } from '../lib/logger/system';

Meteor.methods({
	sendVerifyOtpUsername(to) {
		check(to, String);

		const username = to.trim().toLowerCase();

		const user = Users.findOneByUsername(username, { fields: { _id: 1 } });

		if (!user) {
			return true;
		}

		if (user.services && !user.services.password) {
			if (!settings.get('Accounts_AllowPasswordChangeForOAuthUsers')) {
				return false;
			}
		}

		try {
			
			return true;
		} catch (error) {
			SystemLogger.error(error);
		}
	},
});
