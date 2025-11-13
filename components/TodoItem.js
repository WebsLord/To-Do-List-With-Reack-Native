// components/TodoItem.js

// Import Pressable / Pressable'ı import et
import { StyleSheet, Text, View, Pressable } from 'react-native';

/**
 * Receives 'text', 'id', and 'onDelete' as props.
 * 'text', 'id', ve 'onDelete' proplarını alır.
 */
export default function TodoItem({ text, id, onDelete }) {
  return (
    // Wrap the View in a Pressable component
    // View'i bir Pressable bileşeni ile sarmala
    <Pressable
      // Call the onDelete function (passed from App.js) with the item's id
      // onDelete fonksiyonunu (App.js'ten gelen) bu elemanın id'si ile çağır
      onPress={() => onDelete(id)} //
      
      // We can use a function in 'style' to give feedback when pressed
      // Basıldığında geri bildirim vermek için 'style' içinde bir fonksiyon kullanabiliriz
      style={({ pressed }) => [ //
        styles.taskItem, //
        pressed && styles.pressedItem, // Apply this style only if 'pressed' is true / Sadece 'pressed' true ise bu stili uygula
      ]}
    >
      {/* We removed the outer View, Pressable takes its place / Dıştaki View'i kaldırdık, Pressable onun yerini aldı */}
      <Text style={styles.taskText}>{text}</Text>
    </Pressable>
  );
}

// --- STYLING ---
const styles = StyleSheet.create({
  taskItem: {
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  taskText: {
    fontSize: 16,
  },

  // --- NEW STYLE for Part 4 --- / --- Bölüm 4 için YENİ STİL ---
  pressedItem: {
    opacity: 0.5, // Make it semi-transparent when pressed / Basıldığında yarı şeffaf yap
    backgroundColor: '#dddddd', // Give it a slight gray background / Hafif bir gri arka plan ver
  },
});