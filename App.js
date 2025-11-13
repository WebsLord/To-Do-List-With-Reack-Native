// App.js

// Import necessary modules / Gerekli modülleri import edelim
import { StyleSheet, Text, View } from 'react-native';
// We use SafeAreaView to avoid the notch on iOS / iOS'teki çentik ve alt bar ile çakışmamak için SafeAreaView kullanıyoruz [cite: 23, 29]
import { SafeAreaView } from 'react-native-safe-area-context';

// This is our main App component / Bu bizim ana App bileşenimiz
export default function App() {
  return (
    // styles.appContainer is the main wrapper / styles.appContainer ana sarmalayıcımız
    <SafeAreaView style={styles.appContainer}>
      {/* A content container to keep things tidy / İçeriği düzenli tutmak için bir içerik konteyneri */}
      <View style={styles.contentContainer}>
        {/* The title of our app / Uygulamamızın başlığı */}
        <Text style={styles.title}>My Todo List</Text> 
        {/* Input area will go here / Girdi alanı buraya gelecek */}
        {/* List area will go here / Liste alanı buraya gelecek */}
      </View>
    </SafeAreaView>
  );
}

// --- STYLING --- / --- STİLLEME ---
// All our styles are defined here / Tüm stillerimiz burada tanımlanıyor
const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // Make the app container take the full screen / Konteynerin tüm ekranı kaplamasını sağla
    backgroundColor: '#f0f2f5', // A light gray background for the whole app / Tüm uygulama için açık gri bir arka plan [cite: 45]
  },
  contentContainer: {
    flex: 1, // Also make this fill the available space / Burası da mevcut alanı doldursun
    padding: 20, // Give the content some padding / İçeriğe biraz padding verelim [cite: 49]
    paddingTop: 40, // More padding at the top / Üstten biraz daha fazla boşluk
  },
  title: {
    fontSize: 24, // Big font size for the title / Başlık için büyük font boyutu [cite: 52]
    fontWeight: 'bold', // Make it bold / Kalın yapalım
    marginBottom: 20, // Space below the title / Başlığın altına boşluk [cite: 54]
    textAlign: 'center', // Center the text / Metni ortala [cite: 55]
  },
});