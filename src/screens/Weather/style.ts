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
      loadingContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 30 
      },
      loadingIndicator: {
        transform: [{scale: 2}]
      },
      loadingText: {
        fontFamily: "Niramit_700Bold", 
        fontSize: 35, color: "#fff", 
      },
      mainContent: {
        display: "flex",
        alignItems: "center",
        marginTop: "8%",
      },
      weather: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -35
      },
      animation: {
        width: 300, 
        height: 300
      },
      description: {
        marginTop: -65,
        transform: [{translateX: -30}]
      },
      temperature: {
        fontFamily: "Niramit_700Bold",
        textAlign: "center",
        color: "#fff",
        fontSize: 32
      },
      weatherDescription: {
        fontFamily: "Niramit_700Bold",
        textAlign: "center",
        color: "#fff",
        fontSize: 21,
        width: 100,
        marginTop: -10
      }
});