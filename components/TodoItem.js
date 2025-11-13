// components/TodoItem.js

// Import necessary modules / Gerekli modülleri import edelim
import { StyleSheet, Text, View } from 'react-native';

/**
 * This component is responsible for displaying a single todo item.
 * Bu bileşen tek bir todo elemanını göstermekten sorumludur.
 * It receives the task text as a prop.
 * Görev metnini 'prop' olarak alır.
 */
export default function TodoItem({ text }) {
  return (
    // Each task is wrapped in a View with styling
    // Her görev, stillendirilmiş bir View ile sarmalanır
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{text}</Text>
    </View>
  );
}

// --- STYLING ---
const styles = StyleSheet.create({
  taskItem: {
    marginVertical: 5, // Space between items / Elemanlar arası dikey boşluk
    backgroundColor: 'white', // White background for each item / Her eleman için beyaz arka plan
    padding: 15, // Inner spacing / İç boşluk
    borderRadius: 8, // Rounded corners / Yuvarlatılmış köşeler
    elevation: 2, // Shadow for Android / Android için gölge
    shadowColor: '#000', // Shadow for iOS / iOS için gölge
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  taskText: {
    fontSize: 16, //
  },
});