import {StyleSheet} from 'react-native';

// base style tanımlandı, buttonun dönen theme ögesine göre overwrite edildi
const base_style = StyleSheet.create({
  container: {
    borderRadius: 25,
    padding: 10,
    marginTop: 15,
    marginBottom: 20,
    marginHorizontal: 30,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderStartWidth: 5,
    borderEndWidth: 5,
  },

  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

// aşağıdaki ...base_style, ile yukarıdaki yapıyı alıp virgülden sonrasını üstüne overwrite eder

export default {
  // primary button tanımı
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: '#79C4B4',
      borderColor: 'gray',
    },

    text: {
      ...base_style.text,
      color: 'white',
    },
  }),

  // secondary button tanımı
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
      borderColor: '#79C4B4',
    },

    text: {
      ...base_style.text,
      color: '#000',
    },
  }),
};
