import PropTypes from 'prop-types';
import { Box } from 'components/Common';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsNames = Object.keys(options);
  const handleFeedback = e => onLeaveFeedback(e.target.name);

  return (
    <Box>
      {optionsNames.map(option => (
        <Button
          type="button"
          name={option}
          key={option}
          onClick={handleFeedback}
        >
          {option}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
