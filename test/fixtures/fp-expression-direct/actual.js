import _ from 'lodash/fp';

const method1 = _.identity || _.noop;
const method2 = _.noop ? _.map : _.filter;

_.noop;

(something ? _.pick : _.omit)(() => {}, obj);
