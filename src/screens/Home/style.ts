import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
      scrollContent: {
        flexGrow: 1, 
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        marginTop: "10%",
        backgroundColor: '#ffffff70',
        borderRadius: 15,
        padding: 20,
        marginVertical: 20, 
      },
      content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "25%"
      },
      searchText: {
        fontFamily: "Niramit_700Bold",
        fontSize: 32,
        color: "#fff",
      },
      description: {
        fontFamily: "Niramit_600SemiBold",
        fontSize: 23,
        color: "#fff"
      }
});