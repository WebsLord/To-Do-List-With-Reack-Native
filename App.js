// App.js

// --- IMPORTS ---
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button,
  FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoItem from './components/TodoItem';

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

  // --- NEW FUNCTION for Part 4 --- / --- Bölüm 4 için YENİ FONKSİYON ---
  /**
   * Deletes a task based on its ID.
   * ID'sine göre bir görevi siler.
   * @param {string} id - The id of the task to be deleted. / Silinecek görevin ID'si.
   */
  function deleteTaskHandler(id) {
    // We update the state by filtering out the item with the matching id
    // State'i, eşleşen id'ye sahip elemanı filtreleyerek (dışarıda bırakarak) güncelliyoruz
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
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

        {/* --- List Area --- */}
        <View style={styles.listContainer}>
          <FlatList
            data={tasks}
            
            // --- UPDATED renderItem for Part 4 --- / --- Bölüm 4 için GÜNCELLENEN renderItem ---
            renderItem={({ item }) => (
              <TodoItem 
                text={item.text} // Pass the text / Metni ilet
                id={item.id} // Pass the id / ID'yi ilet
                onDelete={deleteTaskHandler} // Pass the delete function / Silme fonksiyonunu ilet
              />
            )}
            
            keyExtractor={(item) => {
              return item.id;
            }}
            ListEmptyComponent={<Text style={styles.emptyText}>Henüz görev yok. Bir tane ekle!</Text>}
          />
        </View>
        
      </View> {/* <-- HATA BURADAYDI, DÜZELTİLDİ / THE ERROR WAS HERE, IT'S FIXED */}
    </SafeAreaView>
  );
}

// --- STYLING ---
// (All styles are the same as Part 3) / (Tüm stiller Bölüm 3 ile aynı)
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
  listContainer: {
    flex: 5,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});