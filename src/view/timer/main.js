import {useState} from 'react';
import {Text, View, Button } from 'react-native';
import {Audio} from 'expo-av';
import { styles } from './style';


export default function Timer()
{
    const [done, setDone] = useState('Preparando');
    const [timeID, setTimeID] = useState();
    const [running, setRunning] = useState(false);

    const uri = require('../../media/mp3/bell.mp3');
    

    // Recebe os valores de tempo máximo e mínimo
    // em minutos e os convertem para segundos
    function set_time(min, max)
    {
        return Math.floor(Math.random() *
            ((max*60) - (min*60) + 1) + (min*60));
    }

    // Dispara o sino quando o setTimeout
    // atingir o valor determinado pela
    // função set_time
    async function run(time)
    {
        const {sound} = await Audio.Sound.createAsync(uri);
        setRunning(true);

        setTimeID(
            setTimeout(() => {
                sound.playAsync();
                setRunning(false);
            }, time * 1000)
        );
    } 

    function stop()
    {
        setRunning(false);
        clearTimeout(timeID);
    }

    return(
        <View style={styles.container}>

            {
                !running &&

            <View style={styles.box_btn}>
                <Button
                    title='15 - 20 min'
                    onPress={()=>{run(set_time(15,20))}}
                    disabled= {running}
                ></Button>

                <Button
                    title='20 - 30 min'
                    onPress={()=>{run(set_time(20,30))}}
                ></Button>

                <Button
                    title='30 - 60 min'
                    onPress={()=>{run(set_time(30,60))}}
                ></Button>
            </View>

            }


            {
                running &&
            <View style={styles.stop_btn}>
                <Button
                    title='Stop'
                    onPress={stop}
                ></Button>

            </View>
            }
        </View>
    );
}