import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 8,
    marginTop: 15,
    marginBottom: 15,
    marginHorizontal: 30,
    height: 80,

    borderWidth: 1,
  },

  inner_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 3,
  },

  outer_container: {
    marginLeft: -4,
  },

  user: {fontWeight: 'bold', color: 'black'},

  date: {fontWeight: 'bold', color: 'black', fontSize: 10},

  exercise: {},

  pill: {},
});
