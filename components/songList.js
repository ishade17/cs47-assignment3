import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Images } from "../assets/Themes/index";
import SongItem from "./songItem"


const renderSongItem = ({ item }) => (
  <SongItem
    listIndex={item.track_number}
    albumImageURL={item.album.images[0].url} 
    songTitle={item.name} 
    artist={item.artists[0].name} 
    albumName={item.album.name} 
    songDuration={item.duration_ms} 
  />
);

const songList = (tracks) => {

  return (
    <View style={styles.container}>

      <View style={styles.titleRow}>
        <Image source={Images.spotify} style={styles.spotifyIcon}/>
        <Text style={styles.titleText}>My Top Tracks</Text>
      </View>

      <FlatList
        data={tracks.tracks}
        renderItem={(item) => renderSongItem(item)}
        keyExtractor={(item) => item.track_number}
      />

    </View>    
 
  );
}

export default songList;

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  spotifyIcon: {
    width: 30,
    height: 30,
    margin: 5
  },
  titleText: {
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
  }
});
