import React from "react";
import styled from "styled-components";

const TestimonialsContainer = styled.div`
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #ffd700;
  }

  .testimonials {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .testimonial {
    background-color: #1e1e1e;
    padding: 20px;
    margin: 20px;
    width: 300px;
    border-radius: 8px;

    p {
      font-style: italic;
    }
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Great store! Quality clothes and fast delivery.",
      author: "Aleksi Virolainen",
    },
    {
      id: 2,
      text: "Very happy with the purchase. Will order more!",
      author: "Justinas Lekavičius",
    },
    {
      id: 3,
      text: "Thank you for the great service! I recommend to everyone.",
      author: "Mihai Ivan",
    },
  ];

  return (
    <TestimonialsContainer>
      <h2>Customer Reviews</h2>
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <p>"{testimonial.text}"</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;
