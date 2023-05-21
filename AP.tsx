/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable space-infix-ops */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { createStackNavigator} from "@react-navigation/stack";
import Header from "./componets/Header";
import App from "./App";

const navigate=createStackNavigator({
    Home:App
},
{
    initialRouteName:'Home',
    defaultNavigationOption:{
        title:'App'
    },
}
)

// export default