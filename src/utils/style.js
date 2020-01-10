import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    test_container: {
        width: winWidth,
        padding: 20,
        backgroundColor: 'grey'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main_container: {
        width: winWidth,
        flex: 1
    },
    full_width:{
        width: winWidth,
    },
    bottomFixed: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    bottomNotFixed: {
        paddingTop: 50,
        paddingBottom: 20
    },
    button_container:{
        flex:1,
        alignItems: 'center',
        paddingVertical: 20,
    },
    button:{
        shadowColor: "#F86790",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 6,
    }
});
