import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <p style={{ color: "#b3b3b3"  }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                at fermentum mi, vitae auctor purus. Mauris eu purus et nisl
                dignissim aliquet. Sed at congue nulla. Vestibulum sit amet
                condimentum nisi.
              </p>
            </Column>
            <Column>
              <Heading>CONTACT INFO</Heading>
              <FooterLink href="#">ADDRESS:</FooterLink>

              <FooterLink href="#">PHONE:</FooterLink>
              <FooterLink href="#">EMAIL:</FooterLink>
              <FooterLink href="#">WORKING DAYS:</FooterLink>
            </Column>
            <Column  >
              <Heading>CUSTOMER SERVICE</Heading>
              <FooterLink style={{ color: "#b3b3b3"  }} href="#">Help & FAQs</FooterLink>
              <FooterLink  style={{ color: "#b3b3b3"  }}href="#">Order Tracking</FooterLink>
              <FooterLink  style={{ color: "#b3b3b3"  }}href="#">Shipping & Delivery</FooterLink>
              <FooterLink  style={{ color: "#b3b3b3"  }}href="#">My Accounts</FooterLink>
            </Column>
            <Column>
              <Heading>POPULAR TAGS</Heading>
              <FooterLink  style={{ color: "#b3b3b3"  }}href="#">Bag</FooterLink>
              <FooterLink  style={{ color: "#b3b3b3"  }}href="#">Black</FooterLink>
              <FooterLink  style={{ color: "#b3b3b3"  }}href="#">Clothes</FooterLink>
              <FooterLink  style={{ color: "#b3b3b3"  }}href="#">Winter</FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </div>
  );
};
export default Footer;
