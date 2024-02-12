import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    viewWrapper:{
        flex:1
    },
    viewForm:{
        flex:2, 
        padding:10
    },
    viewData:{
        flex:4
    },
    hiddenInput: {
        width: 0,
        height: 0,
      },
    viewList:{
        flexDirection:'row',
        padding:5, 
        borderBottomWidth:1,
        borderBottomColor:'#dedede'
    },
    textListEmail:{
        flex:3,
        fontSize:20,
        fontWeight:'bold'
    },
    textListEdit:{
        color:'blue',
        marginRight:20
    },
    textListDelete:{
        color:'red'
    }
})