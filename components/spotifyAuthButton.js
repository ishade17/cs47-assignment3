import { StyleSheet, Text, Pressable, Image } from "react-native";
import useSpotifyAuth from "../utils/useSpotifyAuth";
import { Images, Themes } from "../assets/Themes/index";
import SpotifyLogo from "../assets/Images/images"

const SpotifyAuthButton = ({ stateFunction }) => {

  // const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

  return (
    
    <Pressable style={styles.connectButton} onPress={stateFunction}> 

      <Image source={Images.spotify} style={styles.spotifyIcon}/>
      <Text style={styles.connectButtonText}>CONNECT WITH SPOTIFY</Text>

    </Pressable>  

  );
}


export default SpotifyAuthButton;

const styles = StyleSheet.create({
  connectButton: {
    flexDirection: 'row',
    color: "green",
    borderRadius: 99999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.spotify,
    height: "5%",
    width: "70%",
    // justifyContent: 'space-around',
  },
  connectButtonText: {
    fontWeight: 'bold',
    color: "white",
    fontSize: 18
  },
  spotifyIcon: {
    width: 20,
    height: 20,
    marginRight: 8
  },
  logText: {
    color: "white"
  }
});