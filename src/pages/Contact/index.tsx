import { Header } from "../../components/Header";
import { Container } from "./style";
import location from "../../assets/location.png";
import locationsvg from "../../assets/location.svg";
import mail from "../../assets/mail.svg";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <Container>
        <div className="infos animeLeft">
          <img src={locationsvg} alt="effect" className="effect" />
          <img src={mail} alt="maileffect" className="maileffect" />
          <form onSubmit={handleSubmit}>
            <div className="description">
              <h1 className="title">Contact Us</h1>
              <p>Our Friendly team would love to hear from you</p>
            </div>
            <div className="name">
              <span>
                <label>First Name</label>
                <input type="text" name="first" placeholder="First Name" />
              </span>
              <span>
                <label>Last Name</label>
                <input type="text" name="last" placeholder="Last Name" />
              </span>
            </div>
            <span>
              <label>E-mail</label>
              <input type="email" name="email" placeholder="you@company.com" />
            </span>
            <span>
              <label>Message</label>
              <textarea name="message" cols={30} rows={10}></textarea>
            </span>
            <button>Send Message</button>
          </form>
        </div>
        <div>
          <img src={location} alt="location" className="animeRight" />
        </div>
      </Container>
    </>
  );
};
