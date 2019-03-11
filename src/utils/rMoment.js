import moment from 'moment-timezone';

let tzOffset;
const setup = (_tzOffset) => {
	tzOffset = _tzOffset;
};

const rMoment = (mom) => {
	const newMom = moment(mom);
	if(tzOffset) {
		newMom.tz(tzOffset);
	}
	return newMom;
}
const isMoment = moment.isMoment

export {
	setup,
	rMoment,
	isMoment
}
