import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CartContext } from "./context/CartContext";


export default function Cart(){
    const cartContext=useContext(CartContext);
    const itens=cartContext?.itens;
    const total=cartContext?.cartTotal;
    
    return(
        <View>
            <FlatList 
            data={itens}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>
                <View style={styles.container}>
                <Text style={styles.textStyle}>{`${item.name} - ${item.preco}R$`}</Text>
                </View>    
            }/>
            {itens?.length==0 && 
            <View style={styles.viewEmptyContent}>
                <Text style={styles.textStyle} >Carrinho Vazio</Text>    
            </View>}
            <View style={[styles.totalView,{
                left: "45%" ,
                top:  420 
            }]}>
                <Text style={styles.textStyle}>{`Total: ${total} R$`}</Text>
            </View>
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
  totalView:{
    backgroundColor: "#763dd9",
    width: 200,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: 15,
  },
  viewEmptyContent: {
    backgroundColor: "#763dd9",
    width: 200,
    height: 50,
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 15
  }
});