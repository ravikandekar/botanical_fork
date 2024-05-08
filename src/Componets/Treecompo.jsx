// import React from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// const DATA = [
//     { id: '1', title: 'Banyan Tree', image: require('../Assets/Trees/b3.png'), description: 'A banyan, frequently written “banian,” is a type of fig that grows auxiliary trunks from accidental prop roots, enabling the tree to grow endlessly. It sets banyans apart from other trees with a strangling habit that emerges from their seed in a crack. The term “banyan” is frequently used to refer exclusively to Ficus benghalensis, also known as the “Indian banyan,” which is the national tree of India. However, it has also been used systematically to refer to the subgenus Urostigma' },
//     { id: '2', title: 'Neem Tree', image: require('../Assets/Trees/b7.png'),description: 'A banyan, frequently written “banian,” is a type of fig that grows auxiliary trunks from accidental prop roots, enabling the tree to grow endlessly. It sets banyans apart from other trees with a strangling habit that emerges from their seed in a crack. The term “banyan” is frequently used to refer exclusively to Ficus benghalensis, also known as the “Indian banyan,” which is the national tree of India. However, it has also been used systematically to refer to the subgenus Urostigma' },
//     { id: '3', title: 'Peepal Tree ', image: require('../Assets/Trees/b8.png'),description: 'A banyan, frequently written “banian,” is a type of fig that grows auxiliary trunks from accidental prop roots, enabling the tree to grow endlessly. It sets banyans apart from other trees with a strangling habit that emerges from their seed in a crack. The term “banyan” is frequently used to refer exclusively to Ficus benghalensis, also known as the “Indian banyan,” which is the national tree of India. However, it has also been used systematically to refer to the subgenus Urostigma' },
//     { id: '4', title: 'Deodar Tree', image: require('../Assets/Trees/b6.png'),description: 'A banyan, frequently written “banian,” is a type of fig that grows auxiliary trunks from accidental prop roots, enabling the tree to grow endlessly. It sets banyans apart from other trees with a strangling habit that emerges from their seed in a crack. The term “banyan” is frequently used to refer exclusively to Ficus benghalensis, also known as the “Indian banyan,” which is the national tree of India. However, it has also been used systematically to refer to the subgenus Urostigma' },
//     { id: '5', title: 'Sandal Tree', image: require('../Assets/Trees/b5.png'),description: 'A banyan, frequently written “banian,” is a type of fig that grows auxiliary trunks from accidental prop roots, enabling the tree to grow endlessly. It sets banyans apart from other trees with a strangling habit that emerges from their seed in a crack. The term “banyan” is frequently used to refer exclusively to Ficus benghalensis, also known as the “Indian banyan,” which is the national tree of India. However, it has also been used systematically to refer to the subgenus Urostigma' },
//     { id: '6', title: 'Coconut Tree', image: require('../Assets/Trees/b4.png'),description: 'A banyan, frequently written “banian,” is a type of fig that grows auxiliary trunks from accidental prop roots, enabling the tree to grow endlessly. It sets banyans apart from other trees with a strangling habit that emerges from their seed in a crack. The term “banyan” is frequently used to refer exclusively to Ficus benghalensis, also known as the “Indian banyan,” which is the national tree of India. However, it has also been used systematically to refer to the subgenus Urostigma' },
//     { id: '7', title: 'Iron wood Tree', image: require('../Assets/Trees/b1.png'),description: 'A banyan, frequently written “banian,” is a type of fig that grows auxiliary trunks from accidental prop roots, enabling the tree to grow endlessly. It sets banyans apart from other trees with a strangling habit that emerges from their seed in a crack. The term “banyan” is frequently used to refer exclusively to Ficus benghalensis, also known as the “Indian banyan,” which is the national tree of India. However, it has also been used systematically to refer to the subgenus Urostigma' },
//     { id: '8', title: 'Khejri Tree', image: require('../Assets/Trees/b2.png'),description: 'A banyan, frequently written “banian,” is a type of fig that grows auxiliary trunks from accidental prop roots, enabling the tree to grow endlessly. It sets banyans apart from other trees with a strangling habit that emerges from their seed in a crack. The term “banyan” is frequently used to refer exclusively to Ficus benghalensis, also known as the “Indian banyan,” which is the national tree of India. However, it has also been used systematically to refer to the subgenus Urostigma' },
// ];



