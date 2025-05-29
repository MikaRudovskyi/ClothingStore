import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const savedCartItemsRaw = localStorage.getItem("cartItems");
    if (savedCartItemsRaw) {
      try {
        const savedCartItems = JSON.parse(savedCartItemsRaw);
        setCartItems(savedCartItems);
      } catch (e) {
        console.error("Invalid JSON in cartItems:", e);
      }
    }
  }, []);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalItems(newTotal);

    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId, size) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(
        (item) => item.id !== productId || item.size !== size
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const decreaseQuantity = (productId, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.size === size && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const increaseQuantity = (productId, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
