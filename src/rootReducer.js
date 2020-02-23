import { combineReducers } from 'redux';
import userLoginReducer from './containers/Login/reducer';
import userRegisterReducer from './containers/Registration/reducer';
import searchProductReducer from './containers/SearchProduct/reducer';
import productListReducer from './containers/ProductList/reducer';
import emailSubscribeReducer from './containers/Footer/reducer';
import homePageReducer from './containers/App/reducer';
import productDetailReducer from './containers/ProductDetails/reducer';
import forgotPassword from './containers/ForgotPassword/reducer';
import getCartReducer from './containers/Cart/reducer';
import changePasswordReducer from './containers/ChangePassword/reducer';
import getUserAddressReducer from './containers/MyAddresses/reducer';
import trackOrderReducer from './containers/TrackingOrder/reducer';
import getPromoCodeReducer from './containers/PaymentMethods/reducer';
import getCMSReducer from './containers/CmsPages/reducer';
import commonReducer from './containers/Common/reducer';
import shoppingBasketReducer from './containers/ShoppingBasket/reducer';
import headerReducer from './containers/Header/reducer';
import shippingInfoReducer from './containers/DeliveryInfo/reducer';
import getOrderConfirmationReducer from './containers/OrderConfirmation/reducer';
import issueOrderReducer from './containers/IssueWithOrder/reducer';
import jumpPagesReducer from './containers/JumpPages/reducer';
import modifyOrderReducer from './containers/ModifyOrder/reducer';
import myOrdersReducer from './containers/MyOrders/reducer';

export default combineReducers({
  searchProductReducer,
  productListReducer,
  productDetailReducer,
  userLoginReducer,
  userRegisterReducer,
  homePageReducer,
  emailSubscribeReducer,
  changePasswordReducer,
  forgotPassword,
  getCartReducer,
  getUserAddressReducer,
  trackOrderReducer,
  getPromoCodeReducer,
  getCMSReducer,
  commonReducer,
  headerReducer,
  shoppingBasketReducer,
  shippingInfoReducer,
  getOrderConfirmationReducer,
  issueOrderReducer,
  myOrdersReducer,
  jumpPagesReducer,
  modifyOrderReducer
})
