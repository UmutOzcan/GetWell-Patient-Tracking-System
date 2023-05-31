// error codeu bannerda daha okunaklı görmek için
export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz mail adresi !';

    case 'auth/email-already-exists':
      return 'Kullanıcı zaten kayıtlı !';

    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı !';

    case 'auth/weak-password':
      return 'Parola çok zayıf !';

    case 'auth/email-already-in-use':
      return 'Kullanıcı zaten var !';

    case 'auth/wrong-password':
      return 'Parola geçersiz !';

    default:
      return errorCode;
  }
}
