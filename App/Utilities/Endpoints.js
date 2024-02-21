const EndPoints = {
    BaseURL: "http://localhost:7241",

    // ProductImage
    productImageById: "/api/productImageData/{id}",
    productsImageData: "/api/productImageData",

    // Products
    productById: "/api/products/{id}",

    // Accounts
    Login: "/api/customer/login",
    Signup: "/api/customer/signup",

    // Customers
    GetAllCustomers: "/api/customer",

    // Cart
    GetAllCarts: "/api/cart/AllCarts",
    GetCartById: "/api/cart/{id}",
    AddToCart: "/api/cart/CreateCart",
    GetCartByCustomerId: "/api/cart/customer",

    // CartItems
    GetAllCartItems: "/api/cartItem/AllCartItems",
    GetCartItemById: "/api/cartItem/{id}",
    AddToCartItem: "/api/cartItem/CreateCartItem",
    UpdateCartItemCount: "/api/cartItem/updateCartItemCount",
};

export default EndPoints;
