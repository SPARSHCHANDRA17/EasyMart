import React from "react";

const About = () => {
  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px",
    background: "#18181b",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    textAlign: "center",
  };

  const socialBtnStyle = {
    display: "inline-block",
    margin: "10px",
    padding: "10px 20px",
    background: "#27272a",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <img
        src="/EasyMartLogo.svg"
        alt="EasyMart"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #f97316",
          marginBottom: "20px",
          boxShadow: "0 4px 20px rgba(249, 115, 22, 0.4)",
        }}
      />
      <h2 style={{ fontSize: "2.5rem", marginBottom: "10px", color: "#fff" }}>
        About EasyMart
      </h2>
      <h3
        style={{ fontSize: "1.5rem", color: "#f97316", marginBottom: "15px" }}
      >
        Founded by Sparsh Chandra
      </h3>

      <p
        style={{
          color: "#a1a1aa",
          fontSize: "1.2rem",
          lineHeight: "1.8",
          maxWidth: "700px",
          margin: "0 auto 30px auto",
        }}
      >
        EasyMart is a modern online shopping destination designed to make
        everyday buying simple, fast, and enjoyable. We offer a wide range of
        products including electronics, fashion, home essentials, accessories,
        and lifestyle items, all carefully selected to meet the needs of modern
        customers.
      </p>

      <p
        style={{
          color: "#a1a1aa",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          maxWidth: "700px",
          margin: "0 auto 20px auto",
        }}
      >
        Our mission is to provide a seamless shopping experience with easy
        navigation, secure checkout, reliable delivery, and customer-friendly
        support. At EasyMart, we believe in quality, convenience, and building
        trust with every order.
      </p>

      <p
        style={{
          color: "#a1a1aa",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          maxWidth: "700px",
          margin: "0 auto 20px auto",
        }}
      >
        EasyMart brings together great products, competitive prices, and a
        polished online experience for customers who want more value in less
        time. Whether you are shopping for daily essentials or discovering
        something new, EasyMart is here to serve you.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            ...socialBtnStyle,
            background: "rgba(249, 115, 22, 0.15)",
            borderColor: "#f97316",
            color: "#f97316",
          }}
        >
          🛍️ Wide Product Range
        </div>
        <div
          style={{
            ...socialBtnStyle,
            background: "rgba(59, 130, 246, 0.15)",
            borderColor: "#3b82f6",
            color: "#3b82f6",
          }}
        >
          ⚡ Fast & Easy Shopping
        </div>
        <div
          style={{
            ...socialBtnStyle,
            background: "rgba(16, 185, 129, 0.15)",
            borderColor: "#10b981",
            color: "#10b981",
          }}
        >
          🔒 Secure Checkout
        </div>
        <div
          style={{
            ...socialBtnStyle,
            background: "rgba(236, 72, 153, 0.15)",
            borderColor: "#ec4899",
            color: "#ec4899",
          }}
        >
          📦 Trusted Delivery
        </div>
      </div>
    </div>
  );
};

export default About;
