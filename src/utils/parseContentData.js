// firabase dbden dönen datayı düzenleyip listeye atar
export default function (data) {
  return Object.keys(data).map(key => {
    return {
      id: key,
      ...data[key],
    };
  });
}
