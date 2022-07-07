import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';


export default function SelectionView () {

    const [meal, setMeal] = useState([]);

    useEffect(() => {

        fetch("https://playground.devskills.co/api/rest/meal-roulette-app/meals")
            .then((response) => response.json())
            .then((json) => {setMeal(json)
                console.log(json);
        })

    }, [])
  
    return (
      <>
        <View style={styles.container}>
            <Text>SelectionView</Text>
            <View>
                <Text>{meal}</Text>
            </View>
            <StatusBar style="auto" />
        </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
    }
  });