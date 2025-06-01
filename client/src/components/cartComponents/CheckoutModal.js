import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { X, ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  padding: 2rem 1rem;
`;

const ModalContainer = styled.div`
  background: #111;
  color: #fdd835;
  border-radius: 20px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
  position: relative;
  font-family: "Segoe UI", sans-serif;
  animation: ${fadeInScale} 0.4s ease-out;

  h2 {
    margin-top: 0;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: #fdd835;
    }
  }

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    input,
    textarea,
    select {
      flex: 1 1 45%;
      padding: 0.75rem 1rem;
      border-radius: 10px;
      border: 1px solid #333;
      background: #1a1a1a;
      color: #fdd835;
      font-size: 1rem;

      &::placeholder {
        color: #999;
      }

      &:focus {
        outline: none;
        border-color: #fdd835;
        box-shadow: 0 0 8px #fdd83566;
      }
    }

    textarea {
      flex: 1 1 100%;
      resize: vertical;
    }

    select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg fill='%23fdd835' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 1rem center;
      background-size: 1rem;
    }

    .full-width {
      flex: 1 1 100%;
    }

    label {
      color: #ccc;
      font-size: 0.9rem;
    }

    .actions {
      flex: 1 1 100%;
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 1rem;

      button {
        padding: 0.7rem 1.5rem;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;

        &:first-child {
          background: #333;
          color: #fff;

          &:hover {
            background: #444;
          }
        }

        &:last-child {
          background: linear-gradient(135deg, #fdd835, #ffc107);
          color: #000;
          font-weight: bold;

          &:hover {
            background: linear-gradient(135deg, #ffe082, #ffca28);
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 16px;

    h2 {
      font-size: 1.4rem;
      flex-direction: column;
      gap: 0.25rem;
    }

    form {
      gap: 0.75rem;

      input,
      textarea,
      select {
        flex: 1 1 100%;
        font-size: 0.95rem;
        padding: 0.6rem 0.9rem;
      }

      .actions {
        flex-direction: column;
        align-items: stretch;

        button {
          width: 100%;
          font-size: 1rem;
        }
      }
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  color: #fdd835;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 480px) {
    top: 0.8rem;
    right: 0.8rem;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const CheckoutModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(t("successfullOrder"));
    onClose();
  };

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X />
        </CloseButton>
        <h2>
          <ShoppingCart /> {t("checkoutOrder")}
        </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={`${t("name")} *`} required />
          <input type="text" placeholder={`${t("lastName")} *`} required />
          <input type="text" placeholder={`${t("country")} *`} required />
          <input type="text" placeholder={`${t("city")} *`} required />
          <input
            type="text"
            placeholder={`${t("regionDistrict")} *`}
            required
          />
          <input type="text" placeholder={`${t("street")} *`} required />
          <input type="text" placeholder={`${t("house")} *`} required />
          <input type="text" placeholder={t("apartmentNumber")} />
          <input type="text" placeholder={`${t("postcode")} *`} required />
          <input type="tel" placeholder={`${t("phone")} *`} required />
          <input type="email" placeholder={`${t("email")} *`} required />
          <div className="full-width">
            <label>
              <input type="checkbox" /> {t("billingAddress")}
            </label>
          </div>
          <textarea rows="3" placeholder={t("comment")} />
          <select className="full-width">
            <option>{t("shippingMethod")}</option>
          </select>
          <div className="full-width">
            <label>
              <input type="checkbox" required />
              {`${t("agreeTermsAndConditions")} *`}
            </label>
          </div>
          <div className="actions">
            <button type="button" onClick={onClose}>
              {t("cancel")}
            </button>
            <button type="submit">{t("makeOrder")}</button>
          </div>
        </form>
      </ModalContainer>
    </Backdrop>
  );
};

export default CheckoutModal;
