import { Box } from 'components/Common';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsNames = Object.keys(options);

  return (
    <Box>
      {optionsNames.map(option => (
        <Button type="button" key={option}>
          {option}
        </Button>
      ))}
    </Box>
  );
};
