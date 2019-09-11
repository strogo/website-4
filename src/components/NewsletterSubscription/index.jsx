import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { injectIntl, FormattedMessage } from 'react-intl';
import {
  MokkappsWhite,
  MokkappsBlack,
  MokkappsRed,
} from '../../styles/variables';
import { Input } from '../ContactForm';

const Wrapper = styled.div`
  background-color: ${MokkappsWhite};
  border-radius: 5px;
  padding: 10px;
  max-width: 300px;
`;

const Form = styled.form`
  text-align: center;
  color: ${MokkappsBlack};
`;

const SubscribeInput = styled.input`
  background-color: ${MokkappsRed};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: white;
  padding: 0.5rem 1.5rem;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsletterSubscription = ({ intl }) => {
  return (
    <Wrapper>
      <Form
        action="https://tinyletter.com/Mokkapps"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://tinyletter.com/Mokkapps', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
        <h3>
          {' '}
          <FormattedMessage id="joinTheNewsletter" />
        </h3>
        <EmailContainer>
          <label htmlFor="tlemail">
            <FormattedMessage id="enterEmail" />
          </label>
          <Input type="text" name="email" id="tlemail" />
        </EmailContainer>
        <input type="hidden" value="1" name="embed" />
        <SubscribeInput type="submit" value={intl.formatMessage({ id: "subscribe" })} />
      </Form>
    </Wrapper>
  );
};

NewsletterSubscription.propTypes = {
  intl: PropTypes.any.isRequired
};

export default injectIntl(NewsletterSubscription);