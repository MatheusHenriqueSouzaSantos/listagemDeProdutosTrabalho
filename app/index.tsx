import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useCallback, useContext, useRef } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { CartContext, Item } from "./context/CartContext";

export const products : Item[]= [
 { id: '1', name: 'Notebook', preco: 3000 },
 { id: '2', name: 'Mouse', preco: 100 },
 { id: '3', name: 'Teclado', preco: 200 },
];

export default function Index() {
  const {width}=useWindowDimensions();
  const isMobile=width<768;
  const contexto = useContext(CartContext);
  if(contexto==null){
    throw new Error("Use context needs a provider")
  }

  const renderCount=useRef(0);

  renderCount.current+=1

  const {addToCart}=contexto

  const lookProductDetails=useCallback(()=>{
    
  },[])

  return (
    <View>
      <FlatList 
        data={products}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>
        <View style={styles.container}>
          <Text style={styles.textStyle}>{`${item.name} - ${item.preco}R$`}</Text>
          <View style={styles.buttonsContainer}>
            <Link href={`../produto/${item.id}`} style={styles.eyeLink} >
              <FontAwesome5 size={25} name="eye"/> 
            </Link>
            <TouchableOpacity style={styles.addButton} onPress={()=>addToCart(item)}>
              <FontAwesome5 size={25} name="plus"/> 
            </TouchableOpacity>
          </View>    
        </View> }/>
        <View style={[styles.viewRenderizationCount,{
            left: isMobile ? "20%" : "73%",
            top: isMobile ? 735 : 815,
        }]}>
          <Text style={styles.textRenderizationCount}>{`Render Count: ${renderCount.current}`}</Text>
        </View>
        <Link href={"./Cart"} style={[styles.linkShoppingCart,{
          left: isMobile ? "80%" : "93%",
          top: isMobile ? 720 : 800,
        }]}>
          <FontAwesome5 size={30} name="shopping-cart"/>
        </Link>
      </View>    
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
   eyeLink: {
    marginRight: 15
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  viewRenderizationCount:{
    position: "absolute",
    backgroundColor: "#763dd9",
    borderRadius: 15,
    width: 220,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  textRenderizationCount: {
    fontSize: 27
  },
  linkShoppingCart: {
    position: "absolute",
    backgroundColor: "#763dd9",
    borderRadius: "50%",
    width: 65,
    height: 65,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
