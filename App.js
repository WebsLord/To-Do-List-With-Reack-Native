// App.js

// --- IMPORTS --- / --- IMPORTLAR ---
import { useState } from 'react'; // React'tan useState hook'unu import et / Import useState hook from React
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, // Metin girişi için / For text input
  Button     // Buton için / For the button
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  
  // --- STATE MANAGEMENT --- / --- STATE YÖNETİMİ ---
  
  // State for the text currently in the input field / Giriş alanındaki mevcut metin için state
  // [value, functionToUpdate] / [değer, güncellemeFonksiyonu]
  const [enteredTaskText, setEnteredTaskText] = useState('');
  
  // State for the list of tasks (starts as an empty array) / Görev listesi için state (boş bir dizi olarak başlar)
  const [tasks, setTasks] = useState([]);
  
  // --- HANDLER FUNCTIONS --- / --- İŞLEV FONKSİYONLARI ---

  /**
   * Called every time the text in the TextInput changes.
   * TextInput her değiştiğinde çağrılır.
   * @param {string} enteredText - The new text from the input. / Input'tan gelen yeni metin.
   */
  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText); // Update the state with the new text / State'i yeni metinle güncelle
  }

  /**
   * Called when the "Add" button is pressed.
   * "Ekle" butonuna basıldığında çağrılır.
   */
  function addTaskHandler() {
    // Basic validation: If the input is empty, do nothing.
    // Basit doğrulama: Eğer girdi boşsa, hiçbir şey yapma.
    if (enteredTaskText.trim().length === 0) {
      return; // Exit the function / Fonksiyondan çık
    }

    // Update the tasks array with the new task.
    // Görevler dizisini yeni görevle güncelle.
    // We use a function form to get the 'previous state' (currentTasks).
    // 'Önceki state'i' (currentTasks) almak için fonksiyon formunu kullanıyoruz.
    setTasks((currentTasks) => [
      ...currentTasks, // Spread operator (...) to copy all old tasks / Eski görevleri kopyalamak için spread operatörü (...)
      // Add the new task as an object
      // Yeni görevi bir obje olarak ekle
      { text: enteredTaskText, id: Math.random().toString() },
    ]);
    
    // Clear the input field after adding
    // Ekledikten sonra giriş alanını temizle
    setEnteredTaskText('');
  }

  // --- JSX (RENDER) ---
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.contentContainer}>
        
        <Text style={styles.title}>Benim Todo Listem</Text> 
        
        {/* --- Input Area --- / --- Girdi Alanı --- */}
        {/* This view holds the text input and the button side-by-side / Bu view, text input ve butonu yan yana tutar */}
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput}
            placeholder="Yeni görev ekle..."
            onChangeText={taskInputHandler} // Connects to our handler function / Handler fonksiyonumuza bağlanır
            value={enteredTaskText} // Binds the input's value to our state / Input'un değerini state'imize bağlar
          />
          <Button 
            title="Ekle" 
            onPress={addTaskHandler} // Connects to our "add" function / "Ekle" fonksiyonumuza bağlanır
          />
        </View>

        {/* --- List Area (Placeholder) --- / --- Liste Alanı (Yer Tutucu) --- */}
        <View>
          <Text>Görev Listesi Buraya Gelecek...</Text>
          {/* List area will go here / Liste alanı buraya gelecek */}
        </View>
        
      </View>
    </SafeAreaView>
  );
}

// --- STYLING ---
const styles = StyleSheet.create({
  appContainer: {
    flex: 1, 
    backgroundColor: '#f0f2f5', 
  },
  contentContainer: {
    flex: 1, 
    padding: 20, 
    paddingTop: 40, 
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center', 
  },
  
  // --- NEW STYLES for Part 2 --- / --- Bölüm 2 için YENİ STİLLER ---
  
  inputContainer: {
    flexDirection: 'row', // Arrange children side-by-side / Öğeleri yan yana diz
    justifyContent: 'space-between', // Space them out / Aralarına boşluk koy
    alignItems: 'center', // Align them vertically in the center / Dikeyde ortala
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
  },
  textInput: {
    flex: 1, // Take up as much space as possible / Mümkün olduğunca çok yer kapla
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginRight: 10, // Space between input and button / Input ve buton arasına boşluk
    fontSize: 16,
  },
});