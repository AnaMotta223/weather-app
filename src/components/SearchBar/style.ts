import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchBar: {
    width: 320,
    height: 60,
    backgroundColor: "#023970",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 25,
    borderRadius: 25,
    alignSelf: "center",
    paddingTop: 4
   }, 
  search: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Niramit_500Medium",
    marginRight: 60
  },
  elevation: {
    elevation: 15,
    shadowColor: '#000',
  },
});