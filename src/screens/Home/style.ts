import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
      scrollContent: {
        flexGrow: 1, // Garante que o conteúdo pode crescer para permitir a rolagem
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        marginTop: "10%",
        backgroundColor: '#ffffff70',
        borderRadius: 15,
        padding: 20,
        marginVertical: 20, // Dá espaço acima e abaixo para o container
        // elevation: 5,
      },
});