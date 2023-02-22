import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <FeedbackButton
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </FeedbackButton>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
