import React from "react";
import styled from "styled-components";

const DeliveryContainer = styled.div`
  padding: 80px 20px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: "Inter", "Segoe UI", sans-serif;
  color: #fefefe;
`;

const Section = styled.div`
  background: linear-gradient(145deg, #1c1c1c, #141414);
  border: 1px solid #2a2a2a;
  border-radius: 24px;
  padding: 40px 30px;
  margin-bottom: 40px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(255, 215, 0, 0.15);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #ffd700;
  text-align: center;
  letter-spacing: 1px;
`;

const Subtitle = styled.h3`
  font-size: 1.7rem;
  margin-bottom: 20px;
  color: #ffcc00;
  border-left: 4px solid #ffd700;
  padding-left: 12px;
`;

const Text = styled.p`
  font-size: 1.15rem;
  line-height: 1.9;
  margin-bottom: 16px;
  color: #ddd;
`;

const List = styled.ul`
  padding-left: 24px;
  margin-top: 10px;
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 10px;
  position: relative;
  padding-left: 12px;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #ffd700;
    font-size: 1.2rem;
  }
`;

const Link = styled.a`
  color: #ffd700;
  text-decoration: underline;
  transition: color 0.2s ease;

  &:hover {
    color: #ffae00;
    text-decoration: none;
  }
`;

const Delivery = () => {
  return (
    <DeliveryContainer>
      <Title>Delivery & FAQ</Title>

      <Section>
        <Subtitle>How long does it take to deliver my order?</Subtitle>
        <Text>
          We know you want to receive your merch as soon as possible, so we use
          proven delivery services. Your order will arrive on time and in
          perfect condition.
        </Text>
      </Section>

      <Section>
        <Subtitle>Delivery in Ukraine</Subtitle>
        <Text>
          Parcels are sent via Nova Poshta. Choose delivery to your door or a
          pick-up point. Delivery takes 3–4 business days. We'll send a tracking
          number after your order is assembled.
        </Text>
        <Text>
          Customized products may take up to 30 days. Orders placed after
          business hours or on holidays are sent on the next working day.
        </Text>
      </Section>

      <Section>
        <Subtitle>Worldwide Shipping</Subtitle>
        <Text>
          We ship worldwide with Ukrposhta. See available countries{" "}
          <Link
            href="https://www.ukrposhta.ua/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </Link>
          .
        </Text>
        <Text>
          Average delivery time is 20–30 days (CIS, Europe, USA), and 30–40 days
          elsewhere. Orders are shipped on Mon/Wed/Fri (except holidays).
        </Text>
      </Section>

      <Section>
        <Subtitle>Return and Exchange</Subtitle>
        <List>
          <ListItem>Keep the receipt and original packaging.</ListItem>
          <ListItem>Don't wear the item or remove tags.</ListItem>
          <ListItem>Return within 14 days of receiving the order.</ListItem>
          <ListItem>Customized goods cannot be returned or exchanged.</ListItem>
          <ListItem>
            If the product doesn’t fit — return shipping is on you.
          </ListItem>
          <ListItem>
            If defective or our mistake — we cover return shipping.
          </ListItem>
        </List>
        <Text>
          Refunds are processed within 30 days. Delivery and transfer fees may
          be deducted.
        </Text>
      </Section>

      <Section>
        <Subtitle>How Can I Pay for My Order?</Subtitle>
        <List>
          <ListItem>
            <strong>Bank Card:</strong> Secure LiqPay payments (Visa,
            Mastercard).
          </ListItem>
          <ListItem>
            <strong>Cash on Delivery:</strong> Nova Poshta only (20 UAH + 2% of
            the order).
          </ListItem>
          <ListItem>
            <strong>PayPal:</strong> No extra contact needed.
          </ListItem>
          <ListItem>
            <strong>Bank Transfer:</strong> For bulk orders, email us at{" "}
            <Link href="mailto:order@navi.gg">order@navi.gg</Link>.
          </ListItem>
        </List>
      </Section>
    </DeliveryContainer>
  );
};

export default Delivery;
