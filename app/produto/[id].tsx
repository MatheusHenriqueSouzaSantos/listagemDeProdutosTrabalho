import { FontAwesome5 } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CartContext } from "../context/CartContext";
import { products } from "../index";

export default function DetalheProduto(){
    const context=useContext(CartContext)
    const router=useRouter()
    if(context==null){
    throw new Error("Use context needs a provider")
    }
    const {addToCart} =context
    const {id}=useLocalSearchParams();
    const product=products.find((product)=>product.id==id)
    if(product==null){
        throw new Error("Product not found")
    }
    return(
        <View style={styles.container}>
            <Text style={styles.textNameProduct}>{`${product?.name}`}</Text>
            <Text style={styles.textPriceProduct}>{`${product?.preco}R$`}</Text>
            <TouchableOpacity style={styles.addButton} onPress={()=>{addToCart(product)
                router.replace("/")
            }}>
                <FontAwesome5 size={25} name="plus"/> 
            </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: "#763dd9",
        width: 380,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
        height: 80,
        marginLeft: 10,
        borderRadius: 12
    },
    textNameProduct: {
        fontSize: 27,
        marginLeft: 10
    },
    textPriceProduct:{
        fontSize: 27,
        marginLeft: 20
    },
    addButton:{
        position: "absolute",
        left: 340
  },
})