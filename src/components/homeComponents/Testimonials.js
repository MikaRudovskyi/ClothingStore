import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const testimonials = [
    {
      id: 1,
      text: t("testimonialsText1"),
      author: t("testimonialsAuthor1"),
    },
    {
      id: 2,
      text: t("testimonialsText2"),
      author: t("testimonialsAuthor2"),
    },
    {
      id: 3,
      text: t("testimonialsText3"),
      author: t("testimonialsAuthor3"),
    },
  ];

  return (
    <TestimonialsContainer>
      <h2>{t("customersReviews")}</h2>
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
