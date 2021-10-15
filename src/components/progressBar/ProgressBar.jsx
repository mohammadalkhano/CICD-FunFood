import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export const ProgressBar = () => {
  const [progress, setProgess] = React.useState(30);
  return (
    <div>
      <LinearProgress
        variant="indeterminate"
        value={progress}
        color="primary"
      />
    </div>
  );
};
