'use strict';

module.exports = {
    'should split message with splitting expr users[*].name': require('./1.json'),
    'should split message with splitting expr users[*].friends[*].name': require('./2.json')
};