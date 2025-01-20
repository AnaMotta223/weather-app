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
      citiesList: {
        display: "flex", 
        marginTop: "6%", 
        gap: 20 
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
      searchText: {
        fontFamily: "Niramit_700Bold",
        fontSize: 32,
        color: "#fff",
      },
      description: {
        fontFamily: "Niramit_600SemiBold",
        fontSize: 23,
        color: "#fff"
      },
      noResultsContainer: {
        marginTop: "5%",
        textAlign: "center",
        display: "flex",
        alignItems: "center"
      },
      notFound: {
        fontFamily: "Niramit_700Bold",
        fontSize: 80,
        color: '#fff'
      },
      notFoundImage: {
        marginTop: -15
      },
      noResultsText: {
        fontFamily: "Niramit_700Bold",
        fontSize: 24,
        color: '#fff',
        marginTop: 15
      }
});