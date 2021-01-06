export const subscriptionFields = {
	t: 1,
	ts: 1,
	ls: 1,
	lr: 1,
	name: 1,
	fname: 1,
	rid: 1,
	code: 1,
	f: 1,
	u: 1,
	open: 1,
	alert: 1,
	roles: 1,
	unread: 1,
	prid: 1,
	userMentions: 1,
	groupMentions: 1,
	archived: 1,
	audioNotifications: 1,
	audioNotificationValue: 1,
	desktopNotifications: 1,
	mobilePushNotifications: 1,
	emailNotifications: 1,
	unreadAlert: 1,
	_updatedAt: 1,
	blocked: 1,
	blocker: 1,
	autoTranslate: 1,
	autoTranslateLanguage: 1,
	disableNotifications: 1,
	hideUnreadStatus: 1,
	muteGroupMentions: 1,
	ignored: 1,
	E2EKey: 1,
	tunread: 1,
	tunreadGroup: 1,
	tunreadUser: 1,
	v: 1,
};

export const roomFields = {
	_id: 1,
	name: 1,
	fname: 1,
	t: 1,
	cl: 1,
	u: 1,
	lm: 1,
	// usernames: 1,
	topic: 1,
	announcement: 1,
	announcementDetails: 1,
	muted: 1,
	unmuted: 1,
	_updatedAt: 1,
	archived: 1,
	jitsiTimeout: 1,
	description: 1,
	default: 1,
	customFields: 1,
	lastMessage: 1,
	retention: 1,
	prid: 1,
	avatarETag: 1,
	usersCount: 1,

	// @TODO create an API to register this fields based on room type
	livechatData: 1,
	tags: 1,
	sms: 1,
	facebook: 1,
	code: 1,
	joinCodeRequired: 1,
	open: 1,
	v: 1,
	label: 1,
	ro: 1,
	reactWhenReadOnly: 1,
	sysMes: 1,
	sentiment: 1,
	tokenpass: 1,
	streamingOptions: 1,
	broadcast: 1,
	encrypted: 1,
	e2eKeyId: 1,
	departmentId: 1,
	servedBy: 1,
	priorityId: 1,
	transcriptRequest: 1,

	// fields used by DMs
	usernames: 1,
	uids: 1,
};