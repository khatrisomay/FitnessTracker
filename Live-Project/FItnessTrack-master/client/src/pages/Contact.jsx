import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 700;
`;

const Content = styled.div`
  padding: 0px 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact Us</Title>
        <Content>
          <p>Get in touch with us!</p>
          <p>Email: support@fitnesstracker.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Fitness Street, Health City, HC 12345</p>
          <p>Follow us on social media for updates and tips!</p>
          <br />
          <p><strong>Created by Somay Khatri and Priyanshu</strong></p>
          <p><strong>Students of SRM University Delhi NCR Sonipat</strong></p>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Contact;
