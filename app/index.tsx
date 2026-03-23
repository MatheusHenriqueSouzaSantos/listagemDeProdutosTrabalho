import { FontAwesome5 } from "@expo/vector-icons";
import { useContext } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CartContext, Item } from "./context/CartContext";
export const products : Item[]= [
 { id: '1', nome: 'Notebook', preco: 3000 },
 { id: '2', nome: 'Mouse', preco: 100 },
 { id: '3', nome: 'Teclado', preco: 200 },
];

export default function Index() {
  const contexto = useContext(CartContext);
  if(contexto==null){
    throw new Error("Use context needs a provider")
  }
  const {addToCart}=contexto
  return (
      <FlatList 
        data={products}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>
        <View style={styles.container}>
          <Text style={styles.textStyle}>{`${item.nome} - ${item.preco}R$`}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.eyeButton} >
              <FontAwesome5 size={25} name="eye"/> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={()=>addToCart(item)}>
              <FontAwesome5 size={25} name="plus"/> 
            </TouchableOpacity>
          </View>    
        </View> }/>
  );
}

const styles=StyleSheet.create({
  container:{
    backgroundColor: "#763dd9",
    width: 380,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    height: 80,
    marginLeft: 10,
    borderRadius: 12
  },
  textStyle: {
    fontSize: 27,
    marginLeft: 10
  },
  addButton:{
    marginRight: 10
  },
   eyeButton: {
    marginRight: 15
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
