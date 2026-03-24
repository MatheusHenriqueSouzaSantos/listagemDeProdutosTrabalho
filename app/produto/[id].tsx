import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { products } from "../index";

export default function DetalheProduto(){
    const {id}=useLocalSearchParams();
    const product=products.find((produto)=>produto.id==id)
    return(
        <View style={styles.container}>
            <Text style={styles.textNameProduct}>{`${product?.name}`}</Text>
            <Text style={styles.textPriceProduct}>{`${product?.preco}R$`}</Text>
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
        marginLeft: 150
    }
})