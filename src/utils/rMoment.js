import moment from 'moment';

let tzOffset;
const setup = (_tzOffset) => {
	tzOffset = _tzOffset;
};

const rMoment = (mom) => {
	const newMom = moment(mom);
	if(tzOffset) {
		newMom.utcOffset(tzOffset);
	}
	return newMom;
}
const isMoment = moment.isMoment

export {
	setup,
	rMoment,
	isMoment
}
