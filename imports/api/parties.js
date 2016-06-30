import { Mongo } from 'meteor/mongo';

const Parties = new Mongo.Collection('parties');

Parties.allow({
  insert(userId, party) {
    return userId && party.owner === userId;
  },

  update(userId, party, fields, modifier) {
    return userId && party.owner === userId;
  },

  remove(userId, party) {
    return userId && party.owner === userId;
  },
});

export default Parties;
