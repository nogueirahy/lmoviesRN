import moment from 'moment';

const formatDate = date => moment(date).format('MMM Do YY');

export default { formatDate };
