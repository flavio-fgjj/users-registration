import {StyleSheet} from 'react-native';
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#F6F6F6',
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 6,

		flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',

		// Android
		elevation: 6,

		// iOS
		shadowColor: '#000',
		shadowOffset: {
				width: 0,
				height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

    height: 60,
    width: Dimensions.get('window').width - 30,

    padding: 15
  },
  info: {
		flexDirection: 'column',
	},
  actions: {
		flexDirection: 'row',
	},
});
