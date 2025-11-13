// App.js

// --- IMPORTS ---
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button,
  FlatList // Import FlatList / FlatList'i import et
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import our new component / Yeni bileşenimizi import edelim
import TodoItem from './components/TodoItem';

// ... (export default function App() ... state'ler ... ve handler fonksiyonları aynı kalıyor) ...
export default function App() {
  
  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  
  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    if (enteredTaskText.trim().length === 0) {
      return;
    }
    setTasks((currentTasks) => [
      ...currentTasks,
      { text: enteredTaskText, id: Math.random().toString() },
    ]);
    setEnteredTaskText('');
  }

  // --- JSX (RENDER) ---
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.contentContainer}>
        
        <Text style={styles.title}>Benim Todo Listem</Text> 
        
        {/* --- Input Area --- */}
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput}
            placeholder="Yeni görev ekle..."
            onChangeText={taskInputHandler}
            value={enteredTaskText}
          />
          <Button 
            title="Ekle" 
            onPress={addTaskHandler}
          />
        </View>

        {/* --- List Area --- / --- Liste Alanı --- */}
        {/* We replace the old View with a new one for the list / Eski View'i liste için yenisiyle değiştiriyoruz */}
        <View style={styles.listContainer}>
          {/* FlatList component to render our tasks / Görevlerimizi render edecek FlatList bileşeni */}
          <FlatList
            data={tasks} // The array of data to render / Render edilecek veri dizisi (bizim state'imiz)
            
            // How to render each item / Her bir elemanın nasıl render edileceği
            renderItem={({ item }) => ( // 'item' is each object in the 'tasks' array / 'item', 'tasks' dizisindeki her bir objedir
              <TodoItem text={item.text} /> // Pass the text to our TodoItem component / Metni TodoItem bileşenimize iletiyoruz
            )}
            
            // How to get a unique key for each item / Her eleman için benzersiz bir 'key' nasıl alınır
            keyExtractor={(item) => {
              return item.id; // Use the 'id' we created / Oluşturduğumuz 'id'yi kullan
            }}
            
            // What to show when the list is empty / Liste boşken ne gösterilecek
            ListEmptyComponent={<Text style={styles.emptyText}>Henüz görev yok. Bir tane ekle!</Text>}
          />
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginRight: 10,
    fontSize: 16,
  },

  // --- NEW STYLES for Part 3 --- / --- Bölüm 3 için YENİ STİLLER ---
  
  listContainer: {
    flex: 5, // Give the list container 5 times more space than the input (if input had flex: 1) / Liste alanına daha çok yer ver
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888', // A gray color / Gri bir renk
  },
});