// const Treecompo = ({ navigation }) => {
//     const renderItem = ({ item }) => (
//         <TouchableOpacity style={styles.card} onPress={() => handlelogin(item)}>
//             <View><Image source={item.image} style={styles.image} /></View>

//             <View style={styles.textwrap}>
//                 <Text style={styles.title}>{item.title}</Text>
//             </View>

//         </TouchableOpacity>
//     );
//     const handlelogin = (data) => {

//         navigation.navigate('PlatsDetails', data);
//     }
//     return (
//         <View style={styles.container}>
//             <LinearGradient
//                 colors={['#01595A', 'rgba(115, 115, 115, 0)']}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 0 }}
//                 style={styles.gradient}
//             >
//                 <Text style={styles.text}>TREE</Text>
//             </LinearGradient>
//             <FlatList
//                 data={DATA}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//                 numColumns={2}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         // alignItems: 'center',
//         paddingHorizontal:10
        





//     },
//     card: {
//         backgroundColor: '#FFF',
//         borderRadius: 10,
//         elevation: 3,
//         shadowOffset: { width: 1, height: 1 },
//         shadowColor: '#333',
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
//         margin: 8,
//         width: '45%',
      




//     },
//     title: {
//         fontSize: 18,
//         paddingVertical: 10,
//         textAlign: 'center',
//         color: '#fff'


//     },
//     image: {
//         width: '100%',
//         height: 160, // Adjust the height as needed
//         borderTopLeftRadius: 8,
//         borderTopRightRadius: 8,
//         resizeMode: "cover",
//         top: 2,

//     },
//     textwrap: {
//         alignItems: 'center',
//         backgroundColor: '#01595A',
//         width: '100%',
//         borderBottomLeftRadius: 10,
//         borderBottomRightRadius: 10,
//     },

//     text: {
//         fontSize: 20,
//         fontWeight: "bold",
//         color: '#fff',
//     },
//     gradient: {
//         width: '60%',
//         height: 50,
//         justifyContent: 'center',
//         alignSelf: 'flex-start',
//         marginHorizontal: 10,
//         padding: 10,
//         marginTop: 55
//     },
// });

// export default Treecompo;



import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Treecompo = ({ navigation }) => {
    const [treeData, setTreeData] = useState([]);
   
    useEffect(() => {
        
        const fetchData = async () => {
            const token = await AsyncStorage.getItem('token');
           
            try {
              
                const response = await axios.post('https://botinical.com.sumagodemo.com/api/auth/get-tress-list', {},{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                setTreeData(response.data.data);
               
            } catch (error) {
                console.error('Error fetching tree data:', error);
            }
        };
        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => viewdetails(item)}>
            <View><Image source={{ uri: item.image }} style={styles.image} /></View>
            <View style={styles.textwrap}>
                <Text style={styles.title}>{item.english_name}</Text>
            </View>
        </TouchableOpacity>
    );

    const viewdetails = (data) => {
        navigation.navigate('PlatsDetails', data);
    };

 
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#01595A', 'rgba(115, 115, 115, 0)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                <Text style={styles.text}>TREE</Text>
            </LinearGradient>
            <FlatList
                data={treeData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        margin: 8,
        width: '45%',
    },
    title: {
        fontSize: 18,
        paddingVertical: 10,
        textAlign: 'center',
        color: '#fff'
    },
    image: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        resizeMode: "cover",
    },
    textwrap: {
        alignItems: 'center',
        backgroundColor: '#01595A',
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff',
    },
    gradient: {
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginHorizontal: 10,
        padding: 10,
        marginTop: 55
    },
});

export default Treecompo;
