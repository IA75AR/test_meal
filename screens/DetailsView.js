import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function DetailsView () {
  
    return (
      <>
        <View style={styles.container}>
            <Text>DetailsView</Text>
            <StatusBar style="auto" />
        </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#add8e6",
      alignItems: 'center',
      justifyContent: 'center',
    }
  });