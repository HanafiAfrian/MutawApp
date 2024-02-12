import React, { Component, useEffect } from 'react';
import { style } from './Style'

import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';

class Authotpresend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama_lengkap: '',
            email_pribadi: '',
            telepon: '',
            otphp: '',
            listData: [],
            idEdit: null,
        };
        this.url = "http://192.168.100.113/mutawifapi/otplogin.php";
    }
    componentDidMount() {
        this.ambilListData()
    }
    async ambilListData() {
        await fetch(this.url)
            .then((response) => response.json())
            .then((json) => {
                console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
                this.setState({ listData: json.data.result });

                var otphp =  123456;
            })
            .catch((error) => {
                console.log(error);
            })
    }

    klikResenOtp() {


        var str = "1 2 3 4 5 6 7 8 9 0";
        var waktu = new Date().getMilliseconds();
        var waktu2 = new Date().getSeconds();
        var waktu3 = new Date().getMinutes();
        var waktu4 = new Date().getHours();
        var waktu5 = new Date().getDay();
        var every_word_im_shuffling = str.split(/\s\b(?!\s)/).sort(function() { return 0.2 - Math.random() }).join(+waktu + waktu2 + waktu3 + waktu4 + waktu5);
        console.log(every_word_im_shuffling);
        var res = every_word_im_shuffling.substring(0, 4);


        var waktu = new Date().getMilliseconds();

        if (this.state.nama_lengkap == 'jh' || this.state.email_pribadi == 'hjg') {
            alert('Silakan masukkan nama_lengkap dan email_pribadi');
        } else {
            if (this.state.idEdit) {
                var urlAksi = this.url + "/?op=update&id=" + this.state.idEdit;
            } 
              

                var nama_lengkap = this.state.nama_lengkap;
                var email_pribadi = this.state.email_pribadi;
                var telepon = this.state.telepon;
                alert('Kode OTP dikirimkan ke Telepon ' + telepon );

                setTimeout(() => {

                    this.props.navigation.replace('Otp', { itemId: res,  telepon: telepon, nama_lengkap: nama_lengkap, email_pribadi: email_pribadi })
                }, 2000);

            


            fetch(urlAksi, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                     body: "nama_lengkap=" + this.state.nama_lengkap + "&email_pribadi=" + this.state.email_pribadi + "&telepon=" + this.state.telepon + "&otp=" + res
                })
                .then((response) => response.json())
                .then((json) => {

                    this.setState({ nama_lengkap: '' });
                    this.setState({ email_pribadi: '' });
                    this.setState({ telepon: '' });

                    this.ambilListData();


                })
        }
    }
    async klikEdit(id) {
        await fetch(this.url + "/?op=detail&id=" + id)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ nama_lengkap: json.data.result[0].nama_lengkap });
                this.setState({ email_pribadi: json.data.result[0].email_pribadi })
                this.setState({ telepon: json.data.result[0].telepon })
                this.setState({ idEdit: id })
               
                this.klikResenOtp()
            })
    }
    async klikDelete(id) {
        await fetch(this.url + "/?op=delete&id=" + id)
            .then((response) => response.json())
            .then((json) => {
                alert('Data berhasil didelete');
                this.ambilListData();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        

        return (
            
            <View style = {
                { backgroundColor: 'white', flex: 1 }
            } >
            <View>
            {
                this.state.listData.map((val,index)=>(
                    
                    <View key={index}>
                    <Text style={style.textListNama}>Kode Oakan dikirm Kenomor : {val.telepon}</Text>
                        <TextInput style={{width: 0, height: 0, backgroundColor:'#ffff'}}
                        
          
                        placeholder=""
                        value={this.state.telepon}
                        onChangeText={(text)=>this.setState({telepon:text})}
                        >                        
                    </TextInput>

                    <TextInput 
                    style={{width: 0, height: 0, backgroundColor:'#ffff'}}
                  
                        placeholder=""
                        value={this.state.nama_lengkap}
                        onChangeText={(text)=>this.setState({nama_lengkap:text})}
                        >                        
                    </TextInput>

                    <TextInput 
                    style={{width: 0, height: 0, backgroundColor:'#ffff'}}
                   
                    placeholder=""
                    value={this.state.email_pribadi}
                    onChangeText={(text)=>this.setState({email_pribadi:text})}
                    >                        
                </TextInput>
                  
                    <TouchableOpacity
                    style={styles.roundButton1}
                    onPress={()=>this.klikEdit(val.id)}>
                    <Text style={styles.btntext}>Send Code Otp</Text>
                  </TouchableOpacity>
                    </View>


                    
                ))
             
            }
           
        </View>
            { /* tengah */ }
			<View style = { styles.container } >

            <Text style = { styles.welcome } > RESEND OTP PAGE < /Text>

          

           
			
			< /View >

            { /* tengah */ }
			<View style = {
                { height: 40 }
            } >
           
			</View>
			< /View >

        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        color: '#19232b',
    },
    hiddenInput: {
        width: 0,
        height: 0,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: '#19232b',
        justifyContent: 'center',
        alignItems: 'center',
    },

    welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        color: '#c19737',
        fontSize: 24,
        fontFamily: 'Lato',
        fontWeight: 'bold',
    },

    logo: {
        width: 250,
        height: 50,
        marginTop: 5,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    roundButton1: {
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'orange',
    },

    bottext: {
        fontSize: 14,
        // color: 'white',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    bottext2: {
        fontSize: 14,
        textDecorationLine: 'underline',
        marginTop: 10,
        textAlign: 'center',
    },
});




export default Authotpresend;